const User = require("./user");
const prompt = require("prompt-sync")();

class PasswordManager {
  constructor() {
    this.username = [];
  }

  add_user() {
    //agrega un usuario.
    let username = prompt("Ingrese Nombre de Usuario: ");
    for (let i = 0; i < this.username.length; i++) {
      //verifica si el nombre ingresado ya existe en el array
      if (this.username[i].name === username) {
        console.log("El usuario ya existe");
        return;
      }
    }
    let new_user = new User(username);//si el nombre ingresado no se encuentra lo guarda y muestra por consola que fue agregado
    this.username.push(new_user);
    console.log("Usuario agregado.");
  }
  find_user(nombre) {
    //busca a un usuario especifico por su nombre.
    for (let i = 0; i < this.username.length; i++) {
      if (this.username[i].name === nombre) {
        console.log("Usuario encontrado:", this.username[i]);
        return this.username[i]; //Retorna el usuario si lo encuentra y lo muentra por consola
      }
    }
    console.log("Usuario no encontrado.");
    return null; // Retorna por consola el sig. mensaje si no encuentra el usuario
  }
  list_user() {
    //lista de todos los usuarios.
    console.log(this.username);
  }
  delete_user(nombre) {
    //elimina completamente un usuario.
    let indice = -1;
    for (let i = 0; i < this.username.length; i++) {
      if (nombre === this.username[i].name) {
        indice = i;
        break;
      }
    }
    if (indice === -1) {
      console.log("Usuario no encontrado.");
      return;
    }
    this.username.splice(indice, 1);
    console.log("Usuario eliminado.");
  }
}

module.exports = PasswordManager;
