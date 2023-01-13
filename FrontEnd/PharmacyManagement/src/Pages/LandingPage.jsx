import logo from "../Images/Logo.gif";

import landing from "../Images/landing.png";
import { Link } from "react-router-dom";
export default function LandingPage() {
  localStorage.setItem("Logado", false);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success corNav ">
        <div className="container-fluid">
          <img src={logo} width="60px" />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-white " aria-current="page">
                  <span className="text-start text-wrap">PharmacyManagement</span>
                </a>
              </li>
            </ul>
          </div>
          <Link to="/login">
            <button type="button" className="btn btn-outline-light btn-lg">
              Login
            </button>
          </Link>
        </div>
      </nav>

      <img className="rounded mx-auto d-block img-fluid" src={landing} />
    </div>
  );
}
