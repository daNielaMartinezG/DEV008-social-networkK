import { connectFirestoreEmulator } from "firebase/firestore";
import { saveTask, getTask, deleteTask, onGetTasks } from "../fireBase";
import { auth } from '../fireBase';

export const componentePagPerfil = () => {
  const vistaPagPerfil =
    `
    <div>
    <nav class="nav">
    
      <ul class = "nav-menu">
        <li class = "nav-menu-item">
          <a class ="nav-menu-link" href="#/perfil">MURO</a>
        </li>
        <li class = "nav-menu-item">
          <a class ="nav-menu-link" id="signOut" href="#/inicio">Cerrar sesión</a>
        </li>
      </ul>
    </nav>
    </div>
    
       <main class="containerF">
    <div class = "form-task">
    <form id = "task-form">
    <h3>Titulo</h3>
    <input type ="text" id="task-title"/>
   <br>
    <h3>Post</h3>
    <textarea id="task-description"/> </textarea>
    <br>
    <button id="button-post">PUBLICAR</button>
    </form>
    </div>
    <div id="task-container"></div>
    </main>
    `

  const divComponteP = document.createElement("div");
  divComponteP.innerHTML = vistaPagPerfil;
  return divComponteP;

}
//comportamientos y eventos en el perfil 
export const comportamientoComponentePerfil = async () => {
  const taskContainer = document.getElementById('task-container');
  const taksForm = document.getElementById("task-form");
  const querySnapshot = await getTask();

  onGetTasks((querySnapshot) => {
    let html = ''

    querySnapshot.forEach(doc => {
      const task = doc.data();
     // console.log(auth);
      html += `
      <main class= "main-container">
      <div class="containerT">
    <div class = "task-container">
 
    <h3> ${task.title}</h3>
    <p> ${task.description}</p>
    <button class='btn-delete' data-id = "${doc.id}"> Eliminar </button>
    </div>
    </div>
    </main> 
  `

      taskContainer.innerHTML = html;

      //eliminar con el boton
      const btnDelete = taskContainer.querySelectorAll('.btn-delete');

      btnDelete.forEach(btn => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          deleteTask(dataset.id).then((respuesta) => {
           // console.log(respuesta)
           // console.log(dataset)
          }).catch((error) => {
           // console.log(error);
          });

        });

      });
    });

  });

 /*const salir = document.getElementById("signOut")
  salir.addEventListener('click', () => {
console.log("prueba de boton salir");
signOut(auth).then(() => {
  // Sign-out successful.
  console.log("salio wiiii")
}).catch((error) => {
  // An error happened.
});*/

//  })

  taksForm.addEventListener('submit', (e) => {

    const title = taksForm["task-title"]
    const description = taksForm["task-description"]
  
    //console.log( taskTitle, taskDescription, "enviado");

    saveTask(title.value, description.value, "prueva de form");

    taksForm.reset();
  })

}







