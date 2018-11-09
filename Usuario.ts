import {Grupo} from "./Grupo";

export class Usuario {
	private username : string;
	private grupos : Array<Grupo>;

	public constructor(username : string) {
		this.username = username;
		this.grupos = [];
	}

	public getUsername() : string {
		return this.username;
	}

	public setUsername(username : string) : void {
		this.username = username;

	}

	public getGrupos() : Array<Grupo> {
		return this.grupos;
	} 

	public setGrupos(grupos : Array<Grupo>) {
		this.grupos = grupos;
	}

	public removerGrupo(nome : string) : boolean {
		for(let i = 0; i < this.grupos.length; i++) {
			let grupo : Grupo = this.grupos[i];
			if(nome == grupo.getNome()) {
				this.grupos.splice(i, 1);
				return true;
			
			}
		}
		return false;
	}

	public mostrarGrupos() : string {
		let res : string = ""
		for(let i of this.grupos) {
			res += i.getNome() + "";
		}
		return res;
	}
	

}