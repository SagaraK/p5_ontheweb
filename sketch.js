let icons = [];

function preload(){
  for(let i = 0; i <= 10; i++){
    icons[i] = loadImage(`images/icon_${i}.PNG`);

  }
}
function  setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  console.log(icons);
  for(let i = 0; i <= 10; i++){
    image(icons[i], i*175 , i*75);
  }
}

function draw() {
}
