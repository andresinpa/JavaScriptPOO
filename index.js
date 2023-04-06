import { Cuenta } from "./Cuenta.js";
//import { CuentaCorriente } from './CuentaCorriente.js';
import { Cliente } from "./Cliente.js";
//import { CuentaAhorro } from './CuentaAhorro.js';

let saldo = 0;

const cliente1 = new Cliente("Jose", "43423432", "44443423");
const cliente2 = new Cliente("Andres", "4343453", "10000430405");
const cliente3 = new Cliente("Laura", "343434", "9999443");

const cuentaCorriente1 = new Cuenta("CuentaCorriente",cliente1, "6665", "001", 9000);
const cuentaCorriente2 = new Cuenta("CuentaCorriente",cliente2, "1232", "002", 8000);
const cuentaCorriente3 = new Cuenta("CuentaAhorro", cliente3, "2332", "003", 5000);
cuentaCorriente3.transferirParaCuenta(20,cuentaCorriente2);

const cuentaAhorro1 = new Cuenta(cliente1, "323232", "001", 4000);

cuentaCorriente1.retirarDeCuenta(100);
cuentaCorriente2.depositoEnCuenta(200);
cuentaCorriente3.depositoEnCuenta(600);
cuentaCorriente1.depositoEnCuenta(100);
cuentaAhorro1.depositoEnCuenta(800);
saldo = cuentaCorriente3.depositoEnCuenta(500);
saldo = cuentaCorriente3.retirarDeCuenta(100);

console.log(cliente1)
console.log(cliente2)
console.log(cliente3)
console.log(cuentaCorriente1)
console.log(cuentaCorriente2)
console.log(cuentaCorriente3)
console.log('El saldo actual es ' + saldo);
console.log('Total de cuentas: ' + Cuenta.cantidadCuentas);
console.log(cuentaAhorro1)

console.log(cuentaCorriente1.verSaldo())
console.log(cuentaCorriente2.verSaldo())
console.log(cuentaCorriente3.verSaldo())
console.log(cuentaAhorro1.verSaldo())
