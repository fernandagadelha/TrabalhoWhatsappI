"use strict";
exports.__esModule = true;
var Grupo = /** @class */ (function () {
    function Grupo(nome, user) {
        this.nome = nome;
        this.usuarios = [user];
        this.mensagens = [];
    }
    Grupo.prototype.getNome = function () {
        return this.nome;
    };
    Grupo.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Grupo.prototype.getUsuarios = function () {
        return this.usuarios;
    };
    Grupo.prototype.setUsuarios = function (usuarios) {
        this.usuarios = usuarios;
    };
    Grupo.prototype.getMensagens = function () {
        return this.mensagens;
    };
    Grupo.prototype.setMensagens = function (mensagens) {
        this.mensagens = mensagens;
    };
    Grupo.prototype.buscarUsuario = function (username) {
        for (var _i = 0, _a = this.usuarios; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.getUsername() == username) {
                return i;
            }
        }
        return undefined;
    };
    Grupo.prototype.removerUsuario = function (username) {
        for (var i = 0; i < this.usuarios.length; i++) {
            var user = this.usuarios[i];
            if (username == user.getUsername()) {
                this.usuarios.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    Grupo.prototype.mostrarUserGrupos = function () {
        var res = "";
        for (var _i = 0, _a = this.usuarios; _i < _a.length; _i++) {
            var i = _a[_i];
            res += i.getUsername() + "\n";
        }
        return res;
    };
    return Grupo;
}());
exports.Grupo = Grupo;
