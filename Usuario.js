"use strict";
exports.__esModule = true;
var Usuario = /** @class */ (function () {
    function Usuario(username) {
        this.username = username;
        this.grupos = [];
    }
    Usuario.prototype.getUsername = function () {
        return this.username;
    };
    Usuario.prototype.setUsername = function (username) {
        this.username = username;
    };
    Usuario.prototype.getGrupos = function () {
        return this.grupos;
    };
    Usuario.prototype.setGrupos = function (grupos) {
        this.grupos = grupos;
    };
    Usuario.prototype.removerGrupo = function (nome) {
        for (var i = 0; i < this.grupos.length; i++) {
            var grupo = this.grupos[i];
            if (nome == grupo.getNome()) {
                this.grupos.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    Usuario.prototype.mostrarGrupos = function () {
        var res = "";
        for (var _i = 0, _a = this.grupos; _i < _a.length; _i++) {
            var i = _a[_i];
            res += i.getNome() + "";
        }
        return res;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
