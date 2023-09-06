import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../fireBase';


export const componenteRegistro = () => {
  const vistaRegistro =
    `<div id ="signupModal">
    <div class="form-body">
    <h2> Crea tu cuenta </h2>
    <form class="loging-form" id="singup-form">
    <p class="texto" >Ingresa tu e-mail:</p>
    <input type = "email" id = "signup-email"/>

    <p class="texto" >Crea tu contraseña: </p>
    <input type = "password" id = "signup-password" required/>
    </form>
  <button id="guardarRegistro">Siguiente</button></p>
    </div>
    </div>`

  const divElemRegistro = document.createElement("div");
  divElemRegistro.innerHTML = vistaRegistro;
  return divElemRegistro;
}

//función de comportamiento

export const comportamientoRegistro = () => {
  const botonGuardarRegistro = document.getElementById("guardarRegistro");
  botonGuardarRegistro.addEventListener('click', async function () {

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    console.log(email, password)

    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredentials);
      window.location.hash = '#/perfil';
      //cerrar el modal
      const signupModal = document.getElementById("signupModal")
      const modal = bootstrap.Modal.getInstancie(signupModal)
      modal.hide()
    }
    catch (error) {
      console.log(error.message)
      console.log(error.code)

      if (error.code === 'auth/email-already-in-use') {
        alert("El email ya esta en uso")
      } else if (error.code === 'auth/invalid-email') {
        alert("Email invalido");
      } else if (error.code === 'auth/weak-password') {
        alert("Contaseña invalida, la contraseña debe contener minimo 6 digitos")
      }else if (error.code){
        alert ("Ups hay un error verifica los datos")
      }
    }
  });
}






