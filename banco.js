var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cuenta = /** @class */ (function () {
    function Cuenta(saldo, id) {
        this.saldo = saldo;
        this.id = id;
        this.saldo = saldo;
        this.id = id;
    }
    Cuenta.prototype.imprimir = function () {
        console.log("Saldo: " + this.saldo);
    };
    return Cuenta;
}());
var CuentaRetirable = /** @class */ (function (_super) {
    __extends(CuentaRetirable, _super);
    function CuentaRetirable(saldo, id) {
        var _this = _super.call(this, saldo, id) || this;
        _this.saldo = saldo;
        _this.id = id;
        return _this;
    }
    CuentaRetirable.prototype.depositar = function (cantidad) {
        this.saldo += cantidad;
    };
    CuentaRetirable.prototype.retirar = function (cantidad) {
        this.saldo -= cantidad;
    };
    return CuentaRetirable;
}(Cuenta));
var CuentaAportaciones = /** @class */ (function (_super) {
    __extends(CuentaAportaciones, _super);
    function CuentaAportaciones(saldo, id) {
        var _this = _super.call(this, saldo, id) || this;
        _this.saldo = saldo;
        _this.id = id;
        return _this;
    }
    CuentaAportaciones.prototype.depositar = function (cantidad) {
        this.saldo += cantidad;
    };
    CuentaAportaciones.prototype.retirar = function (cantidad) {
        console.log("No se puede retirar de esta cuenta");
    };
    return CuentaAportaciones;
}(Cuenta));
var cuentas = [];
for (var i = 0; i < 4; i++) {
    if (i % 2 == 0) {
        cuentas.push(new CuentaRetirable((i + 1) * 100, i));
    }
    else {
        cuentas.push(new CuentaAportaciones((i + 1) * 150, i));
    }
}
for (var i = 0; i < 4; i++) {
    console.log("Saldo: " + cuentas[i].saldo + " Id: " + cuentas[i].id);
}
cuentas[0].depositar(200);
cuentas[0].imprimir();
cuentas[1].retirar(50);
cuentas[1].imprimir();
