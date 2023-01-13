import HomePageNav from "../Components/HomePageNav";

import trash from "../Images/trash.png";

import { useState, useEffect } from "react";
import "../Pages/Corrections.css";
import Modal from "../Components/Modal";
import { Link } from "react-router-dom";

export default function Medicamentos() {
  const [medicamentoApi, setMedicamentoApi] = useState();

  useEffect(() => {
    buscarMedicamento();
  }, []);

  function buscarMedicamento() {
    fetch("http://localhost:8080/medicamentos")
      .then((response) => response.json())
      .then((data) => {
        setMedicamentoApi(data.dados);
        setFiltro(data.dados);
      });
  }

  let medicamento = medicamentoApi;

  const [modal, setModal] = useState(false);
  const [dados, setDados] = useState([]);
  const [filtrado, setFiltro] = useState(medicamento);
  const [termo, setTermo] = useState("");
  useEffect(() => {
    setFiltro(
      medicamento?.filter((item) => {
        if (
          item.nome_medicamento
            .toLocaleLowerCase()
            .indexOf(termo.toLocaleLowerCase()) !== -1
        ) {
          return item;
        }
      })
    );
  }, [termo]);
  function deletarMedicamento(medicamentos) {
    fetch(`http://localhost:8080/medicamentos/${medicamentos}`, {
      method: "DELETE",
    }).then(() => alert("Medicamento Deletado"));
    document.location.reload();
  }
  function Detalhar(medicamento) {
    let dados = [
      medicamento.nome_medicamento,
      medicamento.nome_laboratorio,
      medicamento.dosagem,
      medicamento.tipo_medicament,
      medicamento.preco_unitario,
      medicamento.desc_medicamento,
    ];
    setDados(() => [...dados]);
    return setModal(true);
  }

  return (
    <div>
      <HomePageNav Text="Voltar" Path="/mapa" />
      <div className="d-flex searchDiv">
        <input
          type="text"
          className="searchMedicamento"
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
          placeholder="Busque um medicamento..."
        />
        <div className="novoMedicamentoBtn">
          <Link to="/CadastroMedicamento">
            <button type="button" class="btn btn-outline-success btn-sm">
              + Cadastrar medicamento
            </button>
          </Link>
          <button
            type="button"
            onClick={buscarMedicamento}
            class="btn btn-outline-success btn-sm"
          >
            + Listar Medicamentos
          </button>
        </div>
      </div>

      <hr className="Linha"></hr>
      <div className="d-flex flex-wrap">
        {filtrado?.map((medicamento) => (
          <div
            class="card text-bg-light mb-3"
            style={{ width: "12rem", marginLeft: "10px" }}
          >
            <img
              onClick={() => Detalhar(medicamento)}
              style={{ cursor: "pointer" }}
              src="https://precopopular.vteximg.com.br/arquivos/ids/187424-1000-1000/rotulo_pp_generico_receita.jpg?v=637838325846570000"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p
                class="card-text text-center"
                style={{ fontWeight: 700, fontSize: "20px" }}
              >
                {medicamento.nome_medicamento} {medicamento.dosagem}
              </p>
              <p
                class="card-text text-center"
                style={{ fontWeight: 700, fontSize: "14px" }}
              >
                {medicamento.nome_laboratorio}
              </p>
              <div class="d-flex justify-content-end containerIcones">
                <img
                  src={trash}
                  style={{ width: "30px", cursor: "pointer" }}
                  onClick={() => deletarMedicamento(medicamento.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {modal === true ? (
        <Modal
          medicamento={dados[0]}
          laboratorio={dados[1]}
          dosagem={dados[2]}
          tipo={dados[3]}
          precoUnitario={dados[4]}
          descricao={dados[5]}
          hide={() => setModal(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
}
