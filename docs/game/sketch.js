const w = window.innerWidth;
const h = window.innerHeight;

let m;
function preload() {
}

function setup() {
    createCanvas(w, h);
    m = createAudio('assets/music/La_Campanella.mp3');
    m.autoplay(true);
}

function onVideoLoad() {
}

function canvasPressed() {
}

function draw() {
    background(220);
    ellipse(50,50,80,80);
}
function mousePressed() { 
  
}