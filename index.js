import { Cuenta } from "./Cuentas/Cuenta.js";
import { Cliente } from "./Cliente.js";
import { CuentaCorriente } from "./Cuentas/CuentaCorriente.js";
import { CuentaAhorro } from "./Cuentas/CuentaAhorro.js";
import { CuentaNomina } from "./Cuentas/CuentaNomina.js";

let saldo = 0;

const cliente1 = new Cliente("Jose", "43423432", "44443423");
const cliente2 = new Cliente("Andres", "4343453", "10000430405");
const cliente3 = new Cliente("Laura", "343434", "9999443");

const cuentaCorriente1 = new CuentaCorriente(cliente1, "6665", "001");
const cuentaCorriente2 = new CuentaCorriente(cliente2, "1232", "002");
const cuentaCorriente3 = new CuentaCorriente(cliente3, "2332", "003");
cuentaCorriente3.transferirParaCuenta(20,cuentaCorriente2);

const cuentaAhorro1 = new CuentaAhorro(cliente1, "323232", "001",4000);

const CuentaNomina1 = new CuentaNomina(cliente1, '6667', '001', 6000);
CuentaNomina1.depositoEnCuenta(900);
CuentaNomina1.retirarDeCuenta(500);
//const cuentaSimple = new Cuenta(cliente1, '098', '001', 8000);

cuentaCorriente2.depositoEnCuenta(200);
cuentaCorriente3.depositoEnCuenta(600);
cuentaCorriente1.depositoEnCuenta(100);
cuentaAhorro1.depositoEnCuenta(800);
cuentaCorriente1.retirarDeCuenta(20);
cuentaCorriente2.retirarDeCuenta(50);
cuentaCorriente3.retirarDeCuenta(10);
cuentaAhorro1.retirarDeCuenta(20);
cuentaCorriente1.depositoEnCuenta(100);

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

cuentaCorriente1.prueba();
//console.log(cuentaSimple)
console.log(CuentaNomina1)
console.log(CuentaNomina1.verSaldo())

