export class SistemaAutenticacion{
    static login(usuario, clave){
        //console.log(clave);
        //console.log(empleado.clave);
        if ("autenticable" in usuario && usuario.autenticable instanceof Function){
            return (usuario.autenticable(clave));
        }else{
            return false;
        }
        //return usuario.clave == clave;
    }
}