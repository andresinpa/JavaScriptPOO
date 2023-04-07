import { Cuenta } from "./Cuentas/Cuenta.js";
import { Cliente } from "./Cliente.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Director } from "./Empleados/Director.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

let saldo = 0;

const cliente1 = new Cliente("Jose", "43423432", "44443423");
const cliente2 = new Cliente("Andres", "4343453", "10000430405");
const cliente3 = new Cliente("Laura", "343434", "9999443");

cliente1.asignarClave('8888');

const empleado1 = new Empleado('Juan Perez', '2323443', 10000);
const gerente1 = new Gerente('Andres Rodriguez', '5454', 19000);
const director1 = new Director('Viviana Torres', '5454', 40000);

console.log(cliente1);
console.log(empleado1);
console.log(director1)
console.log(gerente1);

console.log(empleado1.verBonificacion());
console.log(director1.verBonificacion())
console.log(gerente1.verBonificacion());

empleado1.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado1, '12345'));
console.log(SistemaAutenticacion.login(cliente1, '8888'));

