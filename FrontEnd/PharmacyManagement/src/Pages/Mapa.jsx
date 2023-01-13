import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useState, useEffect } from "react";
import trashBlack from "../Images/trash.png";
import HomePageNav from "../Components/HomePageNav";
import "../Pages/Corrections.css";

export default function Mapa() {
  const [farmapi, setFarmapi] = useState();

  useEffect(() => {
    buscarFarmacia();
  }, []);

  function buscarFarmacia() {
    fetch("http://localhost:8080/farmacia")
      .then((response) => response.json())
      .then((data) => {
        setFarmapi(data.dados);
      });
  }

  function deletarFarmacia(farma) {
    fetch(`http://localhost:8080/farmacia/${farma}`, { method: "DELETE" }).then(
      () => alert("Farmácia deletada ")
    );
    document.location.reload();
  }
  return (
    <div>
      <HomePageNav Text="Sair" Path="/" />
      <div className="d-flex justify-content-center">
        <MapContainer
          center={[-23.6502, -46.7376]}
          zoom={9}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {farmapi?.map((farmacia) => (
            <Marker
              position={[
                farmacia.endereco.latitude,
                farmacia.endereco.longitude,
              ]}
            >
              <Popup>
                <div className="popmapa">
                  <span>
                    <span className="textoMapa">Razão Social: </span>
                    {farmacia.razao_social}
                  </span>
                  <span>
                    <span className="textoMapa">CNPJ: </span>
                    {farmacia.cnpj}
                  </span>
                  <span>
                    <span className="textoMapa">Nome Fantasia: </span>
                    {farmacia.nome_fantasia}
                  </span>
                  <span>
                    <span className="textoMapa"> E-mail: </span>
                    {farmacia.email}
                  </span>
                  <span>
                    <span className="textoMapa">
                      {farmacia.telefone === "" ? "" : "Telefone: "}{" "}
                    </span>
                    {farmacia.telefone}
                  </span>
                  <span>
                    <span className="textoMapa">WhatsApp: </span>

                    <a
                      href={`https://wa.me/+55${farmacia.celular}`}
                      target="_blank"
                    >
                      {farmacia.celular}
                    </a>
                  </span>
                  <div className="d-flex justify-content-end mapaIcones">
                    <img
                      src={trashBlack}
                      style={{ width: "30px", cursor: "pointer" }}
                      onClick={() => deletarFarmacia(farmacia.id)}
                    />
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
