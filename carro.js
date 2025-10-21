class Carro {
    constructor(modelo) {
        this.modelo = modelo;
        this.velocidade = 0;
    }

    acelerar() {
        this.velocidade += 10;
    }

    frear() {
        this.velocidade -= 10;
        if (this.velocidade < 0) {
            this.velocidade = 0;
        }
    }
}

mostrar_velocidade() {
    
}
