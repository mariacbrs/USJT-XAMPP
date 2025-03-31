// components/Nav.tsx
import { Link } from 'react-router-dom';
export function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
