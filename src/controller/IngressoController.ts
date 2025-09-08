import { IngressoRepository } from "../repository/IngressoRepository";
import { Ingresso } from "../model/Ingresso";

export class IngressoController implements IngressoRepository {

    private listaIngressos: Array<Ingresso> = new Array<Ingresso>();
    numero: number = 0;

    comprarIngresso(ingresso: Ingresso): void {
        this.listaIngressos.push(ingresso);
        console.log(`O ingresso número ${ingresso.numero} comprado com sucesso!`);
    }
    deletarIngresso(numero: number): void {
        let buscaIngresso = this.buscarNoArray(numero);

        if(buscaIngresso !== null) {
            this.listaIngressos.splice(this.listaIngressos.indexOf(buscaIngresso), 1);
            console.log(`O ingresso número ${numero} foi deletado com sucesso!`); 
        } else {
            console.log(`Ingresso número ${numero} não encontrado!`);
        }
    }
    listarTodos(): void {
        for(let ingresso of this.listaIngressos) {
            ingresso.visualizar();
        }
    }
    procurarIngresso(numero: number): void {
        let buscaIngresso = this.buscarNoArray(numero);

        if(buscaIngresso !== null) {
            buscaIngresso.visualizar();
        } else {
            console.log(`Ingresso número ${numero} não encontrado!`);
        }
    }
    alterarTitular(ingresso: Ingresso, novoTitular: string): void {
        let buscaIngresso = this.buscarNoArray(ingresso.numero);

        if(buscaIngresso !== null) {
            buscaIngresso.titular = novoTitular;
            console.log(`O titular do ingresso número ${ingresso.numero} foi alterado para ${novoTitular}!`);
        } else {
            console.log(`Ingresso número ${ingresso.numero} não encontrado!`);
        }
    }

    public gerarNumero(): number {
        return ++ this.numero;
    }

    public buscarNoArray(numero: number): Ingresso | null {
        
        for(let ingresso of this.listaIngressos) {
            if(ingresso.numero === numero) {
                return ingresso;
            }
        }
        return null;
    }
}