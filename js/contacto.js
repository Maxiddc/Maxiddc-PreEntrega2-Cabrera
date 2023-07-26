
// aplicado en html contacto
//Consultar si se puede enviar a una dirección de correo, esta información que se guardó en un array.
function GuardarUsuario() {
    let usuarios = []
    
    const usuario = [{
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        consulta: document.getElementById("consulta").value,    
    }
    ]
    usuarios.push(usuario)
    console.log(usuarios)
    }
    

let boton = document.getElementById('boton')
boton.onclick = () => {
    GuardarUsuario()
    swal("Sus datos fueron enviados correctamente", {
        buttons: false,
        timer: 3000,
      });  
}