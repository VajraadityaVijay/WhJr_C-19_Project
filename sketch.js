var raceCar, raceTrack, raceCarImg, raceTrackImg;
var opponent1, opponent2, opponent3, opponent4, opponents, obstacle, obstacles;
var Car2, Car3, Car4;
var invisableBlock1, invisableBlock2, invisableBlocks;

function preload() {
    raceTrackImg = loadImage("track.png")
    raceCarImg = loadImage("raceCar.png")

    Car2 = loadImage("Car2.png");
    Car3 = loadImage("Car3.png");
    Car4 = loadImage("Car4.png");
}

function setup() {
    createCanvas(1000, 800)
    raceTrack = createSprite(500, 500, 200, 200);
    raceTrack.addImage(raceTrackImg);
    raceTrack.scale = 2;
    raceTrack.velocityY = 15;

    raceCar = createSprite(500, 660);
    raceCar.addImage(raceCarImg);
    raceCar.scale = 0.2;
    raceCar.rotation = -90;

    invisableBlock1 = createSprite(955, 500, 40, 1600)
    invisableBlock1.shapeColor = "white";

    invisableBlock2 = createSprite(45, 500, 40, 1600)
    invisableBlock2.shapeColor = "yellow";

    invisableBlocks = new Group();
    invisableBlocks.add(invisableBlock1);
    invisableBlocks.add(invisableBlock2);

    opponents = new Group();
    obstacles = new Group();

    makeOpponents()
}

function draw() {
    background("lightgrey")

    //console.log(raceCar.y)

    while(raceCar.y !== 660){
        if(frameRate % 25 === 0){
            //raceCar.y = raceCar.y - 1;
            console.log("success")
        }
    }

    if(raceTrack.y >= 800){
        raceTrack.y = 400
    }
    
    if(keyDown("left_arrow")){
        raceCar.x -= 8;
    }
    if(keyDown("right_arrow")){
        raceCar.x += 8;
    }
    if(raceCar.isTouching(invisableBlocks)){
        raceCar.destroy();
        var blackness = createSprite(200, 200, 100000, 1000000);
        blackness.shapeColor = "black";
    }

    if(Math.round(random(0, 400)) > 200){
        opponent1.x += 5;
    }
    if(Math.round(random(0, 400)) < 200){
        opponent1.x -= 7;
    }

    if(Math.round(random(0, 400)) > 200){
        opponent2.x += 5;
    }
    if(Math.round(random(0, 400)) < 200){
        opponent2.x -= 7;
    }

    if(Math.round(random(0, 400)) > 200){
        opponent3.x += 7;
    }
    if(Math.round(random(0, 400)) < 200){
        opponent3.x -= 5;
    }

    if(Math.round(random(0, 400)) > 200){
        opponent4.x += 7;
    }
    if(Math.round(random(0, 400)) < 200){
        opponent4.x -= 5;
    }

    if(opponent1.isTouching(invisableBlocks)){
        opponent1.destroy();
    }
    if(opponent2.isTouching(invisableBlocks)){
        opponent2.destroy();
    }
    if(opponent3.isTouching(invisableBlocks)){
        opponent3.destroy();
    }
    if(opponent4.isTouching(invisableBlocks)){
        opponent4.destroy();
    }

    if(opponents.isTouching(raceCar)){
        raceCar.destroy();
        var blackness = createSprite(200, 200, 100000, 1000000);
        blackness.shapeColor = "black";
    }

    drawSprites();
}

function makeOpponents(){
    opponent1 = createSprite(200, 660)
    opponent1.addImage(Car2) 
    opponent1.scale = 0.25;
    opponent1.rotation = -90;

    opponent2 = createSprite(350, 660)
    opponent2.addImage(Car3)
    opponent2.scale = 0.15;
    opponent2.rotation = -90;
    opponent2.debug = true;
    opponent2.setCollider("rectangle", 0, 0, 1600, 900, 0);

    opponent3 = createSprite(650, 660)
    opponent3.addImage(Car4)
    opponent3.scale = 0.15;
    opponent3.rotation = 90;

    opponent4 = createSprite(800, 660)
    opponent4.addImage(Car2)
    opponent4.scale = 0.25;
    opponent4.rotation = -90;

    opponents.add(opponent1);
    opponents.add(opponent2);
    opponents.add(opponent3);
    opponents.add(opponent4);
}

function spawnObstacles(){
    obstacle = createSprite(Math.round(random(30, 970)), 200, 20, 20);
}