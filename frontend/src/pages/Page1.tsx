import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Navigate } from "react-router-dom";

const Page1 = () => {
  const user = useSelector((state: RootState) => state.user);

  if (!user.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Page 1 - Welcome, {user.displayName}!</h1>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="User avatar" style={{ width: '100px', borderRadius: '50%' }} />
    </div>
  );
};

export default Page1;