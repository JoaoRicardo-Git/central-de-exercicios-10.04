function exemplofor() {

    // for
    // 1o = declarar contador.
    // 2o = condição (enquanto).
    // 3o = incremento.

    for (let contador = 1; contador <= 5; contador++) {

        alert(contador);

    }
}

function exemplowhile() {

    let contador = 1;

    while (contador <= 5); {

        console.log(contador);
        contador++;
    }
}


function exemplodowhile() {
    let contador = 1;

    do {

        alert(contador);
        contador++;

    } while (contador <= 5);
}

function exercicioRepeticao01() {
    for (let contador = 1; contador <= 10; contador++) {

        alert(contador);

    }
}

function exercicioRepeticao02() {
    let numero = parseInt(prompt("Digite um numero: ")); //parseInt serve para converter string por um numero inteiro

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
    alert(resultado);
}



function exercicioRepeticao03() {

    let N = parseInt(prompt("Digite um numero N: "));
    let soma = 0;
    for (let i = 1; i <= N; i++) {
        soma += i;
    }
    console.log(soma);


}

function exercicioRepeticaoInter01() {

    let i = 1
    while(i <= 50) {
        if (i % 2 === 0) {
            console.log (i)
        }
        i++

    }
}

function exercicioRepeticaoInter02() {

    let N = parseInt(prompt("Digite um numero: "));

    while (N >= 0) {
        console.log (N);
        N = N - 1;
    }
    N++
}

function exercicioRepeticaoInter03() {

    debugger;

    let numeroAleatorio = Math.floor(Math.random() * (100 - 1) + 1);

    let tentativa;

    while (tentativa != numeroAleatorio) {
        tentativa = parseInt(prompt("Insira um numero: "));

        if (numeroAleatorio > tentativa) {
            alert ("Numero aleatorio e maior.")
        } else if (numeroAleatorio < tentativa) {
            alert ("Numero aleatorio e menor")
        } else {
            alert("Voce Acertou!");
        }
    }
}

function exercicioRepeticaoAvancado01() {

    let numero = parseInt(prompt("Insira um numero inteiro positivo: "));

    if (numero > 0) {
        let soma = 0;

        while (numero > 0) {
            let digito = numero % 10;
            soma += digito; //soma o digito
            numero = Math.floor(numero / 10); //remove o ultimo digito
        }
        console.log ("A soma dos dígitos é:" + soma);
    } else {
        console.log ("Por favor, digite um numero inteiro positivo");
    }
}