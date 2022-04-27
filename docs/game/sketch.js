const w = window.innerWidth;
const h = window.innerHeight;

let mySound;
function preload() {
  soundFormats('mp3');
  mySound = loadSound('assets/music/La_Campanella');
}

function setup() {
    createCanvas(w, h);
    mySound.play();
}

function canvasPressed() {
}

function draw() {
    background(220);
    ellipse(50,50,80,80);
}