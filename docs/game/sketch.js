class Button {
  start(x1,y1,str) {
    this.x = x1;
    this.y = y1;
    this.w = 240;
    this.h = 80;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.text = str;
    this.text_size = 50;
  }
  display() {
    fill(this.r,this.g,this.b);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
    fill(0);
    textSize(this.text_size);
    text(this.text,this.x+(this.w-this.text.length()*25)/2,this.y+60);
  }
}

class MenuItem {
  start(number,name,time){
    this.min = int(time)/60;
    this.sec = int(time)%60;
    this.text = name;
    if (this.text.length()>=19){
      this.text = this.text.substring(0,19)+"...";
    }
    this.text_size = 50;
    this.num = number;
    this.w = 600;
    this.h = 150;
    this.x = 600;
    this.y = 15 + this.num * 30 + this.num * this.h;
    this.py = y;
    this.r = 70;
    this.g = 130;
    this.b = 180;
  }
  display(){
    noStroke();
    if (this.y > this.py){
      this.y-=60;
    }
    if (this.y < this.py){
      this.y+=60;
    }
    
    if (this.y == 15 + 2 * 30 + 2 * this.h){
      this.x = 600;
      stroke(255);
      strokeWeight(10);
      fill(110, 170, 220);
    } else{
      this.x = 630;
      noStroke();
      fill(255);
    }
    rect(this.x,this.y,this.w,this.h);
    fill(0);
    textSize(this.text_size);
    text(this.text, this.x +30,this.y+this.h/2+this.text_size);
    textSize(this.text_size-20);
    text(this.min+"m"+this.sec+"s", this.x +30,this.y+this.text_size-20);
  }
  up() {
    this.num +=1;
    this.py = 15 + this.num * 30 + this.num * this.h;
  }
  down() {
    this.num -=1;
    this.py = 15 + this.num * 30 + this.num * this.h;
  }
}

const screen_w = window.innerWidth;
const screen_h = window.innerHeight;

let file = [];
let countdown_sound;
let numsounds;
let numPic = 2; //picture of music
let music_index;
let music_on;

let num = 20;
let m = 15;
let x1 = [];
let y1 = [];
let r = [];
let g = [];
let b = [];
let a = [];
let x2 = [];
let y2 = [];

let snow_x = [];
let snow_y = [];
let snow_v = [];

let score;
let full_score;
let degree;
let time0 = 0; //time
let t = 3;
let countdown_on = true;
let status;
let select_song = false;
let selected_song;

let y = 2400;
let adlr = 4;
let map = [];
let y_index = 0;
let y_adlr;

let line_spaceing = 50;
let i_y = (screen_h-line_spaceing)/10;
let index_map =[];

let a_y = 0;
let d_y = 0;
let l_y = 0;
let r_y = 0;

let w=100;
let h=10;
let spacing=50;

let shine; 

let xpos;
let ypos;
let drag = 30.0;

let cursor = 1;
let bg = 1; //background

let start = new Button();
let exit = new Button();
let setting = new Button();
let playB = new Button(); //play
let again = new Button();
let menu = new Button();
let menulist = [];

//let table = new Table();/////
let maps = [];


 //csv


function preload() {
  //m = loadSound('assets/music/La Campanella.mp3');
}

function setup() {
  createCanvas(screen_w, screen_h);
  background(105, 105, 105);
  textSize(300);
  text("Loading...", 30, 30);

  let a_rgb = color(255, 79, 109);
  let d_rgb = color(60, 232, 227);
  let l_rgb = color(80, 250, 130);
  let r_rgb = color(255, 189, 79);

  ypos = height * 0.25;
  
  music_index = 2;

  status = 1;
}

function draw() {
  if (status< 3 || status >5){
    background(0);
    if(background == 1){
      fill(255);
      for (let i = num-1; i > 0; i--) {
        if (snow_y[i]<900){
           ellipse(snow_x[i], snow_y[i], 10,10);
         } else {
           snow_x[i] = int(random(0,1200));
           snow_y[i] = 0;
           snow_v[i] = int(random(5,50));
         }
        snow_y[i] += snow_v[i];
      }
    }
  }

  if (status==1){
    //frameRate(24);
    
    //file[music_index].stop();
    
    fill(255);
    textSize(125);
    text("Piano Tiles", 250, 300);
    textSize(35);
    text("By UR & Julie", 480, 400);
    textSize(20);
    text("Simple graphics, easy to play and everybody gets playing the piano!", 280, 480);
    text("Fu Jen University Library and Information Science Department", 300, 850);
    start.start(480,500,"Start");
    setting.start(480,600,"Setting");
    exit.start(480,700,"Exit");
    
    start.display();
    setting.display();
    exit.display();
    
    /*
    if (mousePressed == true && mouseButton == LEFT && mouseX > 480 && mouseX < 720 && mouseY > 500 && mouseY < 580){
      status=2;
    }
    if (mousePressed == true && mouseButton == LEFT && mouseX > 480 && mouseX < 720 && mouseY > 600 && mouseY < 680){
      status=7;
    }
    
    if (mousePressed == true && mouseButton == LEFT && mouseX > 480 && mouseX < 720 && mouseY > 700 && mouseY < 780){
      exit();
    }
    */
  }
}
function mousePressed() { 
  
}