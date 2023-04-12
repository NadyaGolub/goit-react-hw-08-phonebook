import { NavL } from './AuthNav.styled';


const AuthNav = () => {
  return (
    <div>
      <NavL  to="/register">
        Register
      </NavL>
      <NavL  to="/login">
        Log In
      </NavL>
    </div>
  );
};

export default AuthNav;