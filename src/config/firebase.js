import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Конфигурация Firebase (замените на свои значения)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Экспорт сервисов Firebase
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export default app; 