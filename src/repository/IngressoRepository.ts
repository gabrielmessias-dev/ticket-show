import { Ingresso } from "../model/Ingresso";

export interface IngressoRepository {
    procurarIngresso (numero: number): void;
    listarTodos (): void;
    comprarIngresso (ingresso: Ingresso): void;
    alterarTitular (ingresso: Ingresso, novoTitular: string): void;
    deletarIngresso (numero: number): void;
}