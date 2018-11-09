import {Usuario} from "./Usuario";

import {Mensagens} from "./Mensagens";

export class Grupo {
	private nome : string;
	private usuarios : Array<Usuario>;
	private mensagens : Array<Mensagens>;

	public constructor(nome : string, user : Usuario) {
		this.nome = nome;
		this.usuarios = [user];
		this.mensagens = [];
	}

	public getNome() : string {
		return this.nome;
	}

	public setNome(nome : string) : void {
		this.nome = nome;
	}

	public getUsuarios() : Array<Usuario> {
		return this.usuarios;
	}

	public setUsuarios(usuarios : Array<Usuario>) : void {
		this.usuarios = usuarios;
	}

	public getMensagens() : Array<Mensagens> {
		return this.mensagens;
	}

	public setMensagens(mensagens : Array<Mensagens>) {
		this.mensagens = mensagens;
	}
	public buscarUsuario(username : string) : Usuario | undefined {
		for(let i of this.usuarios) {
			if(i.getUsername() == username) {
				return i;
			}
		}
		return undefined;
	}

	public removerUsuario(username : string) : boolean {
		for(let i = 0; i < this.usuarios.length; i++) {
			let user : Usuario = this.usuarios[i];
			if(username == user.getUsername()) {
				this.usuarios.splice(i, 1);
				return true;
			
			}
		}
		return false;
	}

	public mostrarUserGrupos() : string {
		let res : string = ""
		for(let i of this.usuarios) {
			res += i.getUsername() + "\n";
		}
		return res;
	}

}