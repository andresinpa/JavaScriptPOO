import { Empleado } from "./Empleado.js";

export class Director extends Empleado{
    constructor(nombre, dni){
        super(nombre, dni);
        
    }
}