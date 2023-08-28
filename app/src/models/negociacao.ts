import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao extends Imprimivel { 

    constructor (
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {
        super();
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string){
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    public paraTexto(): string{
        return `
            Date: ${this.data},
            Quantity: ${this.quantidade},
            Value: ${this.valor}
        `;
    }

    get volume(): number{
        return this.quantidade*this.valor;
    }

  

}