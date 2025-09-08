import leia = require('readline-sync');

export function main() {

    let opcao: number, idade: number, tipo: number;
    let continuar: boolean = true;
    let nome: string;

    do {
        console.log("\n*****************************************************");
        console.log("                                                     ");
        console.log("                TICKET - SHOW                        ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("           1 - Comprar ingresso                      ");
        console.log("           2 - Listar todos seus ingressos           ");
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
                nome = leia.question();
                
                console.log("Digite sua idade: ");
                idade = leia.questionInt();
                
                console.log("Digite o tipo de ingresso: [1] - Físico / [2] - Virtual");
                tipo = leia.questionInt();
                
                switch (tipo) {
                    case 1:
                        console.log("Ingresso físico comprado com sucesso!");
                        break;
                    case 2:
                        console.log("Ingresso virtual comprado com sucesso!");
                        break;
                    default:
                        console.log("Opção inválida");
                        break;
                }

                keyPress();
                break;
            case 2:
                console.log("Listar todos seus ingressos");
                keyPress();
                break;
            case 3:
                console.log("Buscar ingresso por numero");
                keyPress();
                break;
            case 4:
                console.log("Alterar dados do ingresso");
                keyPress();
                break;
            case 5:
                console.log("Apagar ingresso");
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