// A palavra "class" define que estamos criando um molde.
// A palavra "export" permite que esse arquivo seja usado por outros arquivos (como o app.ts)
export class Player {
    public name: string; // O nome do jogador em texto
    public health: number; // A saúde do jogador em número
    public level: number; // O nível do jogador em número

    // Construtores (o construtor é um método especial que é executado automaticamente quando a classe é instanciada uma única vez)
    constructor(name: string, health: number = 100, level: number = 1) {
        this.name = name; // A palavra "this" faz referência a própria classe, ou seja: "pegue o atributo 'name' da classe Player e atribua o valor do parâmetro 'name' a ele"
        this.health = health;
        this.level = level
    }

    // Métodos (comportamentos de classe)
    // Métodos são as "funções" que a classe pode executar, ou seja, são os comportamentos da classe.
    // O método "attack" é um método que retorna um string.
    public attack(): string {
        const damage = this.level * 10; // Calcula o dano baseado no nível do jogador 
        return `${this.name} atacou e causou ${damage} de dano`;
    }
    // O método "takeDamage" é um método que recebe um número como parâmetro e não retorna nada (void).
    public takeDamage(amount: number): string {
        this.health -= amount; // Reduz a saúde do jogador pelo valor do parâmetro
        if (this.health < 0) {
            this.health = 0; // Garante que a saúde não fique negativa
            return `${this.name} foi derrotado!`;
        }

        return `${this.name} recebeu ${amount} de dano e agora tem ${this.health} de saúde.`;
    }
}