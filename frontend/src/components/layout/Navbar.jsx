import React from 'react';
import { NavLink } from 'react-router-dom';
import { Globe, BarChart2, BrainCircuit, Activity, Eye, Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass-panel" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        marginBottom: '2rem',
        borderRadius: '0 0 16px 16px',
        borderTop: 'none'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ 
            background: 'rgba(0, 240, 255, 0.1)', 
            padding: '0.8rem', 
            borderRadius: '50%',
            color: 'var(--accent-cyan)'
        }}>
           <Rocket size={28} />
        </div>
        <div>
          <h1 style={{ color: 'var(--accent-cyan)', margin: 0, fontSize: '1.5rem', letterSpacing: '1px' }}>
            EcoOrbit
          </h1>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Командный Центр
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <NavLink to="/" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
          <Globe size={18} />
          Глобальная Карта
        </NavLink>
        <NavLink to="/ranking" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
          <BarChart2 size={18} />
          Рейтинг Экологии
        </NavLink>
        <NavLink to="/prediction" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
          <BrainCircuit size={18} />
          ИИ Прогнозы
        </NavLink>
        <NavLink to="/behavior" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
          <Activity size={18} />
          Анализ Поведения
        </NavLink>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <div style={{ textAlign: 'right' }}>
           <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Статус</div>
           <div style={{ fontSize: '0.9rem', color: 'var(--success)', fontWeight: 'bold' }}>СИСТЕМА АКТИВНА</div>
        </div>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <div style={{ width: '12px', height: '12px', background: 'var(--success)', borderRadius: '50%' }}></div>
           <div style={{ color: 'var(--success)' }} className="map-ripple"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
