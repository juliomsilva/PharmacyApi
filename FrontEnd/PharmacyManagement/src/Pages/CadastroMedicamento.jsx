import { useState } from "react";
import logoOk from "../Images/right.gif";
import bootstrap from "bootstrap/dist/js/bootstrap";
import HomePageNav from "../Components/HomePageNav";

export default function CadastroMedicamento() {
  const [medicamentos, setMedicamentos] = useState({
    nome_medicamento: "",
    nome_laboratorio: "",
    dosagem: "",
    desc_medicamento: "",
    preco_unitario: "",
    tipo_medicamento: "",
  });
  function cadastrarMedicamento(e) {
    fetch("http://localhost:8080/medicamentos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(medicamentos),
    });

    var modal = new bootstrap.Modal(
      document.getElementById("medicamentoCadastrado"),
      {
        keyboard: true,
      }
    );
    modal.show();
    setMedicamentos({
      nome_medicamento: "",
      nome_laboratorio: "",
      dosagem: "",
      tipo_medicamento: "",
      preco_unitario: "",
      desc_medicamento: "",
    });
    e.preventDefault();
  }
  function Limpar(e) {
    setMedicamentos({
      nome_medicamento: "",
      nome_laboratorio: "",
      dosagem: "",
      tipo_medicamento: "",
      preco_unitario: "",
      desc_medicamento: "",
    });
    e.preventDefault();
  }
  return (
    <div>
      <HomePageNav Text="Voltar" Path="/mapa" />
      <div className="d-flex justify-content-center textos">
        <h2>Cadastro de Novo Medicamento</h2>
      </div>
      <div className="FormControl container">
        <div className="d-flex justify-content-center">
          <form onSubmit={cadastrarMedicamento} class="row g-3 ">
            <div class="col-md-6">
              <label for="Medicamento" class="form-label">
                Medicamento
              </label>
              <input
                required
                type="text"
                class="form-control"
                id="Medicamento"
                value={medicamentos.nome_medicamento}
                onChange={(e) =>
                  setMedicamentos({
                    ...medicamentos,
                    nome_medicamento: e.target.value,
                  })
                }
              />
            </div>
            <div class="col-md-6">
              <label for="nome_laboratorio" class="form-label">
                Laboratório
              </label>
              <input
                required
                type="text"
                class="form-control"
                id="nome_laboratorio"
                value={medicamentos.nome_laboratorio}
                onChange={(e) =>
                  setMedicamentos({
                    ...medicamentos,
                    nome_laboratorio: e.target.value,
                  })
                }
              />
            </div>
            <div class="col-md-4">
              <label for="Dosagem" class="form-label">
                Dosagem
              </label>
              <input
                type="text"
                required
                class="form-control"
                id="Dosagem"
                value={medicamentos.dosagem}
                onChange={(e) =>
                  setMedicamentos({ ...medicamentos, dosagem: e.target.value })
                }
              />
            </div>
            <div class="col-md-4">
              <label for="tipo_medicamento" class="form-label">
                Tipo do Medicamento
              </label>
              <select
                class="form-control"
                id="tipo_medicamento"
                required
                value={medicamentos.tipo_medicamento}
                onChange={(e) =>
                  setMedicamentos({
                    ...medicamentos,
                    tipo_medicamento: e.target.value,
                  })
                }
              >
                <option value=""></option>
                <option value="Medicamento Controlado">
                  Medicamento Controlado
                </option>
                <option value="Medicamento Comum">Medicamento Comum</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="preco_unitario" class="form-label">
                Preco Unitario
              </label>
              <input
                type="text"
                required
                class="form-control"
                placeholder="Ex: 42.90"
                id="preco_unitario"
                value={medicamentos.preco_unitario}
                onChange={(e) =>
                  setMedicamentos({
                    ...medicamentos,
                    preco_unitario: e.target.value,
                  })
                }
              />
            </div>
            <hr></hr>
            <div class="mb-3">
              <label for="desc_medicamento" class="form-label">
                Descrição do Medicamento
              </label>
              {console.log(medicamentos)}
              <textarea
                class="form-control"
                id="desc_medicamento"
                rows="3"
                value={medicamentos.desc_medicamento}
                onChange={(e) =>
                  setMedicamentos({
                    ...medicamentos,
                    desc_medicamento: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <div class="d-flex justify-content-end d-grid gap-3 buttonForm">
              <button class="btn btn-success btn-lg" onClick={Limpar}>
                Limpar
              </button>
              <button type="submit" class="btn btn-success btn-lg ">
                Salvar
              </button>
            </div>
          </form>
          <div
            class="modal fade"
            id="medicamentoCadastrado"
            tabindex="-1"
            aria-labelledby="medicamentoCadastrado"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div className="d-flex flex-column align-items-center ">
                    <img src={logoOk} width="200px" />
                    <p className="ModalTexto">Medicamento cadastrado!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
