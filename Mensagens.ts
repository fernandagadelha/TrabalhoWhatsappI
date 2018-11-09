import {Usuario} from "./Usuario";


export class Mensagens {
	private texto : string;
	private emissor : Usuario;
	private leitores : Array<Usuario>;

	public constructor(emissor : Usuario, texto : string) {
		this.emissor = emissor;
		this.texto = texto;
		this.leitores = [this.emissor];
	}

	public getEmissor() : Usuario {
		return this.emissor;
	}

	public setEmissor(emissor : Usuario) : void {
		this.emissor = emissor;
	}

	public getTexto() : string {
		return this.texto;
	}

	public setTexto(texto : string) : void {
		this.texto;
	}

	public getLeitores() : Array<Usuario> {
		return this.leitores;
	}

	public setLeitores(leitores : Array<Usuario>) : void {
		this.leitores;
	}

	public buscarLeitor(username : string) : Usuario | undefined {
		for(let i of this.leitores) {
			if(i.getUsername() == username) {
				return i;
			}
		}
		return undefined;
	}

	public toString() : string {
		let res : string = "";
		res += this.emissor.getUsername() + ":" + this.texto;
		return res;
	}

}