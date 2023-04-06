export class Cuenta{
    #saldoCuenta;
    #cliente;

    constructor(cliente, numeroCuenta, agencia, saldoCuenta){
        this.numeroCuenta = numeroCuenta;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldoCuenta = saldoCuenta;
    }

    static cantidadCuentas = 0;

    set cliente(valor){
        if(valor instanceof Cliente){
            this.#cliente = valor;
        }
    }

    get cliente(){
        return this.#cliente;
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