import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta{
    
    constructor(cliente, numeroCuenta, agencia,saldo){
        super(cliente, numeroCuenta, agencia,saldo);
    }

    retirarDeCuenta(valor){
        super._retirarDeCuenta(valor,2);
    }
}