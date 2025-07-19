import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../configs/firebase.config';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      // console.log(user);
      dispatch(login({
        uid: user.uid,
        displayName: user.displayName || '',
        email: user.email || '',
        photoURL: user.photoURL || '',
        isLoggedIn: true,
      }));
      navigate('/page1');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <>
      some others way to login: ...
      <button onClick={handleLogin}>Login with Google</button>;
    </>
  ) 
};

export default LoginPage;