### Tech Stack
- frontend: React.js, Redux
- backend: Express.js
- cloud: render
- another tools: firebase

### 
setup
- install package: `npm i`
- run proj: `npm run dev`
- build user interface (in `backend`): `npm run build:ui`
- build ui && push code → deploy to Render: `npm run deploy:full`

### Firebase config
`frontend/src/configs/firebase.config.ts`
```ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
```

`frontend/.env`
```
```
`backend/.env`
```
```