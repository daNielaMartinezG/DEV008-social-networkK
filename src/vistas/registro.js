export const componenteRegistro = () => {
    const vistaRegistro = 
    `<div class="form-body">
    <h2> Crea tu cuenta </h2>
    <form class="loging-form">
    <p class="texto">Ingresa tu e-mail:</p>
    <input type = "text"/>
    <p class="texto">Crea tu contraseña: </p>
    <input type = "password"/>
    </form>
    <a href="#/registroDatos"><button id = "prueba">Siguiente</button></a></p>
    </div>`

    const divElemRegistro = document.createElement("div");
    divElemRegistro.innerHTML = vistaRegistro;
    return divElemRegistro;
}

