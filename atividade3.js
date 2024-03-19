var saldoAtual = 300;
var limiteTransf = 1000;
var valorChequeEspecial = 500;
var cadastroAtivo = true;
var historicoCredito = false;
var rendaMensal = 1800;

// Função para exibir o menu
function exibirMenu() {
    console.log("\n=== MENU ===");
    console.log("1. Verificar saldo");
    console.log("2. Realizar saque");
    console.log("3. Realizar depósito");
    console.log("4. Realizar transferência");
    console.log("5. Verificar cheque especial");
    console.log("6. Atualizar cadastro");
    console.log("7. Verificar limite de crédito");
    console.log("0. Sair");
}

// Função principal para realizar as operações bancárias
function operacoesBancarias(opcao) {
    switch (opcao) {
        case 1:
            verSaldo();
            break;
        case 2:
            var valorSaque = parseInt(prompt("Digite o valor do saque:"));
            realizarSaque(valorSaque);
            break;
        case 3:
            var valorDeposito = parseInt(prompt("Digite o valor do depósito:"));
            realizarDeposito(valorDeposito);
            break;
        case 4:
            var valorTransf = parseInt(prompt("Digite o valor da transferência:"));
            var saldoDestinoTransf = parseInt(prompt("Digite o saldo do destino da transferência:"));
            realizarTransf(saldoDestinoTransf, valorTransf);
            break;
        case 5:
            verificarChequeEspecial();
            break;
        case 6:
            atualizarCadastro();
            break;
        case 7:
            verificarLimiteCredito();
            break;
        case 0:
            console.log("Saindo do sistema...");
            return;
        default:
            console.log("Opção inválida!");
    }
}

// Função para verificação de saldo
function verSaldo() {
    if (saldoAtual > 0) {
        console.log("Saldo positivo! Valor em conta: " + saldoAtual);
    } else {
        console.log("Saldo negativo. Valor em conta: " + saldoAtual);
    }
}

// Função para realizar saque
function realizarSaque(valorSaque) {
    if (saldoAtual >= valorSaque) {
        saldoAtual -= valorSaque;
        console.log("Saque realizado com sucesso. Saldo atual: " + saldoAtual);
    } else {
        console.log("Saldo insuficiente. Valor em conta: " + saldoAtual);
    }
}

// Função para realizar depósito
function realizarDeposito(valorDeposito) {
    if (valorDeposito > 0) {
        saldoAtual += valorDeposito;
        console.log("Deposito de " + valorDeposito + " realizado. Saldo atual: " + saldoAtual);
    } else {
        console.log("Insira um valor maior que zero!");
    }
}

// Função para realizar transferência
function realizarTransf(saldoDestinoTransf, valorTransf) {
    if (saldoAtual >= valorTransf) {
        if (valorTransf <= limiteTransf) {
            saldoAtual -= valorTransf;
            saldoDestinoTransf += valorTransf;
            console.log("Transferência realizada. Saldo atual: " + saldoAtual);
        } else {
            console.log("Transferência não realizada pois o valor ultrapassa o limite da conta. Limite atual: " + limiteTransf);
        }
    } else {
        console.log("Saldo insuficiente. Saldo atual: " + saldoAtual);
    }
}

// Função para verificar cheque especial
function verificarChequeEspecial() {
    if (saldoAtual < 0) {
        console.log("Dentro do limite do cheque especial.");
    } else {
        console.log("Fora do limite do cheque especial.");
    }
}

// Função para atualizar cadastro
function atualizarCadastro() {
    if (cadastroAtivo) {
        if (saldoAtual > 0) {
            console.log("Cadastro ativo e saldo maior que zero.");
        } else {
            console.log("Cadastro ativo, mas precisa regularizar saldo");
        }
    } else {
        console.log("Cadastro inativo, por favor atualize.");
    }
}

// Função para verificar limite de crédito
function verificarLimiteCredito() {
    if (saldoAtual > 1000 && historicoCredito && rendaMensal > 3000) {
        console.log("Crédito aprovado.");
    } else {
        console.log("Crédito negado.")
    }
}

// Loop principal para interação com o usuário
while (true) {
    exibirMenu();
    var opcao = parseInt(prompt("Digite o número da opção desejada:"));
    operacoesBancarias(opcao);
}