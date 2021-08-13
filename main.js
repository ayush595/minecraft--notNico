var canvas= new fabric.Canvas("cannas");
var playerx= 10;
var playery= 10;

var blockhei= 30;
var blockwid= 30;

var playerimage= "";
var blockimage= "";

// for making the image for the player

function maimage() {
    fabric.Image.fromURL("unnamed.png", function (IMAGE) {
        playerimage= IMAGE;
        // set width hieght
        playerimage.scaleToWidth(150);
        playerimage.scaleToHeight(140);
        // set the position
        playerimage.set({
            top:playery,
            left:playerx
        }) ;
        canvas.add(playerimage);
        
    });
    

}
// for the block images
function blockima(getimage) {
    fabric.Image.fromURL(getimage, function (IMAGE) {
        blockimage= IMAGE;
        // set width hieght
        blockimage.scaleToWidth(blockwid);
        blockimage.scaleToHeight(blockhei);
        // set the position
        blockimage.set({
            top:blockhei,
            left:blockwid
        }) ;
        canvas.add(blockimage);
        
    }); 
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
sky= e.keyCode;
if (sky == "84") {
    console.log("you pressed t");
    blockima("trunk.jpg");

}
if (sky == "68") {
    console.log("you pressed d");
    blockima("dark_green.png");

}
if (sky == "76") {
    console.log("you pressed l");
    blockima("light_green.png");

}
if (sky == "71") {
    console.log("you pressed g");
    blockima("ground.png");

}
if (sky == "87") {
    console.log("you pressed w");
    blockima("wall.jpg");

}
if (sky == "89") {
    console.log("you pressed y");
    blockima("yellow_wall.png");

}
if (sky == "82") {
    console.log("you pressed r");
    blockima("roof.jpg");

}
if (sky == "83") {
    console.log("you pressed s");
    blockima("stone.jpg");

}
if (sky == "85") {
    console.log("you pressed u");
    blockima("unique.png");

}
if (sky == "84") {
    console.log("you pressed t");
    blockima("trunk.jpg");

}
if (e.shiftKey == true && sky == "80") {
    console.log("p and shift key is pressed together");
    blockhei= blockhei + 10;
    blockwid= blockwid + 10;
    blockima();
    document.getElementById("first").innerHTML= blockwid;
    document.getElementById("second").innerHTML= blockhei;
}
if (e.shiftKey == true && sky == "77") {
    console.log("m and shift key is pressed together");
    blockhei= blockhei - 10;
    blockwid= blockwid - 10;
    blockima();
    document.getElementById("first").innerHTML= blockwid;
    document.getElementById("second").innerHTML= blockhei;
}
if (sky == "38") {
    console.log("up key is pressed");
     up();
}
if (sky == "40") {
    console.log("down key is pressed");
    down();
}
if (sky == "37") {
    console.log("left key is pressed");
    left();
}
if (sky == "39") {
    console.log("right key is pressed");
    right();
}
    

}
function up() {
    if (playery >= 0) {
        playery = playery - 10;
        canvas.remove(playerimage);
        maimage();
    }
}
function down() {
    if (playery <= 500) {
        playery = playery + 10;
        canvas.remove(playerimage);
        maimage();
    }
}
function left() {
    if (playerx >= 0) {
        playerx = playerx - 10;
        canvas.remove(playerimage);
        maimage();
    }
}
function right() {
    if (playerx <= 700) {
        playerx = playerx + 10;
        canvas.remove(playerimage);
        maimage();
    }
}