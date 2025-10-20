let frameRateJogo = 5;

let cobra = new Cobra(20);
let comida = new Comida();

function setup() {
  createCanvas(400, 400);
  comida.criar(400, 400);
}

function draw() {
  frameRate(frameRateJogo);
  background(220);

  cobra.desenhar();
  cobra.mover();
  if (cobra.comer(comida.x, comida.y)) {
    frameRateJogo += 2;
    comida.criar(400, 400);
  }

  if (cobra.verificarColisao()) {
    gameOver()
  }

 comida.desenhar();
}

// -------------------- Funções --------------------
function desenharComida() {
  fill(255, 0, 0);
  rect(comidaX, comidaY, tamanho, tamanho);
}

function criarComida() {
  let cols = floor(width / tamanho);
  let rows = floor(height / tamanho);
  comidaX = floor(random(cols)) * tamanho;
  comidaY = floor(random(rows)) * tamanho;
}

function gameOver() {
  noLoop();
  text("Game Over!", 160, 200);
}
