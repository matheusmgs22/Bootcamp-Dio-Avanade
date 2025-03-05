// Objetos em TypeScript podem ser declarados de forma genérica:
let produto: object = {
    name: "Matheus",
    cidade: "Recife",
    idade: 24,
};

// Porém, ao usar um objeto assim, não temos previsibilidade de tipos.
// Para resolver isso, podemos criar um objeto tipado usando `type`:

type ProdutoLoja = {
    nome: string;
    valor: number;
    quantidade: number;
};

// Agora, quando criamos um objeto do tipo `ProdutoLoja`, temos garantias de tipos:
let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    valor: 89.99,
    quantidade: 40,
};
