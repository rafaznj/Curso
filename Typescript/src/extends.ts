// extender uma interface pra outra interface

interface jogosProps {
    readonly id: string;
    nome: string;
    descricao: string;
    plataforma: string[]; // array pq pode ser mais de uma plataforma
}

const left4dead: jogosProps = {
    id: "1",
    nome: "Left4Dead",
    descricao: "Jogo de sobrevivência",
    plataforma: ["PC", "PS5"]
} // console.log(left4dead);

interface Atualização extends jogosProps {
    jogoOriginal: jogosProps,
    faseNova: string[],
    personagemNovo: string[]
}

const left4dead2: Atualização = {
    id: "2",
    nome: "Left4Dead2",
    descricao: "Novos mapas e personagens",
    plataforma: ["PC", "PS5"],
    faseNova: ["Cemiterio", "Inferno"],
    personagemNovo: ["Klaus", "Rob"],
    jogoOriginal: left4dead
}

console.log(left4dead2);