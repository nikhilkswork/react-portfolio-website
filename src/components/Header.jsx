import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>My Portfolio</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;