import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fireBase"

export const componenteHome = () => { //crea los componentes de la vista
   const vistaHome =
    
        `
        <div class="form-body">
        <h2> Bienvenida (o) a la comunida más grande de fans de Jane Austen</h2>
        <img src="img/jane.png"/>
        <form class="loging-form">
        <input type = "email" id = "loging-email" placeholder ="Email"/>
        <input type = "password" id = "loging-password" placeholder="Contraseña"/>
        <button id = "sesion">Inicio sesión</button>
        </form>
        <p class= "hiper">Aún no tienes cuenta <button id="loging">registrate aquí.</butto></>
        </div>
       `
    const divElem = document.createElement("div");
    divElem.innerHTML = vistaHome;
    return divElem;
}

export const comportamientoComponenteHome = () => {//comportamiento de cada vista, por cada componente hay que crear dos funciones 
    const boton = document.getElementById("loging");
    boton.addEventListener('click', function () {
        window.location.hash = '#/registro';
  
    });
    const botonSesion = document.getElementById("sesion");
    botonSesion.addEventListener("click", async () => {
                  //LOGING 
        const email = document.getElementById("loging-email").value;
        const password = document.getElementById("loging-password").value;
        try {
            const credential = await signInWithEmailAndPassword(auth, email, password)
            console.log(credential);
            window.location.hash = '#/perfil';
        } catch (error) {
            console.log(error);
            if (error.code === "auth/wrong-password") {
                alert("CONTRASEÑA INVALIDA")
            } else if (error.code === "auth/user-not-found") {
                alert("USUARIO NO ENCONTRADO")
            } else if (error.code) {
                alert("Correo o contraseña no validas, intenta de nuevo")
            }
        }

    })
}