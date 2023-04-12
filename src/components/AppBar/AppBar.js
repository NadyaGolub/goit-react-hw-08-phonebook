import { useAuth } from 'hooks';
import { Navigation } from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { Header } from './AppBar.styled';


export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation/>
      {isLoggedIn ? <UserMenu/> : <AuthNav />}
    </Header>
  );
};