export abstract class Ingresso { 

    private _titular: string;
    private _tipo: number;
    private _valor: number;
    private _numero: number;

    constructor(titular: string, tipo: number, valor: number, numero: number) {
        this._titular = titular;
        this._tipo = tipo;
        this._valor = valor;
        this._numero = numero;
    }

    public get titular() {
        return this._titular;
    }

    public set titular(titular: string) {
        this._titular = titular;
    }

    public get tipo() {
        return this._tipo;
    }

    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public get valor() {
        return this._valor;
    }

    public set valor(valor: number) {
        this._valor = valor;
    }

    public get numero() {
        return this._numero;
    }

    public set numero(numero: number) {
        this._numero = numero;
    }

    public visualizar(): void {

        let tipo: string = '';

        switch(this._tipo) {
            case 1:
                tipo = 'Ingresso físico';
                break;
            case 2:
                tipo = 'Ingresso digital';
                break;
        }

        console.log(`\nDados do ingresso:`);
        console.log(`Ingresso de número: ${this._numero}`);
        console.log(`Titular: ${this._titular}`); 
        console.log(`Tipo: ${tipo}`); 
        console.log(`Valor: ${this._valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`); 
    }


}