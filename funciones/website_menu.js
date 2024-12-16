const prompt = require("prompt-sync")();

function website_menu(administrador) {
  while (true) {
    console.log("=== MENÚ DE SITIOS WEB ===");

    const accion = prompt(
      "Ingrese que acción quiere realizar \n 1- Agregar sitio web. \n 2- Buscar sitio web. \n 3- Lista de sitios web. \n 4- Actualizar contraseña. \n 5- Eliminar sitio web. \n 6- Salir al menu principal. "
    );

    if (accion === "6") {
      console.log("Volviendo al menú principal...");
      break;
    }

    let username = prompt("Ingrese el nombre del usuario: ");
    let user = administrador.find_user(username);

    if (!user) {
      console.log("El usuario no existe. Operación cancelada.");
      continue;
    }

    switch (accion) {
      case "1":
        user.add_website();
        break;
      case "2":
        user.find_website(prompt("Ingrese el nombre del sitio web: "));
        break;
      case "3":
        user.list_website();
        break;
      case "4":
        user.update_password()
        break;
      case "5":
        user.delete_website(
          prompt("Ingrese el nombre del sitio web a eliminar: ")
        );
        break;
      default:
        break;
    }
  }
}

module.exports = website_menu;
