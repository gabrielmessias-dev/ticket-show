import { Ingresso } from "./Ingresso";

export class IngressoVirtual extends Ingresso {
    private _desconto: number;

    constructor(titular: string, tipo: number, valor: number, numero: number, desconto: number) {
        super(titular, tipo, valor, numero);
        this._desconto = desconto;
    }

    public get desconto() {
        return this._desconto;
    }

    public set desconto(desconto: number) {
        this._desconto = desconto;
    }

    public calcularValor(): number {
        return this.valor * (1 - this.desconto);
    }
    
    public visualizar(): void {
        super.visualizar();
        console.log(`Valor final com desconto: ${this.calcularValor().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);        
    }
}