import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const from = location.state?.from || '/';

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await login({ email, password });
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function fillDemo() {
    setEmail('demo@pcbuilder.com');
    setPassword('demo123');
  }

  return (
    <div className="login-page">
      <form className="login-card glass" onSubmit={handleSubmit}>
        <header className="login-head">
          <h1>Iniciar sesión</h1>
          <p className="muted">
            Accede para usar el optimizador de builds.
          </p>
        </header>

        <label className="field">
          <span className="field-label">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            autoComplete="email"
          />
        </label>

        <label className="field">
          <span className="field-label">Contraseña</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            autoComplete="current-password"
          />
        </label>

        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? 'Ingresando…' : 'Ingresar'}
        </button>

        {error && <p className="error-text">{error}</p>}

        <button type="button" className="login-demo" onClick={fillDemo}>
          Usar cuenta demo (demo@pcbuilder.com / demo123)
        </button>
      </form>
    </div>
  );
}