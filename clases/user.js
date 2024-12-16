const Website = require("./website");
const prompt = require("prompt-sync")();

class User {
  constructor(name) {
    this.name = name;
    this.website = [];
  }
  add_website() {
    //agrega sitio web (nombre,url y contraseña) al usuario
    const new_website = new Website(
      prompt("Ingrese Nombre del sitio Web: "),
      prompt("Ingrese Url: "),
      prompt("Ingrese contraseña: ")
    );
    this.website.push(new_website);
    console.log("Sitio web agragado.");
  }
  find_website(nombre) {
    //busca un website por nombre especifico.
    for (let i = 0; i < this.website.length; i++) {
      if (nombre === this.website[i].name) {
        console.log(this.website[i]);
        return;
      }
    }
    console.log("website no encontrado");
  }
  list_website() {
    //devuelve lista con todos los sitios y contraseñas.
    console.log(this.website);
  }
  update_password() {//actualiza la contraseña de un sitio web en especifico.
    let website_name = prompt("ingrese el sitio web que quiere modificar: ");
    let website = 0;
    for (let i = 0; i < this.website.length; i++) {
      if (this.website[i].name === website_name) {
        website = this.website[i];
        break;
      }
    }
    if (!website) {
      console.log("Sitio web no encontrado");//msj de error si el sitio web que se busca no existe.
      return;
    }
    let old_password = prompt("Ingrese contraseña actual: ");
    if (website.password !== old_password) {
      console.log("Contraseña incorrecta.");//msj de error si la contraseña actual fue introducida mal y retorna para volver a introducirla
      return;
    }
    let new_password = prompt("Ingrese nueva contraseña: ");
    website.password = new_password;
    console.log("Contraseña Modificada.");//ingresa nueva contraseña y la modifica en el array original
  }

  delete_website(nombre) {
    //elimina completamente el sitio web por su nombre.
    let indice = -1;
    for (let i = 0; i < this.website.length; i++) {
      if (nombre === this.website[i].name) {
        indice = i;
        break;
      }
    }
    if (indice === -1) {
      console.log("Usuario no encontrado.");
      return;
    }
    this.website.splice(indice, 1);
    console.log("Usuario eliminado.");
  }
}

module.exports = User;
