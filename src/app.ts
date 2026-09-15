// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express, Request, Response } from "express";
// importa a classe Player do arquivo Player.ts
import { Player } from "./models/Player.js";

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express(); 

// middleware para permitir que o servidor aceite requisições com corpo em formato JSON
app.use(express.json());
// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8081;

// instanciação de um jogador utilizando a classe "Player"
// criamos (instanciamos) um novo jogador chamado "Hero" com 100 de saúde e nível 1
// a partir da classe Player, que foi importada do arquivo Player.ts
let player1: Player = new Player("Hero", 100, 5);

// rota GET para obter informações do jogador
// quando o usuário acessar a rota "/player", o servidor responderá com os dados do jogador
// a função de callback recebe dois parâmetros: req (requisição) e res (resposta)

app.get("/player", (req: Request, res: Response) => {
    res.json({
        message: "Informações do jogador",
        player: player1
    });
});

app.post("/player/attack", (req: Request, res: Response) => {
    const attackMessage = player1.attack(); 
        res.json({
        message: attackMessage,
    });
});   

//rota POST para o jogador atacar
// quando o usuário acessar a rota "/player/attack", o servidor chamará o método attack() do jogador
// é utilizada para enviar dados ou realizar ações que alteram o estado do servidor, como neste caso
//onde o jogador realiza uma ação (como acionar um comportamento de ataque), que é o método attack() do jogador.
// a função de callback recebe dois parâmetros: req (requisição) e res (resposta)

app.post("/player/takeDamage", (req: Request, res: Response) => {
    const { damage } = req.body;
    const damageMessage = player1.takeDamage(damage);
    res.json({
        action: damageMessage,
        currentHealth: player1.health,
        currentLevel: player1.level
    })
})

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
console.log("Rotas disponíveis:");
console.log(`GET http://localhost:${PORT}/player - Obter informações do jogador`);
console.log(`POST http://localhost:${PORT}/player/attack - Jogador realiza um ataque`);
console.log(`POST http://localhost:${PORT}/player/takeDamage - Jogador recebe dano`);
});