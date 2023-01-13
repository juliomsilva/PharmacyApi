import { Navigate, Outlet } from "react-router-dom";
export default function RotaPrivada() {
  const user = JSON.parse(localStorage.getItem("Logado")) ?? [];
  return user ? <Outlet /> : <Navigate to="/" />;
}
