// Criando uma classe chamada `Character`
class Character {
    name: string;
    strength: number;
    skill: number;

    // O construtor é chamado ao criar um objeto da classe
    constructor(name: string, strength: number, skill: number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    // Método para atacar, exibindo a força do personagem
    attack(): void {
        console.log(`Attack with ${this.strength} points`);
    }
}

// Criando uma instância da classe
const warrior = new Character("Aragorn", 80, 50);
warrior.attack(); // Saída: Attack with 80 points
