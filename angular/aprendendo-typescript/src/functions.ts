// Função que recebe dois números e retorna a soma deles
function addNumber(x: number, y: number): number {
    return x + y;
}

// Função que retorna uma string concatenada
function addToHello(name: string): string {
    return `Hello ${name}`;
}

// Função que aceita um número ou string e retorna o mesmo valor recebido
function CallToPhone(phone: number | string): string | number {
    return phone;
}

// Exemplo de chamada da função
console.log(CallToPhone("Matheus"));

// Função assíncrona que retorna uma promessa de string
async function getDatabase(id: number): Promise<string> {
    return "Matheus"; // Simulando um retorno de banco de dados
}
