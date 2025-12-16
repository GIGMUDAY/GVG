declare module '@splinetool/runtime' {
  export interface ApplicationOptions {
    renderOnDemand?: boolean;
  }

  export class Application {
    constructor(canvas: HTMLCanvasElement, options?: ApplicationOptions);
    load(scene: string): Promise<void>;
    dispose(): void;
    setSize(width: number, height: number): void;
    requestRender(): void;
  }
}

