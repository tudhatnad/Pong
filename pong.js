var xLeft = 1; //bal uto pozicioja x tengely
var yLeft = 10; //bal uto pozicioja y tengely
var xRight = 489; //jobb uto pozicioja x tengely
var yRight = 10; //jobb uto pozicioja y tengely
var canvHeight = 300; //jatekter magassaga pixelben -- muszaj manualisan megadni, idk why
var canvWidth = 500; //jatekter szelessegepixelben -- muszaj manualisan megadni, idk why
var pongHeight = 75; //uto magassaga
var xBall = 250; //labda pozicio x tengely
var yBall = 150; //labda pozicio y tengely
var xBallChange = 1; //ennyit mozog a labda
var yBallChange = 1; //ennyit mozog a labda 
var size = 8; //labda atmero px
var first = true;

function drawBall() {
     var c = document.getElementById("pong");
     var ctx = c.getContext("2d");
     ctx.beginPath();
     ctx.fillRect(xBall, yBall, size, size);
     ctx.stroke();
}

function ballmove() {
     var c = document.getElementById("pong");
     var ctx = c.getContext("2d");
     ctx.clearRect(xBall, yBall, size, size);
     xBall += xBallChange;
     yBall += yBallChange;
     ctx.beginPath();
     ctx.fillRect(xBall, yBall, size, size);
     ctx.stroke();
}

var left = false;
var right = true;



ballCollisionInterval = setInterval(seeCollision, 8);
function seeCollision() {
     //ez nezi, hogy az utohoz hozzaer-e
     if (xBall < size + 5 || xBall > canvWidth - size - 16) {
          if (yBall + 4 > yRight && yBall < yRight + pongHeight && right) {
               left = true;
               right = false;
               console.log("x: " + xBall);
               console.log("y: " + yBall);
               xBallChange *= -1;
          }
          else if (yBall + 4 > yLeft && yBall < yLeft + pongHeight && left) {
               left = false;
               right = true;
               console.log("x: " + xBall);
               console.log("y: " + yBall);
               xBallChange *= -1;

          }
     }
     if (xBall < size / 2) {
          console.log("vesztettel baloldal");
          clearInterval(ballCollisionInterval);
     }
     if (xBall > canvWidth - size) {
          console.log("vesztettel jobboldal");
          clearInterval(ballCollisionInterval);
     }
     if (yBall < 0 || yBall > canvHeight - size) {
          yBallChange *= -1;
     }
}

function drawStart() {
     var c = document.getElementById("pong");
     var ctx = c.getContext("2d");
     drawBall();
     ctx.beginPath();
     ctx.rect(xLeft, yLeft, 10, pongHeight);
     ctx.rect(xRight, yRight, 10, pongHeight);
     ctx.stroke();
     document.addEventListener("keydown", moveLeft);
     document.addEventListener("keydown", moveRight);
}
function moveLeft(event) {
     //lefele
     if (event.keyCode == "83") {
          if (first)
               ballMoveInterval = setInterval(ballmove, 8);
          first = false;
          var c = document.getElementById("pong");
          var ctx = c.getContext("2d");
          //ha az y-t levinned 10px-lel, h kilog-e
          if (yLeft + 2 + pongHeight < canvHeight)
               yLeft += 10;
          //cleareli az elejétől a feléig (x,y,törlés szélessége, magassága)
          ctx.clearRect(0, 0, 21, c.height);
          ctx.beginPath();
          //hol kezdodik, a teglalap szelessege, magassaga
          ctx.rect(xLeft, yLeft, 10, pongHeight);
          ctx.stroke();
     }
     //felfele
     if (event.keyCode == "87") {
          if (first)
               ballMoveInterval = setInterval(ballmove, 8);
          first = false;
          var c = document.getElementById("pong");
          var ctx = c.getContext("2d");
          //ha az y-t felvinned 10px-lel, h kilog-e
          if (yLeft > 0)
               yLeft -= 10;
          //cleareli az elejétől a feléig (x,y,törlés szélessége, magassága)
          ctx.clearRect(0, 0, 21, c.height);
          ctx.beginPath();
          //hol kezdodik, a teglalap szelessege, magassaga
          ctx.rect(xLeft, yLeft, 10, pongHeight);
          ctx.stroke();
     }
}
function moveRight(event) {
     //lefele
     if (event.keyCode == "40") {
          if (first)
               ballMoveInterval = setInterval(ballmove, 8);
          first = false;
          var c = document.getElementById("pong");
          var ctx = c.getContext("2d");
          //ha az y-t levinned 10px-lel, h kilog-e
          if (yRight + pongHeight < canvHeight)
               yRight += 10;
          //cleareli a width/2-től (második fele a canvas-nak) a végéig (x,y,törlés szélessége, magassága)
          ctx.clearRect(c.width - 21, 0, c.width / 2, c.height);
          ctx.beginPath();
          //hol kezdodik, a teglalap szelessege, magassaga
          ctx.rect(xRight, yRight, 10, pongHeight);
          ctx.stroke();
     }
     //felfele
     if (event.keyCode == "38") {
          if (first)
               ballMoveInterval = setInterval(ballmove, 8);
          first = false;
          var c = document.getElementById("pong");
          var ctx = c.getContext("2d");
          //ha az y-t felvinned 10px-lel, h kilog-e
          if (yRight > 0)
               yRight -= 10;
          //cleareli a width/2-től (második fele a canvas-nak) a végéig (x,y,törlés szélessége, magassága)
          ctx.clearRect(c.width - 21, 0, c.width / 2, c.height);
          ctx.beginPath();
          //hol kezdodik, a teglalap szelessege, magassaga
          ctx.rect(xRight, yRight, 10, pongHeight);
          ctx.stroke();
     }
}