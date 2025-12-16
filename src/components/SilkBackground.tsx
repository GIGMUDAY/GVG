import React, { useEffect, useRef } from 'react';

const vertexShaderSource = `
attribute vec2 a_position;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const fragmentShaderSource = `
precision highp float;

uniform vec3 iResolution;
uniform float iTime;
uniform vec4 iMouse;

#define INVERT 1

float noise(vec2 p) {
    return smoothstep(-0.5, 0.9, sin((p.x - p.y) * 555.0) * sin(p.y * 1444.0)) - 0.4;
}

float fabric(vec2 p) {
    const mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
    float f = 0.4 * noise(p);
    f += 0.3 * noise(p = m * p);
    f += 0.2 * noise(p = m * p);
    return f + 0.1 * noise(m * p);
}

float silk(vec2 uv, float t) {
    float s = sin(5.0 * (uv.x + uv.y + cos(2.0 * uv.x + 5.0 * uv.y)) + sin(12.0 * (uv.x + uv.y)) - t);
    s = 0.7 + 0.3 * (s * s * 0.5 + s);
    s *= 0.9 + 0.6 * fabric(uv * min(iResolution.x, iResolution.y) * 0.0006);
    return s * 0.9 + 0.1;
}

float silkd(vec2 uv, float t) {
    float xy = uv.x + uv.y;
    float d = (5.0 * (1.0 - 2.0 * sin(2.0 * uv.x + 5.0 * uv.y)) + 12.0 * cos(12.0 * xy)) * cos(5.0 * (cos(2.0 * uv.x + 5.0 * uv.y) + xy) + sin(12.0 * xy) - t);
    return 0.005 * d * (sign(d) + 3.0);
}

void mainImage(out vec4 fragColor, vec2 fragCoord) {
    float mr = min(iResolution.x, iResolution.y);
    vec2 uv = fragCoord / mr;

    float t = iTime;
    uv.y += 0.03 * sin(8.0 * uv.x - t);

    if (iMouse.z > 1.0)
        uv += smoothstep(0.5, 0.0, distance(iMouse.xy / mr, uv)) * 0.08;

    float s = sqrt(silk(uv, t));
    float d = silkd(uv, t);

    vec3 c = vec3(s);
    c += 0.7 * vec3(1.0, 0.83, 0.6) * d;
    c *= 1.0 - max(0.0, 0.8 * d);
#if INVERT
    c = pow(c, 0.3 / vec3(0.52, 0.5, 0.4));
    c = 1.0 - c;
#else
    c = pow(c, vec3(0.52, 0.5, 0.4));
#endif

    fragColor = vec4(c, 1.0);
}

void main() {
    vec4 color = vec4(0.0);
    mainImage(color, gl_FragCoord.xy);
    gl_FragColor = color;
}
`;

const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
};

const createProgram = (
  gl: WebGLRenderingContext,
  vertexShader: WebGLShader,
  fragmentShader: WebGLShader
) => {
  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }
  return program;
};

const SilkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.warn('WebGL not supported, falling back to static background.');
      return;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    const program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) return;

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    );

    gl.useProgram(program);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, 'iResolution');
    const timeLocation = gl.getUniformLocation(program, 'iTime');
    const mouseLocation = gl.getUniformLocation(program, 'iMouse');

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, width, height);
    };

    resize();
    window.addEventListener('resize', resize);

    let animationFrame = 0;
    const start = performance.now();

    const render = (now: number) => {
      const timeInSeconds = (now - start) / 1000;
      gl.useProgram(program);
      if (resolutionLocation) {
        gl.uniform3f(resolutionLocation, canvas.width, canvas.height, 1);
      }
      if (timeLocation) {
        gl.uniform1f(timeLocation, timeInSeconds);
      }
      if (mouseLocation) {
        gl.uniform4f(mouseLocation, 0, 0, 0, 0);
      }
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrame = requestAnimationFrame(render);
    };

    animationFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      if (buffer) gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/35" />
    </div>
  );
};

export default SilkBackground;
