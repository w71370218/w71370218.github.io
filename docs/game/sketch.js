const w = window.innerWidth;
const h = window.innerHeight;
let m;
function preload() {
  m = loadSound('assets/music/La_Campanella.mp3');
}

function setup() {
  createCanvas(w, h);
}

function onVideoLoad() {
}

function canvasPressed() {
}

function draw() {
  if (!m.isPlaying()){
    m.play();
  }
  background(220);
  ellipse(50,50,80,80);
}
function mousePressed() { 
  
}