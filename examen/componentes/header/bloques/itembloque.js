import { actualizarLocalStorage } from "../services/local_storage.js"
import { agreagarCruz } from "./funcionesbloque.js"
import { agregarCheck } from "./funcionesbloque.js"
import { eliminarBloque } from "./funcionesbloque.js"

function bloque(){
    let div = document.querySelector("div")
    div.className = "bloque"
}

export {bloque}