let icons = [];
let button;
let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;
let button8;
let button9;
let button10;
let img;

function preload(){
  for(let i = 0; i <= 10; i++){
    icons[i] = loadImage(`images/icon_${i}.PNG`);


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
    image(icons[i], PI*i*57 , sin(i)*150 + windowHeight/2.5);
    //button = createButton('Click to increase');
  //button = createButton('Press to in'); //select('#icon_0') //(`#icon__${i}`);
  button = select('#icon_0');
  button.class('buttonStyle');
  button.position(windowWidth/200, i * 75 + 100);
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
  }
  button.mousePressed(buttonPressed);

}

function draw() {
  let width = icons[0].height;
  console.log(icons[0].height);
  width = 500;
  icons[0].resize(width,0);
  image(icons[0],0,300);
}

function buttonPressed(){
  let i = [];
  i = icons;
  image(icons[0].resize(200,1));
  //var yourImg = document.getElementById('icon_0');
  //  yourImg.style.height = '100px';
    //yourImg.style.width = '200px';

}
