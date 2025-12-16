import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDU56UGZzIfGc6_fowoxL64vbawa5g5yf0",
  authDomain: "green-investment-group-f7376.firebaseapp.com",
  projectId: "green-investment-group-f7376",
  storageBucket: "green-investment-group-f7376.firebasestorage.app",
  messagingSenderId: "880764756554",
  appId: "1:880764756554:web:4299d4f02deaa9f5b3bcb3",
  measurementId: "G-C8WGTPVJRF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export default app;