import logo from "../Images/Logo.gif";
import { Link } from "react-router-dom";

import "../Pages/Corrections.css";
import FormLogin from "../Components/FormLogin";
export default function LoginPage() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-success ">
        <div class="container-fluid">
          <img src={logo} width="60px" />
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active text-white " aria-current="page">
                  <span class="text-start">PharmacyManagement</span>
                </a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <button type="button" class="btn btn-outline-light btn-lg">
              Home
            </button>
          </Link>
        </div>
      </nav>
      <FormLogin />
    </div>
  );
}
