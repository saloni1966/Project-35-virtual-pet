//Create variables here
var dog,happydog,database,foodS,foodStoke;
var dogimg,happydog;
function preload()
{
  
  dogimg = loadImage("images/dogImg.png");
  happydog = loadImage("images/dogImg1.png");
  
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage(dogimg);
  dog.scale = 0.2

  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value",readStock);
  
  
}


function draw() {  
  background(46,139,87);

  if(keyWentUp(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydog);
  }
  textSize(20);
  fill("red");
  text("FOOD STOCK : " + foodS,100,150);
  textSize(10);
  text("NOTE: Press UP_ARROW Key To Feed Drago Milk!!",50,50);


  drawSprites();
  //add styles here

}
function readStock(data){
  foodS = data.val();

}

function writeStock(x){
  if(x <=0){
    x=0;
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}




