
export class CuentaCorriente{
    numeroCuenta;
    #saldoCuenta;
    agencia;
    #cliente;
    static cantidadCuentas = 0;

    set cliente(valor){
        if(valor instanceof Cliente){
            this.#cliente = valor;
        }
    }

    get cliente(){
        return this.#cliente;
    }

    constructor(cliente, numeroCuenta, agencia){
        this.#cliente = cliente;
        this.#saldoCuenta = 0; 
        this.numeroCuenta =numeroCuenta;
        this.agencia = agencia;
        CuentaCorriente.cantidadCuentas ++; 
    }

    depositoEnCuenta(valor){
        if(valor > 0){
            this.#saldoCuenta = this.#saldoCuenta + valor;
        }
        return this.#saldoCuenta;
    }

    retirarDeCuenta(valor){
        if(valor <= this.#saldoCuenta){
            this.#saldoCuenta -= valor;
        }
        return this.#saldoCuenta;
    }

    verSaldo(){
        return this.#saldoCuenta;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }
}
