"use strict";
exports.__esModule = true;
var Mensagens = /** @class */ (function () {
    function Mensagens(emissor, texto) {
        this.emissor = emissor;
        this.texto = texto;
        this.leitores = [this.emissor];
    }
    Mensagens.prototype.getEmissor = function () {
        return this.emissor;
    };
    Mensagens.prototype.setEmissor = function (emissor) {
        this.emissor = emissor;
    };
    Mensagens.prototype.getTexto = function () {
        return this.texto;
    };
    Mensagens.prototype.setTexto = function (texto) {
        this.texto;
    };
    Mensagens.prototype.getLeitores = function () {
        return this.leitores;
    };
    Mensagens.prototype.setLeitores = function (leitores) {
        this.leitores;
    };
    Mensagens.prototype.buscarLeitor = function (username) {
        for (var _i = 0, _a = this.leitores; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.getUsername() == username) {
                return i;
            }
        }
        return undefined;
    };
    Mensagens.prototype.toString = function () {
        var res = "";
        res += this.emissor.getUsername() + ":" + this.texto;
        return res;
    };
    return Mensagens;
}());
exports.Mensagens = Mensagens;
