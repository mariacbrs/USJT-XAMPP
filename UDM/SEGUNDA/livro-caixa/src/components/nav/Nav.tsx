// components/Nav.tsx
import { Link } from 'react-router-dom';
import "./nav.css"
export function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Login</Link>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/registro">Registro</Link>
    </nav>
  );
}
