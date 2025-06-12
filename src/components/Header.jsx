import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../stores/authSlice';
import { Link } from 'react-router-dom';

function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <h1>Employee Dashboard</h1>
      {isAuthenticated ? (
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </header>
  );
}

export default Header;