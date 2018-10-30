interface IRetirable{
    retirar(cantidad : number) : void;
}

interface IDepositable{
    depositar(cantidad : number) : void;
}

abstract class Cuenta implements IRetirable, IDepositable{
    abstract depositar(cantidad: number): void;

    abstract retirar(cantidad: number): void;

    constructor(public saldo : number, public id : number){
        this.saldo = saldo;
        this.id = id;
    }

    imprimir() : void {
        console.log(`Saldo: ${this.saldo}`)
    }
}

class CuentaRetirable extends Cuenta{

    constructor(public saldo : number, public id : number){
        super(saldo, id);
    }

    depositar(cantidad: number): void {
        this.saldo += cantidad;
    }   
    
    retirar(cantidad: number): void {
        this.saldo -= cantidad;
    }
}

class CuentaAportaciones extends Cuenta{
    constructor(public saldo : number, public id : number){
        super(saldo, id);
    }

    depositar(cantidad: number): void {
        this.saldo += cantidad;
    }  
    
    retirar(cantidad: number): void {
        console.log("No se puede retirar de esta cuenta");
    }
}

let cuentas : Cuenta [] = [];

for(let i= 0; i<4 ; i++){
    if(i % 2 == 0){
        cuentas.push(new CuentaRetirable((i + 1) * 100, i));
    }
    else{
        cuentas.push(new CuentaAportaciones((i + 1) * 150, i));
    }
}

for(let i =0; i<4; i++){
    console.log(`Saldo: ${cuentas[i].saldo} Id: ${cuentas[i].id}`);
}

cuentas[0].depositar(200);
cuentas[0].imprimir();
cuentas[1].retirar(50);
cuentas[1].imprimir();


