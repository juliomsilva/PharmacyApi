import Management from "../Images/Banner.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function FormLogin() {
  const [login, setLogin] = useState({
    email: "",
    senha: "",
  });

  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });
  const [recuperar, setRecuperar] = useState({
    email: "",
  });

  const navigate = useNavigate();
  function Logar(e) {
    fetch(
      `http://localhost:8080/usuario/login?email=${login.email}&senha=${login.senha}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.mensagem == "Dado encontrado!") {
          localStorage.setItem("Logado", true);
          navigate("/mapa");
        } else {
          alert("Usuario ou senha inválida");
        }
      });

    e.preventDefault();
  }
  function Cadastrar(e) {
    fetch("http://localhost:8080/usuario/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    setUsuario({ email: "", senha: "" });
    alert("Usuário cadastrado");
    e.preventDefault();
  }

  return (
    <div>
      <img src={Management} className="rounded mx-auto d-block img-fluid" />
      <div className="d-flex justify-content-center">
        <form onSubmit={Logar}>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              value={login.email}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
              className="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">
              Não iremos compartilhar seu e-mail com ninguém.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="PaswordLogin" className="form-label">
              Senha
            </label>
            <input
              type="password"
              value={login.senha}
              onChange={(e) => setLogin({ ...login, senha: e.target.value })}
              className="form-control"
              id="PaswordLogin"
              required
              minLength={8}
            />
          </div>
          <div className="d-flex justify-content-center btnAcessar">
            <button type="submit" className="btn btn-success btn-lg">
              Acessar
            </button>
            <button
              type="submit"
              data-bs-toggle="modal"
              data-bs-target="#cadastroModal"
              className="btn btn-success btn-lg"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
      <div
        className="modal fade"
        id="cadastroModal"
        tabIndex="-1"
        aria-labelledby="cadastroModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={Cadastrar}>
                <div className="mb-3">
                  <label htmlFor="CadastroEmail" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={usuario.email}
                    onChange={(e) =>
                      setUsuario({ ...usuario, email: e.target.value })
                    }
                    className="form-control"
                    id="CadastroEmail"
                    aria-describedby="emailHelp"
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    Não iremos compartilhar seu e-mail com ninguém.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="CadastroPassword" className="form-label">
                    Senha
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="CadastroPassword"
                    value={usuario.senha}
                    onChange={(e) =>
                      setUsuario({ ...usuario, senha: e.target.value })
                    }
                    required
                    minLength={8}
                  />
                </div>
                <div className="d-flex justify-content-center btnAcessar">
                  <button type="submit" className="btn btn-success btn-lg ">
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="esqueciSenha"
        tabIndex="-1"
        aria-labelledby="esqueciSenha"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
