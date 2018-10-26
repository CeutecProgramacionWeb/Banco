interface IRetirable{
    retirar(cantidad : number, id : number) : void;
}

interface IDepositable{
    depositar(cantidad : number, id : number) : void;
}

abstract class Cuenta implements IRetirable, IDepositable{
    abstract depositar(cantidad: number, id: number): void;

    abstract retirar(cantidad: number, id: number): void;

    constructor(private saldo : number, public id : number){
        this.saldo = saldo;
        this.id = id;
    }

    imprimir() : void {
        console.log(`Saldo: ${this.saldo}`)
    }
}