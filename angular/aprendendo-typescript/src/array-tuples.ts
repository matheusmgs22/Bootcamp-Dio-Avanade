// Arrays: listas que armazenam vários valores do mesmo tipo
let dados: string[] = ["Matheus", "Garcia"]; // Array de strings
let dados2: Array<string> = ["Matheus", "Garcia"]; // Outra forma de tipar arrays

// Arrays com múltiplos tipos (union types)
let infos: (string | number)[] = ["Felipe", 30, "Programador"]; // Aceita string e número

// Tuplas: Arrays de tamanho fixo com tipos definidos para cada posição
let boleto: [string, number, number] = ["Água Conta", 199.99, 3321333];
// A primeira posição deve ser string, a segunda um número e a terceira um número
