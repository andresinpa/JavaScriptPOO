export class Cuenta{
    #saldoCuenta;
    #cliente;

    static cantidadCuentas = 0;

    constructor(cliente, numeroCuenta, agencia, saldoCuenta){
        if (this.constructor == Cuenta){
            throw new Error('No se pueden instanciar ojetos de la clase cuenta');
        }
        this.numeroCuenta = numeroCuenta;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldoCuenta = saldoCuenta;
        Cuenta.cantidadCuentas ++; 
    }

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
        //Abstract metod
        throw new Error('Debe implementar el método retirarCuenta en la clase')
    }

    _retirarDeCuenta(valor, comision){
        valor = valor * (1 + comision/100);
        if(valor <= this.#saldoCuenta){
            this.#saldoCuenta = this.#saldoCuenta - valor;
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

    prueba(){
        console.log('Metodo padre');
    }

}