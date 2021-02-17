const procesarPedido = document.getElementById("procesar-compra");
    procesarPedido.addEventListener("click", procesarCompra);
const input = document.querySelector(".form-control");
let modalVenta = document.querySelector("#exampleModalCenter");
const contenedorCompras = document.querySelector("#contenedor-compras");
function procesarCompra(e){
        e.preventDefault();
        if (input.value === ""){
            
           
            modalVenta.remove();
            
            const row = document.createElement("div");
            row.innerHTML = `
            <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Error</h4>
            <p>Por favor completa los campos del formulario</p>
            <hr>
    
          </div>`
          contenedorCompras.appendChild(row);
          setTimeout(function(){ location.href = "compras.html"; }, 4000);
          
        }
        else {

            const row = document.createElement("div");
            row.innerHTML = `<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title compras" id="exampleModalLongTitle">Tu compra fue realizada con éxito</h5>
                  
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    Felicitaciones por tu compra
                </div>
                <div class="modal-footer">
                  <a type="button" class="btn btn-secondary productos-boton comprar" data-dismiss="modal">Volver</a>
                  <a type="button" class ="btn btn-secondary productos-boton comprar"  href="./index.html">Seguir comprando</a>
                </div>
              </div>
            </div>
          </div>`
          contenedorCompras.appendChild(row);
        }
        
}