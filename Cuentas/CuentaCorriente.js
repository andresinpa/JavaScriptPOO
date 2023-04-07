import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta{

    static cantidadCuentas = 0;

    constructor(cliente, numeroCuenta, agencia){
        super(cliente, numeroCuenta, agencia, 0);
        CuentaCorriente.cantidadCuentas++; 
    }

    prueba(){
        super.prueba();
        console.log('Metodo hijo');
    }

    retirarDeCuenta(valor){
        super._retirarDeCuenta(valor, 5);
    }
}
