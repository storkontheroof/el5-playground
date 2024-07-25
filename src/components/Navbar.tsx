import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="counter">Counter</Link>
        </li>
        <li>
          <Link to="widgets">Widgets</Link>
        </li>
      </ul>
    </nav>
  );
};
