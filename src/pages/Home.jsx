import { Link } from 'react-router-dom';

const FEATURES = [
  {
    icon: '🎮',
    title: 'Componentes Gamer',
    desc: 'Catalogo completo de procesadores, tarjetas de video, memorias y mas — todos de alto rendimiento.',
  },
  {
    icon: '🔍',
    title: 'Compatibilidad en Tiempo Real',
    desc: 'Verificamos automaticamente que todos los componentes sean compatibles entre si.',
  },
  {
    icon: '💰',
    title: 'Precios en Pesos Colombianos',
    desc: 'Todos los precios estan en COP con datos reales de tiendas colombianas.',
  },
  {
    icon: '🖥️',
    title: 'PC 3D Interactiva',
    desc: 'Visualiza tu ensamble en una PC 3D que se llena a medida que seleccionas componentes.',
  },
  {
    icon: '⚡',
    title: 'Paso a Paso Guiado',
    desc: 'Nuestro asistente te guia desde la plataforma (Intel/AMD) hasta el ultimo componente.',
  },
  {
    icon: '📊',
    title: 'Resumen de Build',
    desc: 'Ve el desglose completo de tu ensamble con el precio total antes de comprar.',
  },
];

export default function Home() {
  return (
    <div className="home">
      <section className="hero glass">
        <span className="hero-badge">PC Builder Colombia</span>
        <h1 className="hero-title">
          Bienvenido a tu
          <br />
          Ensamblador de PC Gamer
        </h1>
        <p className="hero-subtitle">
          La herramienta definitiva para armar tu PC gamer ideal.
          Selecciona componentes de alto rendimiento, verifica compatibilidad
          en tiempo real y obtene el mejor rendimiento — todo en pesos colombianos.
        </p>
        <div className="hero-actions">
          <Link to="/ensamblar" className="btn btn-primary">
            Ensambla tu PC
          </Link>
          <Link to="/login" className="btn btn-secondary">
            Iniciar Sesion
          </Link>
        </div>
      </section>

      <section className="welcome-features">
        <h2 className="welcome-features-title">Por que usar nuestro ensamblador?</h2>
        <div className="welcome-features-grid">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="welcome-feature-card glass">
              <span className="welcome-feature-icon">{feature.icon}</span>
              <h3 className="welcome-feature-title">{feature.title}</h3>
              <p className="welcome-feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="welcome-cta glass">
        <h2>Listo para ensamblar tu PC gamer?</h2>
        <p className="muted">
          Nuestro asistente te guia paso a paso para elegir los mejores
          componentes segun tu presupuesto y necesidades.
        </p>
        <Link to="/ensamblar" className="btn btn-primary">
          Comenzar Ahora
        </Link>
      </section>
    </div>
  );
}
