export default () => {
    const vistaHome =
        `<h2> BIENVENIDA (O) A TU SALONCITO DE USO PERSONAL </h2>
        Correo
        <input/>
        Contraseña
        <input/>
        <button name = "pueba"> a ver funcionaaa </button>`
        
        const divElem = document.createElement("div");
    divElem.innerHTML = vistaHome;
return divElem; 
}