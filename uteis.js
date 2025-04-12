function exemploDeFilter() {

    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let numerosFiltrados = numeros.filter(numero => numero > 2);

    console.log(numerosFiltrados)
    
}

function ExercicioDeFilterBasico01() {

    const numero = [5, 8, 12, 15, 3, 20, 7];
    const maioresQueDez = numero.filter(numero => numero > 10);
    console.log(maiorQueDez); // Deve retornar [12, 15, 20]

}

function ExercicioDeFilterBasico02() {

    const nomes = ["Ana" , "João", "Amanda", "Carlos", "Arthur", "Beatriz"];
    const nomesComA = nomes.filter(nome => nome.startsWith("A"));
    console.log(nomesComA);  // Deve retornar ["Ana", "Amanda", "Arthur"]

}

function ExercicioDeFilterBasico03() {
const produtos = [
    { nome: "Teclado", preco: 120 },
    { nome: "Mouse", preco: 40 },
    { nome: "Fone de ouvido", preco: 80 },
    { nome: "Caderno", preco: 30 }
  ];
  const produtosFiltrados = produtos.filter(produtos => produtos.preso < 50); 
  alert(JSON.stringify(produtosFiltrados));
}

function ExemploFind() {

    let produtos = [
        { id: 1, nome: "teclado", preso: 100},
        { id: 2, nome: "mouse", preso: 50},
        { id: 3, nome: "monitor", preso: 700},
    ];

    let produtoFiltrado = produtos.find(produto => produto.preso == 700)
    alert(produtoFiltrado)

}

function exemploMap () {

    let numeros = [1, 2, 3, 4, 5]

    let numerosDobrados = numeros.map(numero => numero * 2);

    console.log(numerosDobrados);

}