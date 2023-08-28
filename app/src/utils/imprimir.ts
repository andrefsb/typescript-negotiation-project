import { Imprimivel } from "../interfaces/imprimivel.js";

export function Imprimir(...objetos: Imprimivel[]){
    for(let objeto of objetos){
        console.log(objeto.paraTexto());
    }
}