import { Empleado } from "./Empleado.js";

export class Gerente extends Empleado{
    constructor(nombre, dni){
        super(nombre, dni);
        
    }
}