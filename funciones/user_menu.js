const prompt = require("prompt-sync")();

function user_menu(administrador) {
  let ciclo = true;

  while (ciclo === true) {
    console.log("===== MENU DE USUARIOS =====");

    const accion = prompt(
      "Ingrese que acción quiere realizar \n 1- Registrar usuario \n 2- Buscar usuario \n 3- Lista de usuarios \n 4- Eliminar usuario \n 5- Salir al menu principal. "
    );

    switch (accion) {
      case "1":
        administrador.add_user();
        break;
      case "2":
        administrador.find_user(prompt("Ingrese usuario que busca: "));
        break;
      case "3":
        administrador.list_user();
        break;
      case "4":
        administrador.delete_user(prompt("Usuario que desea eliminar: "));
        break;
      case "5":
        console.log("saliendo al menu principal...");
        ciclo = false;
      default:
        break;
    }
  }
}
module.exports = user_menu;
