import { Link, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-sm">
        <NavLink className="navbar-brand" to="">
          Navbar
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/chi-siamo">
                Chi Siamo
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/prodotti">
                Prodotti
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
