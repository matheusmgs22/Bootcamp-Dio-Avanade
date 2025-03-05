// Tipos primitivos: representam valores básicos.
let ligado: boolean = false; // Tipo booleano (true ou false)
let nome: string = "Matheus"; // Tipo string (texto)
let idade: number = 30; // Tipo numérico inteiro
let altura: number = 1.86; // Tipo numérico com casas decimais

// Tipos especiais: representam valores nulos ou indefinidos.
let nulo: null = null; // Variável que explicitamente não tem valor
let indefinido: undefined = undefined; // Variável ainda não definida

// Tipo void: usado quando uma função não retorna nada
function executaQuery(): void {
    console.log("Executando query...");
}

// Tipo any: pode receber qualquer tipo de valor (evite usar, pois remove a tipagem)
let retornoView: any = false;
retornoView = "Agora sou uma string"; // Isso é permitido com any, mas pode causar erros
