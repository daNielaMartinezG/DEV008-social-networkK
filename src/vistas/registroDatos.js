
export const componenteRegistroDatos = () => {
    const vistaRegistroDatos =
        `<div class="form-body">
    <h2> Crea tu perfil </h2>
    <form class="user-form" id="user-form">
    <p class="texto" id="user-name">¿Cómo te gusta que te llamen?</p>
    <input type = "text"/>
    <p class="texto" id="user-book">¿Cuál es tu libro favorito? </p>
    <input type = "text"/>
    </form>
    <button id = "registroDatos">Siguiente</button></p>
    </div>`

    const divElemRegistroDatos = document.createElement("div");
    divElemRegistroDatos.innerHTML = vistaRegistroDatos;
    return divElemRegistroDatos;
}

export const comportamientoDatos = () => {

    const userForm = document.getElementById("user-form");
    
    userForm.addEventListener('submit', () => {
       
    const userName = userForm["user-name"].value
    const userBook = userForm["user-book"].value

  //  saveUser(userName.value, userBook.value);

     
      console.log( userName, userBook);

       
    })




}
