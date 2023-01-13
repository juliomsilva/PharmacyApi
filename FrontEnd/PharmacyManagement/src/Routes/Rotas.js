import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import LoginPage from "../Pages/LoginPage";
import CadastroFarmacia from "../Pages/CadastroFarmacia";
import Mapa from "../Pages/Mapa";
import CadastroMedicamento from "../Pages/CadastroMedicamento";
import Medicamentos from "../Pages/Medicamentos";
import RotaPrivada from "./RotaPrivada";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<RotaPrivada />}>
          <Route path="/CadastroFarmacia" element={<CadastroFarmacia />} />
          <Route path="/CadastroMedicamento" element={<CadastroMedicamento />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/medicamentos" element={<Medicamentos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
