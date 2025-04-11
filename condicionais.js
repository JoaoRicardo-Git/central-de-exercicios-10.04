
function exercicioCondicionais01() {

    let numero = prompt("Qual sua idade?:")

    if (numero >= 18) {

        alert("maior de idade")

    } else {

        alert("menor de idade")

    }

    gerarLog("Exercicio de maioridade executado no alert às " + new Date().toLocaleString())
}

function exercicioCondicionais02() {

    let numero = prompt("Insira um número de sua escolha:")

    if (numero >= 0) {

        alert("Número Positivo!")

    } else {

        alert("Número Negativo!")

    }
    gerarLog("Exercicio de positivo ou negativo executado no alert às " + new Date().toLocaleString())
}

function exercicioCondicionais03() {

    let nota = prompt("Qual a nota do Aluno?:")

    if (nota >= 60) {

        alert("Passou!")

    } else {

        alert("Vou nem fala!")

    }
    gerarLog("Exercicio de Aprovação executado no alert às " + new Date().toLocaleString())
}

function exercicioCondicionais04() {

    let numero = prompt("Digite um numero:")

    if (numero > 0) {

        alert("Positivo")

    } else {

        if (numero < 0) {

            alert("Negativo")

        } else {

            alert("é zero")

        }
    }
    gerarLog("Exercicio de Positivo, Negativo, É Zero executado no alert às " + new Date().toLocaleString())
}

function exercicioCondicionais05() {

    let idade = prompt("Qual sua idade:")

    if (idade >= 18) {

        alert("Adulto")

    } else { }

    if (idade >= 13 && idade <= 17) {

        alert("Adolescente")

    } else {

        if (idade >= 0 && idade <= 12) {

            alert("Criança")
        }

    }
    gerarLog("Exercicio de Classificação de idade executado no alert às " + new Date().toLocaleString())
}

function exercicioCondicionais06() {

    let numero = prompt("Digite um numero divisivel por 2:")

    if (numero % 2 == 0) {

        alert("numero par")

    } else {

        alert("numero ímpar")

    }
    gerarLog("Exercicio de par ou ímpar executado no alert às " + new Date().toLocaleString())
}

function exercicioextra() {
    let nota = prompt("Coloque sua nota:");

    if (nota == 100) {
        alert("Aprovado com distinção")
    } else if (nota >= 60) {
        alert("Aprovado");
    } else {
        alert("Desaprovado");
    }
    gerarLog("Exercicio extra executado no alert às " + new Date().toLocaleString())
}


function exercicioCondicionaisIntermediario01() {

    let num1 = Number(prompt("Escolha um numero:"))
    let operacao = prompt("Qual operacao?:")
    let num2 = Number(prompt("Escolha mais um numero:"))

    if (operacao === "+") {

        alert(num1 + num2)

    } else if (operacao === "-") {

        alert(num1 - num2)

    } else if (operacao === "*") {

        alert(num1 * num2)

    } else if (operacao === "/") {

        alert(num1 / num2)

    // }

    switch (operacao) {
        case "+":
            resutado = num1 + num2
            break;
        case "-":
            resutado = num1 - num2
            break;
        case "*":
            resutado = num1 * num2
            break;
        case "/":
            resutado = num1 / num2
            break;


        default:
            alert("Não Pode!")
            break;
    }

    gerarLog("Exercicio de Calculadora executada no alert às " + new Date().toLocaleString())

}

function exercicioCondicionaisIntermediario02() {

    let num1 = prompt("Digite o primeiro número");
    let num2 = prompt("Digite o segundo número");
    let num3 = prompt("Digite o terceiro número");


    let maior;

    if (num1 >= num2 && num1 >= num3) { maior = num1; }
    else if (num2 >= num1 && num2 >= num3) { maior = num2 }
    else {
        maior = num3;
    }

    alert("O maior é:" + maior)



    gerarLog("Exercicio de três números executado no alert às " + new Date().toLocaleString())
}

function exercicioCondicionaisIntermediario03() {

    let valor = prompt("Qual o Valor da compra?:")
    let desconto = (10)


    if (valor >= 100) {

        alert(valor - desconto)

    } else {

        alert(valor)
    }

    gerarLog("Exercicio de Desconto executado no alert às " + new Date().toLocaleString())

}

function exercicioCondicionaisIntermediario04() {

    let usuario = prompt("Coloque o Usuário: ")
    let senha = prompt("Coloque a Senha: ")

    if (usuario === "admin" && senha === "1234") {
        alert("Login Bem-sucedido");
    } else {
        alert("Acesso Negado");
    }

    gerarLog("Exercicio de Login executado no alert às " + new Date().toLocaleString())

}

function exercicioCondicionaisAvancado01() {

    let nota = prompt("Coloque sua nota de 0 - 100: ");

    if (nota >= 90) {
        alert("A")
    } else if (nota >= 80) {
        alert("B")
    } else if (nota >= 70) {
        alert("C")
    } else if (nota >= 60) {
        alert("D")
    } else {
        alert("F")
    }

    gerarLog("Exercicio de Conversão para conceitos executado no alert às " + new Date().toLocaleString())

}

function gerarLog(textoDoLog) {

    let logsContainer = document.querySelector(".logs-container");

    let paragraph = document.createElement("p");

    paragraph.innerHTML = textoDoLog;

    logsContainer.appendChild(paragraph); // adiciona o paragrafo dentro do logsContainer

}
