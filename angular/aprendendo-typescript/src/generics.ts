// Função genérica que aceita qualquer tipo e retorna o mesmo valor
function showData<T>(data: T): T {
    return data;
}

// Testando a função com diferentes tipos
console.log(showData<string>("Testando")); // Retorna "Testando"
console.log(showData<number>(123)); // Retorna 123

// Interface genérica que pode ser utilizada com diferentes tipos de dados
interface Produto<T, U> {
    nome: string;
    preco: T;
    detalhes: U;
}

// Criando objetos do tipo Produto com diferentes tipos de valores
const produto1: Produto<number, string> = {
    nome: "Notebook",
    preco: 4500,
    detalhes: "Dell Inspiron 15"
};

const produto2: Produto<string, object> = {
    nome: "Celular",
    preco: "R$ 2500",
    detalhes: { marca: "Samsung", modelo: "S23" }
};
