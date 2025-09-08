import leia = require('readline-sync');
import { IngressoFisico } from './src/model/IngressoFisico';
import { IngressoVirtual } from './src/model/IngressoVirtual';
import { IngressoController } from './src/controller/IngressoController';

export function main() {

    let opcao: number, valor: number, tipo: number, taxa: number, desconto: number, numero: number;
    let continuar: boolean = true;
    let titular: string, novoTitular: string;

    let ingressos: IngressoController = new IngressoController();
    const tiposIngressos = ["Ingresso físico", "Ingresso virtual"];

    let if1: IngressoFisico = new IngressoFisico("Gabriel Messias", 1, 100.0, 1, 0.1);
    ingressos.comprarIngresso(if1);

    let if2: IngressoFisico = new IngressoFisico("Messias Gabriel", 1, 70, 2, 0.05);
    ingressos.comprarIngresso(if2);

    let iv1: IngressoVirtual = new IngressoVirtual("Messias Veloso", 2, 50, 3, 0.1);
    ingressos.comprarIngresso(iv1);

    let iv2: IngressoVirtual = new IngressoVirtual("Veloso Messias", 2, 30, 4, 0.05);
    ingressos.comprarIngresso(iv2);

    ingressos.listarTodos();

    do {
        console.log("\n*****************************************************");
        console.log("                                                     ");
        console.log("                TICKET - SHOW                        ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("           1 - Comprar ingresso                      ");
        console.log("           2 - Listar todos os ingressos           ");
        console.log("           3 - Buscar ingresso                       ");
        console.log("           4 - Alterar dados do ingresso             ");
        console.log("           5 - Apagar ingresso                       ");
        console.log("           6 - Sair                                  ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("Entre com a opção desejada: ");

        opcao = leia.questionInt();

        switch (opcao) {
            case 1:
                console.log("Para comprar ingresso, digite os dados abaixo:");
                
                console.log("Digite seu nome: ");
                titular = leia.question();
                
                console.log("Digite o valor do ingresso: ");
                valor = leia.questionFloat();
                
                console.log("Digite o tipo de ingresso: [1] - Físico / [2] - Virtual");
                tipo = leia.questionInt();

                    switch (tipo) {
                        case 1:
                            console.log("Digite a taxa de ingresso: ");
                            taxa = leia.questionFloat();
                            ingressos.comprarIngresso(new IngressoFisico(titular, tipo, valor, ingressos.gerarNumero(), taxa));
                            break;
                        case 2:
                            console.log("Digite o desconto: ");
                            desconto = leia.questionFloat();
                            ingressos.comprarIngresso(new IngressoVirtual(titular, tipo, valor, ingressos.gerarNumero(), desconto));
                            break;
                    }

                keyPress();
                break;
            case 2:
                console.log("Listar todos ingressos");
                ingressos.listarTodos();
                keyPress();
                break;
            case 3:
                console.log("Buscar ingresso por numero");

                // utilizando try/catch para tratar erros - exceptions
                try {
                    console.log("\nDigite o numero do ingresso: ");
                    numero = leia.questionInt();
                    ingressos.procurarIngresso(numero);
                } catch (error: any) {
                    console.log(`Erro: ${error.message}`);
                }
                keyPress();
                break;
            case 4:
                console.log("Alterar dados do ingresso");

                console.log("\nDigite o numero do ingresso: ");
                numero = leia.questionInt('');

                console.log("\nDigite o novo titular: ");
                novoTitular = leia.question('');

                let ingresso = ingressos.buscarNoArray(numero);

                if (ingresso !== null) {
                    ingressos.alterarTitular(ingresso, novoTitular);
                } else {
                    console.log(`Ingresso número ${numero} não encontrado!`);
                }
            
                keyPress();
                break;
            case 5:
                console.log("Apagar ingresso");

                console.log("\nDigite o numero do ingresso: ");
                numero = leia.questionInt('');

                ingressos.deletarIngresso(numero);
                
                keyPress();
                break;
            case 6:
                console.log("Saindo...");
                sobre();
                continuar = false;
                keyPress();
                break;
            default:
                console.log("Opção inválida");
                keyPress();
                break;
        }

    } while (opcao != 6)
}

export function keyPress(): void {
    console.log("");
    console.log("\nPressione enter para continuar...");
    leia.prompt();
}

export function sobre(): void {
    console.log("\n******************************************************");
    console.log("Projeto Desenvolvido por:");
    console.log("Gabriel Messias - gabrielmessias@outlook.com");
    console.log("github.com/gabrielmessias-dev");
    console.log("******************************************************");  
    }
    
main();