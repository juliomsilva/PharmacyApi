export default function Modal({ medicamento, laboratorio, dosagem, tipo, precoUnitario, descricao, hide, esc }) {
  let modalStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  };
  return (
    <div>
      <div class="modal show fade d-flex justify-content-center" style={modalStyle}>
        <div class="modal-dialog modal-lg ">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={hide} />
            </div>
            <div class="modal-body">
              <div className="modalContainer">
                <div className="LadoEsquerdo">
                  <span>
                    <span className="textoMapa">Medicamento: </span>
                    {medicamento}
                  </span>
                  <span>
                    <span className="textoMapa">Laboratório: </span>
                    {laboratorio}
                  </span>
                  <span>
                    <span className="textoMapa">Dosagem: </span>
                    {dosagem}
                  </span>
                </div>
                <div class="d-flex linha" style={{ height: "80px" }}>
                  <div class="vr"></div>
                  <div className="LadoDireito">
                    <span>
                      <span className="textoMapa">Tipo: </span>
                      {tipo}
                    </span>
                    <span>
                      <span className="textoMapa">Preço unitário: </span>R${precoUnitario}{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="AreaDescricao">
                <span className="textoMapa">Descrição:</span>
                <p>{descricao}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
