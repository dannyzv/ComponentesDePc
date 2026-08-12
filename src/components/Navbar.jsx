import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar glass">
      <NavLink to="/" className="navbar-brand">
        <span className="navbar-logo">CPU</span>
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
          to="/builder"
          className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
        >
          Constructor
        </NavLink>
        <NavLink
          to="/optimizer"
          className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
        >
          Optimizador
        </NavLink>
      </nav>
    </header>
  );
}