import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../configs/firebase.config';

export const handleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log('User info:', result.user);
  } catch (error) {
    console.error('Login error:', error);
  }
};

