const PasswordManager = require("./clases/password_manager");
const user_menu = require("./funciones/user_menu");
const website_menu = require("./funciones/website_menu");
const prompt = require("prompt-sync")();

let adminstrador = new PasswordManager();
let ciclo = true;

while (ciclo === true) {
  console.log("===== MENU PRINCIPAL =====");
  const accion = prompt(
    "Ingrese que acción quiere realizar: \n 1- Opciones de usuarios. \n 2- Opciones de website. \n 3- Salir."
  );

  switch (accion) {
    case "1":
      user_menu(adminstrador);
      break;
    case "2":
      website_menu(adminstrador);
      break;
    case "3":
      console.log("saliendo...");
      ciclo = false;
    default:
      break;
  }
}
