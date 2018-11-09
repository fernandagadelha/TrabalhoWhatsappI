"use strict";
exports.__esModule = true;
var Grupo_1 = require("./Grupo");
var Usuario_1 = require("./Usuario");
var Mensagens_1 = require("./Mensagens");
var Whatsapp = /** @class */ (function () {
    function Whatsapp() {
        this.usuarios = [];
        this.grupos = [];
        this.mensagens = [];
    }
    Whatsapp.prototype.addUsuario = function (username) {
        if (this.buscarUsuario(username) != undefined) {
            return false;
        }
        else {
            this.usuarios.push(new Usuario_1.Usuario(username));
            return true;
        }
    };
    Whatsapp.prototype.buscarUsuario = function (username) {
        for (var _i = 0, _a = this.usuarios; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.getUsername() == username) {
                return i;
            }
        }
        return undefined;
    };
    Whatsapp.prototype.mostrarUsuariosCadastrados = function () {
        var res = "";
        for (var _i = 0, _a = this.usuarios; _i < _a.length; _i++) {
            var i = _a[_i];
            res += i.getUsername() + "\n";
        }
        return res;
    };
    Whatsapp.prototype.buscarGrupo = function (nome) {
        for (var _i = 0, _a = this.grupos; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.getNome() == nome) {
                return i;
            }
        }
        return undefined;
    };
    Whatsapp.prototype.addGrupo = function (nome, username) {
        if (this.buscarGrupo(nome) != undefined) {
            return false;
        }
        else {
            if (this.buscarUsuario(username) != undefined) {
                var usuario = this.buscarUsuario(username);
                var grupo = new Grupo_1.Grupo(nome, usuario);
                this.grupos.push(grupo);
                usuario.getGrupos().push(grupo);
                return true;
            }
        }
    };
    Whatsapp.prototype.addUserGrupo = function (adm, username, nome) {
        var a = this.buscarUsuario(adm);
        var b = this.buscarUsuario(username);
        var c = this.buscarGrupo(nome);
        if (a == undefined) {
            return 1; //adm nao existe
        }
        else if (b == undefined) {
            return 2; //usuario nao existe
        }
        else if (c == undefined) {
            return 3; //grupo nao existe
        }
        else if (c.buscarUsuario(username) != undefined) {
            return 4; //usuario ja esta no grupo
        }
        else if (c.buscarUsuario(adm) == undefined) {
            return 5; //adm nao esta no grupo
        }
        else {
            c.getUsuarios().push(b);
            b.getGrupos().push(c);
            return 0; //usuario adicionado com sucesso
        }
    };
    Whatsapp.prototype.enviarMensagem = function (texto, username, nome) {
        var b = this.buscarUsuario(username);
        var c = this.buscarGrupo(nome);
        if (b == undefined) {
            return 1; // usuario nao existe
        }
        else if (c == undefined) {
            return 2; //grupo nao existe
        }
        else if (b == undefined) {
            return 3; //usuario nao esta no grupo
        }
        else {
            c.getMensagens().push(new Mensagens_1.Mensagens(b, texto));
            return 0;
        }
    };
    Whatsapp.prototype.buscarMensagensNovas = function (username, nome) {
        var b = this.buscarUsuario(username);
        var c = this.buscarGrupo(nome);
        var res = [];
        if (b == undefined) {
            console.log("usuario nao existe");
            return 1;
        }
        else if (c == undefined) {
            console.log("grupo nao existe");
            return 2;
        }
        else if (b == undefined) {
            console.log("usuario nao esta no grupo");
            return 3;
        }
        else {
            for (var _i = 0, _a = c.getMensagens(); _i < _a.length; _i++) {
                var m = _a[_i];
                if (m.buscarLeitor(username) == undefined) {
                    var em = m.getEmissor();
                    var mens = m.getTexto();
                    res.push(em.getUsername() + ":" + mens);
                    m.getLeitores().push(b);
                }
            }
            return res;
        }
    };
    Whatsapp.prototype.lerMensagens = function (username, nome) {
        var r = this.buscarMensagensNovas(username, nome);
        if (r == 1) {
            return "Pessoa nao existe";
        }
        else if (r == 2) {
            return "Grupo nao existe";
        }
        else if (r == 3) {
            return "Pessoa nao esta no grupo";
        }
        else {
            console.log(r);
            return "Mensagem lida!";
        }
    };
    Whatsapp.prototype.removerUsuario = function (username, nome) {
        var grupo = this.buscarGrupo(nome);
        if (grupo != undefined) {
            var x = grupo.removerUsuario(username);
            if (x == false) {
                console.log("Usuario nao esta no grupo");
            }
            else {
                var usuario = this.buscarUsuario(username);
                usuario.removerGrupo(nome);
                console.log(username + " saiu do grupo " + nome);
            }
        }
        else {
            console.log("Grupo nao existe");
        }
    };
    Whatsapp.prototype.getUsuario = function (username) {
        for (var i = 0; i < this.usuarios.length; i++) {
            var user = this.usuarios[i];
            if (username == user.getUsername()) {
                return user;
            }
        }
        return null;
    };
    return Whatsapp;
}());
exports.Whatsapp = Whatsapp;
