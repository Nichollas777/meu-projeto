class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

const pessoa1 = new Pessoa("Nichollas", 15);
const pessoa2 = new Pessoa("Isaac", 17);

pessoa1.apresentar();
pessoa2.apresentar();