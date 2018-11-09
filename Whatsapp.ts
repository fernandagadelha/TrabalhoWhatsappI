import {Grupo} from "./Grupo";

import {Usuario} from "./Usuario";

import {Mensagens} from "./Mensagens";

export class Whatsapp {
	private usuarios : Array<Usuario>;
	private grupos : Array<Grupo>;
	private mensagens : Array<Mensagens>;


	public constructor() {
		this.usuarios = [];
		this.grupos = [];
		this.mensagens = [];
	}

	public addUsuario(username : string) : boolean {
		if(this.buscarUsuario(username) != undefined) {
			return false;
		}
		else {
			this.usuarios.push(new Usuario(username));
			return true;
		}
	}

	public buscarUsuario(username : string) : Usuario | undefined {
		for(let i of this.usuarios) {
			if(i.getUsername() == username) {
				return i;
			}
		}
		return undefined;
	}

	public mostrarUsuariosCadastrados() : string {
		let res : string = "";
		for(let i of this.usuarios) {
			res += i.getUsername() + "\n";
		}
		return res;
	}

	
	public buscarGrupo(nome : string) : Grupo | undefined {
		for(let i of this.grupos) {
			if(i.getNome() == nome) {
				return i;
			}
		}
		return undefined;
	}

	public addGrupo(nome : string, username : string) : boolean {
		if(this.buscarGrupo(nome) != undefined) {
			return false;
		}
		else {
			if(this.buscarUsuario(username) != undefined) {
				let usuario : Usuario = this.buscarUsuario(username);
				let grupo : Grupo = new Grupo(nome, usuario);
				this.grupos.push(grupo);
				usuario.getGrupos().push(grupo);

				return true;
			}
		}
	}

	public addUserGrupo(adm : string, username : string, nome : string) : number {
		let a : Usuario = this.buscarUsuario(adm);
		let b : Usuario = this.buscarUsuario(username);
		let c : Grupo = this.buscarGrupo(nome);

		if(a == undefined) {
			return 1; //adm nao existe

		}		
		else if(b == undefined) {
			return 2; //usuario nao existe

		}
		else if(c == undefined) {
			return 3; //grupo nao existe

		}
		else if(c.buscarUsuario(username) != undefined) {
			return 4; //usuario ja esta no grupo

		}
		else if(c.buscarUsuario(adm) == undefined) {
			return 5; //adm nao esta no grupo

		}
		else {
			c.getUsuarios().push(b);
			b.getGrupos().push(c);
			return 0; //usuario adicionado com sucesso
		}

	}

	public enviarMensagem(texto : string, username : string, nome : string) : number {
		let b : Usuario = this.buscarUsuario(username);
		let c : Grupo = this.buscarGrupo(nome);

		if(b == undefined) {
			return 1; // usuario nao existe

		}
		else if(c == undefined) {
			return 2; //grupo nao existe

		}
		else if(b == undefined) {
			return 3; //usuario nao esta no grupo
		}
		else {
			c.getMensagens().push(new Mensagens(b, texto));
			return 0;
		}

	}

	public buscarMensagensNovas(username : string, nome : string) : Array<string> | number {
		let b : Usuario = this.buscarUsuario(username);
		let c : Grupo = this.buscarGrupo(nome);
		let res : Array<string> = [];

		if(b == undefined) {
			console.log("usuario nao existe");
			return 1;
		}
		else if(c == undefined) {
			console.log("grupo nao existe");
			return 2;

		}
		else if(b == undefined) {
			console.log("usuario nao esta no grupo");
			return 3;
		}
		else {
			for(let m of c.getMensagens()) {
				if(m.buscarLeitor(username) == undefined){
					let em : Usuario = m.getEmissor();
					let mens : string = m.getTexto();
					res.push(em.getUsername() + ":" + mens);
					m.getLeitores().push(b);
				}
				
			}
			return res;
		}
	}

	public lerMensagens(username : string, nome : string) : string {
		let r: number | string[] = this.buscarMensagensNovas(username, nome);
		if(r == 1) {
			return "Pessoa nao existe";
		} 
		else if(r == 2) {
			return "Grupo nao existe";
		}
		else if(r == 3) {
			return "Pessoa nao esta no grupo";
		}
		else {
			console.log(r);
			return "Mensagem lida!";
		}
		
	}

	public removerUsuario(username : string, nome : string) : void {
		let grupo : Grupo = this.buscarGrupo(nome);
		if(grupo != undefined) {
			let x = grupo.removerUsuario(username);
			if(x == false) {
				console.log("Usuario nao esta no grupo");
			}
			else {
				let usuario : Usuario = this.buscarUsuario(username);
				usuario.removerGrupo(nome);
				console.log(username + " saiu do grupo " + nome);
			}
		}
		else {
			console.log("Grupo nao existe");
		}
		
	}

	public getUsuario(username : string) : Usuario {
		for(let i = 0; i < this.usuarios.length; i++) {
			let user : Usuario = this.usuarios[i];
			if(username == user.getUsername()) {
				return user;
			}
		}
		return null;
	}

}