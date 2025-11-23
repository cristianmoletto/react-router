import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary mb-3"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "#333",
          padding: "15px 20px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
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
    </>
  );
}
