import { Ingresso } from "./Ingresso";

export class IngressoFisico extends Ingresso { 
    private _taxa: number;

    constructor(titular: string, tipo: number, valor: number, numero: number, taxa: number) {
        super(titular, tipo, valor, numero);
        this._taxa = taxa;
    }

    public get taxa() {
        return this._taxa;
    }

    public set taxa(taxa: number) {
        this._taxa = taxa;
    }

    public calcularValor(): number {
        return this.valor * (1 + this.taxa);
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Valor final com taxa: ${this.calcularValor().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    }
}