import logo from "../Images/Logo.gif";
import { Link } from "react-router-dom";
import "../Pages/Corrections.css";
export default function HomePageNav({ Text, Path }) {
  return (
    <nav class="navbar navbar-expand-lg  bg-success corNav">
      <div class="container-fluid navbar-dark">
        <img src={logo} width="60px" />
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-white " aria-current="page">
                <span class="text-start text-wrap">PharmacyManagement</span>
              </a>
            </li>
          </ul>
          <ul class="navbar-nav nav-tabs">
            <li class="nav-item dropdown ">
              <a class="nav-link dropdown-toggle   text-white fs-4 " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cadastrar
              </a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link className="semDeco" to="/CadastroFarmacia">
                    <a class="dropdown-item fs-5 " href="#">
                      Farmácias
                    </a>
                  </Link>
                </li>
                <hr></hr>
                <li>
                  <Link className="semDeco" to="/CadastroMedicamento">
                    <a class="dropdown-item fs-5" href="#">
                      Medicamentos
                    </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <Link className="semDeco" to="/medicamentos">
                <a class="nav-link text-white fs-4 text" href="#">
                  Medicamentos
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link className="semDeco" to="/mapa">
                <a class="nav-link  text-white fs-4 text" href="#">
                  Mapa
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to={`${Path}`}>
                <a class="nav-link text-white fs-4 text">{Text}</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
