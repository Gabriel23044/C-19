




function preload(){
FogueteImg = loadImage("Foguete.png")
SpaceImg = loadImage("Space.png")




}

function setup() {
 createCanvas(500,600)
 
 
 Ground = createSprite(250,10) 
    Hall = createSprite(10,400)
Ground.addImage(SpaceImg)    
Hall.addImage(FogueteImg)
Hall.scale = 0.1

}

function draw() {
 background("blue")
drawSprites()

if(keyDown(UP_ARROW)){
Hall.position.y = Hall.position.y -2
}

if(keyDown(DOWN_ARROW)){
    Hall.position.y = Hall.position.y +2
    }
    if(keyDown(RIGHT_ARROW)){
        Hall.position.x = Hall.position.x +2
        }
    if(keyDown(LEFT_ARROW)){
        Hall.position.x = Hall.position.x -2
        }


}