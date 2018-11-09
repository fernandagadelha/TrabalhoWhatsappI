"use strict";
exports.__esModule = true;
var readline = require('readline-sync');
var Whatsapp_1 = require("./Whatsapp");
var whats = new Whatsapp_1.Whatsapp();
var grupo = null;
var user;
var msg;
var nomeGrupo = null;
var username = null;
var menu = "1 - Adicionar usuario \n" +
    "2 - Criar grupo \n" +
    "3 - Adicionar usuario ao grupo\n" +
    "4 - Mostrar usuarios cadastrados\n" +
    "5 - Mostrar grupos do usuario \n" +
    "6 - Mostrar usuarios do grupo \n" +
    "7 - Mandar mensagem \n" +
    "8 - Ler mensagem \n" +
    "9 - Sair do grupo \n";
while (true) {
    console.log(menu);
    var operacao = readline.question("Digite o numero da operacao: ");
    switch (operacao) {
        case "1":
            username = readline.question("Digite o nome de usuario: ");
            whats.addUsuario(username);
            break;
        case "2":
            username = readline.question("Digite o usuario criador do grupo: ");
            nomeGrupo = readline.question("Digite o nome do grupo: ");
            whats.addGrupo(nomeGrupo, username);
            break;
        case "3":
            var adm = readline.question("Digite o nome do usuario que convida: ");
            username = readline.question("Digite o nome de usuario a ser adicionado: ");
            nomeGrupo = readline.question("Digite o nome do grupo: ");
            var res = whats.addUserGrupo(adm, username, nomeGrupo);
            if (res == 1) {
                console.log("Usuario administrador nao existe");
            }
            else if (res == 2) {
                console.log("Usuario nao existe");
            }
            else if (res == 3) {
                console.log("Grupo nao existe");
            }
            else if (res == 4) {
                console.log("Usuario ja esta no grupo");
            }
            else if (res == 5) {
                console.log("Usuario administrador nao esta no grupo");
            }
            else {
                console.log("Usuario adicionado com sucesso");
            }
            break;
        case "4":
            console.log(whats.mostrarUsuariosCadastrados());
            break;
        case "5":
            username = readline.question("Digite o nome do usuario: ");
            user = whats.buscarUsuario(username);
            if (user == undefined) {
                console.log("Usuario inexistente");
            }
            else {
                console.log(user.mostrarGrupos());
            }
            break;
        case "6":
            nomeGrupo = readline.question("Digite o nome do grupo: ");
            grupo = whats.buscarGrupo(nomeGrupo);
            if (grupo == undefined) {
                console.log("Grupo inexistente");
            }
            else {
                console.log(grupo.mostrarUserGrupos());
            }
            break;
        case "7":
            nomeGrupo = readline.question("Digite o nome do grupo: ");
            username = readline.question("Digite o usuario emissor da mensagem: ");
            var textoMsg = readline.question("Digite a mensagem: ");
            whats.enviarMensagem(textoMsg, username, nomeGrupo);
            break;
        case "8":
            username = readline.question("Digite o usuario: ");
            nomeGrupo = readline.question("Digite o nome do grupo: ");
            whats.lerMensagens(username, nomeGrupo);
            break;
        case "9":
            username = readline.question("Digite o usuario que vai sair do grupo: ");
            nomeGrupo = readline.question("Digite o grupo: ");
            whats.removerUsuario(username, nomeGrupo);
            break;
        default:
            console.log("Operacao invalida");
            break;
    }
}
