import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Navbar() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <header className="navbar glass">
      <NavLink to="/" className="navbar-brand">
        <img src="/logo.png.png" alt="Logo" className="navbar-logo-img" />
        <span>PC Builder</span>
      </NavLink>
      <nav className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
          end
        >
          Inicio
        </NavLink>
        <NavLink
          to="/ensamblar"
          className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
        >
          Ensambla tu PC
        </NavLink>
        {isAuthenticated ? (
          <span className="nav-user">
            <span className="nav-user-name">{user.name}</span>
            <button type="button" className="nav-link nav-logout" onClick={handleLogout}>
              Salir
            </button>
          </span>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
          >
            Ingresar
          </NavLink>
        )}
      </nav>
    </header>
  );
}
