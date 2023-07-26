
          function muebles() {
  
          const productos = [
              {
                  id: 1,
                  nombre: 'Taburete',
                  precio: 10000,
              },
              {
                  id: 2,
                  nombre: 'Mesa de Luz negra',
                  precio: 8000,
              },
              {
                  id: 3,
                  nombre: 'Mesa de Luz blanca',
                  precio: 9000,
              },
              {
                  id: 4,
                  nombre: 'Mesa de cocina',
                  precio: 12000,
              },
          ];
          for (const producto of productos) {
              let container = document.createElement('div');
              container.innerHTML = `
                      <h2>${producto.nombre}</h2>
                      <h3>ID: ${producto.id}</h3>
                      <p>Precio: $${producto.precio}</p>                
                      <button id=${
                          producto.id
                      } class="btn">Agregar al carrito</button>
                  `;
        
              
              container.style.border = '1px solid black';
              container.style.padding = '15px';
              container.style.margin = '15px';
              container.style.width = '500px';

        
              document.body.appendChild(container);
          }
        
          return productos;
        }
      
      
        function comprar() {
          
          const productos = muebles()
          const carrito = []
          let botones = document.querySelectorAll(".btn")
          for (const boton of botones) {
              boton.onclick = (e) => {
                  const productoSeleccionado = productos.find(producto => producto.id == e.target.id)
                  swal({
                    title: 'Desea agregar el producto al carrito?',
                    text: `${productoSeleccionado.nombre}, precio: ${productoSeleccionado.precio}`,
                    buttons: ['Cancelar', 'Aceptar'],
                }).then((respuesta) => {
                  if (respuesta) {
                    carrito.push(productoSeleccionado);
                    console.log(carrito);
                  }
                });
              }
          }
          let botonFinalizar = document.createElement("button")
          botonFinalizar.innerHTML = "Finalizar compra"
          botonFinalizar.onclick = () => {
            swal({
              title: 'Desea confirmar la compra?',
              text: `${carrito.map((p)=>`${p.nombre}, precio: ${p.precio}`).join('\n')}`,
              buttons: ['Cancelar', 'Aceptar'],
          }).then((respuesta) => {
            if (respuesta) {
              alert(`Tu compra de ${carrito.length} productos ha sido exitosa!`)
              localStorage.setItem('carrito', JSON.stringify(carrito))
            }
          })
          }
          document.body.appendChild(botonFinalizar)
        }
comprar()
    




































//   





// function carrito(){
// const productos = []
// const producto = [{
//   nombre: document.getElementById("nombre").innerHTML,
//   precio: document.getElementById("precio").innerHTML,
//   id: parseInt(document.getElementById("id").innerHTML),  
// }
// ]
// for ( prod of producto) {
// productos.push(producto)}

// console.log(productos)}





// // const carrito = []
// //     let botones = document.querySelectorAll(".btn")
// //     for (const boton of botones) {
// //         boton.onclick = (e) => {
// //             const productoSeleccionado = productos.find(producto => producto.id == e.target.id)
// //             swal({
// //               title: 'Desea agregar el producto al carrito?',
// //               text: `${productoSeleccionado.nombre}, precio: ${productoSeleccionado.precio}`,
// //               buttons: ['Cancelar', 'Aceptar'],
// //           }).then((respuesta) => {
// //             if (respuesta) {
// //               carrito.push(productoSeleccionado);
// //               console.log(carrito);
// //             }
// //           });
// //         }
// //     }
// //     let botonFinalizar = document.createElement("button")
// //     botonFinalizar.innerHTML = "Finalizar compra"
// //     botonFinalizar.onclick = () => {
// //       swal({
// //         title: 'Desea confirmar la compra?',
// //         text: `${carrito.map((p)=>`${p.nombre}, precio: ${p.precio}`).join('\n')}`,
// //         buttons: ['Cancelar', 'Aceptar'],
// //     }).then((respuesta) => {
// //       if (respuesta) {
// //         alert(`Tu compra de ${carrito.length} productos ha sido exitosa!`)
// //       }
// //     })
// //     }
// //     document.body.appendChild(botonFinalizar)
     
//     // carrito()




