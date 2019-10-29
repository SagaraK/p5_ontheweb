let icons = [];
var button0;
var button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;
let button8;
let button9;
let button10;
let button11;
let width = 100;
let height = 100;

function preload(){
  for(let i = 0; i <= 10; i++){
    icons[i] = loadImage(`images/icon_${i}.png`);


  }
}
function  setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255);
  console.log(icons);
  for(let i = 0; i <= 10; i++){
    image(icons[i], PI*i*57  , sin(i)*150 + windowHeight/2.5);
    //button = createButton('Click to increase');
  //button = createButton('Press to in'); //select('#icon_0') //(`#icon__${i}`);
  button0 = select('#icon_0');
  button0.class('buttonStyle');
  button0.position(windowWidth/200, i * 75 + 100);
  button1 = select('#icon_1');
  button1.class('buttonStyle');
  button1.position(windowWidth/i, i * 75 + 100);
  button2 = select('#icon_2');
  button2.class('buttonStyle');
  button2.position(windowWidth/5.5, i * 75 + 100);
  button3 = select('#icon_3');
  button3.class('buttonStyle');
  button3.position(windowWidth/3.6, i * 75 + 100);
  button4 = select('#icon_4');
  button4.class('buttonStyle');
  button4.position(windowWidth/2.75, i * 75 + 100);
  button5 = select('#icon_5');
  button5.class('buttonStyle');
  button5.position(windowWidth/2.2, i * 75 + 100);
  button6 = select('#icon_6');
  button6.class('buttonStyle');
  button6.position(windowWidth/1.8, i * 75 + 100);
  button7 = select('#icon_7');
  button7.class('buttonStyle');
  button7.position(windowWidth/1.54, i * 75 + 100);
  button8 = select('#icon_8');
  button8.class('buttonStyle');
  button8.position(windowWidth/1.33, i * 75 + 100);
  button9 = select('#icon_9');
  button9.class('buttonStyle');
  button9.position(windowWidth/1.18, i * 75 + 100);
  button10 = select('#icon_10');
  button10.class('buttonStyle');
  button10.position(windowWidth/1.07, i * 75 + 100);
  //button11 = select('#icon_11');
  //button11.class('buttonStyle');
  //button11.position(0,0);
  }
  button0.mousePressed(buttonPressed);
  button1.mousePressed(buttonPressed1);
  button2.mousePressed(buttonPressed2);
  button3.mousePressed(buttonPressed3);
  button4.mousePressed(buttonPressed4);
  button5.mousePressed(buttonPressed5);
  button6.mousePressed(buttonPressed6);
  button7.mousePressed(buttonPressed7);
  button8.mousePressed(buttonPressed8);
  button9.mousePressed(buttonPressed9);
  button10.mousePressed(buttonPressed10);
  //button11.mousePressed(reset);
}

function draw() {
}

  //let width = icons[0].height;
  //console.log(icons[0].height);
  //width = 500;
  //icons[0].resize(width,0);
  //image(icons[0],0,300);

function buttonPressed(){
    icons[0].width = width;
    icons[0].height = height;
    console.log(icons[0].width);
    width = width + 5;
    height = height + 5;
    icons[0].resize(width,height);
    image(icons[0],random(windowWidth),random(windowHeight));

  }
function buttonPressed1(){
    icons[1].width = width;
    icons[1].height = height;
    width = width + 5;
    height = height + 5;
    icons[1].resize(width,height);
    image(icons[1],random(windowWidth),random(windowHeight));
}
function buttonPressed2(){
    icons[2].width = width;
    icons[2].height = height;
    width = width + 5;
    height = height + 5;
    icons[2].resize(width,height);
    image(icons[2],random(windowWidth),random(windowHeight));
}
function buttonPressed3(){
    icons[3].width = width;
    icons[3].height = height;
    width = width + 5;
    height = height + 5;
    icons[3].resize(width,height);
    image(icons[3],random(windowWidth),random(windowHeight));
}
function buttonPressed4(){
    icons[4].width = width;
    icons[4].height = height;
    width = width + 5;
    height = height + 5;
    icons[4].resize(width,height);
    image(icons[4],random(windowWidth),random(windowHeight));
  }
function buttonPressed5(){
    icons[5].width = width;
    icons[5].height = height;
    width = width + 5;
    height = height + 5;
    icons[5].resize(width,height);
    image(icons[5],random(windowWidth),random(windowHeight));
}
function buttonPressed6(){
    icons[6].width = width;
    icons[6].height = height;
    width = width + 5;
    height = height + 5;
    icons[6].resize(width,height);
    image(icons[6],random(windowWidth),random(windowHeight));
}
function buttonPressed7(){
    icons[7].width = width;
    icons[7].height = height;
    width = width + 5;
    height = height + 5;
    icons[7].resize(width,height);
    image(icons[7],random(windowWidth),random(windowHeight));
  }
function buttonPressed8(){
    icons[8].width = width;
    icons[8].height = height;
    width = width + 5;
    height = height + 5;
    icons[8].resize(width,height);
    image(icons[8],random(windowWidth),random(windowHeight));
}
function buttonPressed9(){
    icons[9].width = width;
    icons[9].height = height;
    width = width + 5;
    height = height + 5;
    icons[9].resize(width,height);
    image(icons[9],random(windowWidth),random(windowHeight));
}

function buttonPressed10(){
    icons[10].width = width;
    icons[10].height = height;
    width = width + 5;
    height = height + 5;
    icons[10].resize(width,height);
    image(icons[10],random(windowWidth),random(windowHeight));
}
/*function reset(){
  width = 100;
  height = 100;
  background(200);
  textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255);
  console.log(icons);
  for(let i = 0; i <= 10; i++){
  image(icons[i], PI*i*51.5 , sin(i)*150 + windowHeight/2.5);
  button0 = select('#icon_0');
  button0.class('buttonStyle');
  button0.position(windowWidth/200, i * 75 + 100);
  button1 = select('#icon_1');
  button1.class('buttonStyle');
  button1.position(windowWidth/i, i * 75 + 100);
  button2 = select('#icon_2');
  button2.class('buttonStyle');
  button2.position(windowWidth/5.5, i * 75 + 100);
  button3 = select('#icon_3');
  button3.class('buttonStyle');
  button3.position(windowWidth/3.6, i * 75 + 100);
  button4 = select('#icon_4');
  button4.class('buttonStyle');
  button4.position(windowWidth/2.75, i * 75 + 100);
  button5 = select('#icon_5');
  button5.class('buttonStyle');
  button5.position(windowWidth/2.2, i * 75 + 100);
  button6 = select('#icon_6');
  button6.class('buttonStyle');
  button6.position(windowWidth/1.8, i * 75 + 100);
  button7 = select('#icon_7');
  button7.class('buttonStyle');
  button7.position(windowWidth/1.54, i * 75 + 100);
  button8 = select('#icon_8');
  button8.class('buttonStyle');
  button8.position(windowWidth/1.33, i * 75 + 100);
  button9 = select('#icon_9');
  button9.class('buttonStyle');
  button9.position(windowWidth/1.18, i * 75 + 100);
  button10 = select('#icon_10');
  button10.class('buttonStyle');
  button10.position(windowWidth/1.07, i * 75 + 100);
  button11 = select('#icon_11');
}*/




  //var yourImg = document.getElementById('icon_0');
  //  yourImg.style.height = '100px';
    //yourImg.style.width = '200px';
