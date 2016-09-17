// Place <script type="text/javascript" src="JSSnow.js"></script> in <head>
window.onload = init;

const NUMBER = 12;  // Number of items
const IMAGE_PATH = "images/"
//var SOURCE_IMAGES = [
//   "snow1.gif", "snow2.gif", "snow3.gif", "snow4.gif"];
const SOURCE_IMAGES = [
   "leaf_green.gif", "leaf_orange_green.gif", "leaf_red.gif",
   "leaf_yellow_green.gif", "leaf_rotten.gif"];

// Each image has it own property, kept in an array
var xPos       = new Array();  // x position for the images
var yPos       = new Array();  // y position for the images
var size       = new Array();  // size (square) of the images
var xStep      = new Array();  // x displacement per time step
var yStep      = new Array();  // y displacement per time step
var xSineMag   = new Array();  // Magnitude of x sine variations
var xStepAccum = new Array();  // Accumulated sum of x displacement

// Screen width and height (browser dependent!)
var xMin = document.documentElement.scrollLeft + 20;
var xMax = document.documentElement.scrollLeft 
       + document.documentElement.clientWidth - 20;
var yMin = document.documentElement.scrollTop + 30
var yMax = document.documentElement.scrollTop 
       + document.documentElement.clientHeight - 30;

// Initialize the images and arrays
function init() {
   for (var i = 0; i < NUMBER; i++) {
      initItem(i);

      // Absolutely position the images using CSS style
      // <div> tags shall be under the <body>
      var imgElm = document.createElement("img");
      document.body.appendChild(imgElm);
      imgElm.clasName = "images";
      imgElm.name = "images";
      imgElm.src = IMAGE_PATH + SOURCE_IMAGES[i % SOURCE_IMAGES.length];
      imgElm.style.position = "absolute";
      imgElm.style.width = size[i] + "px";
      imgElm.style.height = size[i] + "px";
   }
   moveOneStep();
}

// Initialize the falling item given the itemIndex of the array
function initItem(itemIndex) {
   xStepAccum[itemIndex] = 0;
   xSineMag[itemIndex] = 20 + Math.random() * 40;  // 20 to 60
   // Slight variations in size and speed
   size[itemIndex]  = 25 + Math.random() * 5;    // 5 to 30
   xStep[itemIndex] = (Math.random() - 0.5) / 5; // -0.1 to 0.1
   yStep[itemIndex] = 1 + Math.random();         // 1 to 2
   // Initially place the images randomly within the screen
   xPos[itemIndex] = Math.random() * (xMax - xMin - size[itemIndex]*4) 
                     + size[itemIndex] + xMin;
   yPos[itemIndex] = Math.random() * (yMax - yMin - size[itemIndex]*4) 
                     + size[itemIndex] + yMin;
}

function moveOneStep() {
   xMin = document.documentElement.scrollLeft + 20;
   xMax = document.documentElement.scrollLeft 
       + document.documentElement.clientWidth - 20;
   yMin = document.documentElement.scrollTop + 30
   yMax = document.documentElement.scrollTop 
       + document.documentElement.clientHeight - 30;
   var images = document.getElementsByName("images");
   for (var i = 0; i < NUMBER; ++ i) {  // Go thru each image
      // update y position
      yPos[i] += yStep[i];
      // Check if the image falls outside the screen
      if (yPos[i] > yMax) {
         // Reposition the image and change its speed
         initItem(i);
         yPos[i] = 0;
      }

      // update x position - in sine curve, with some randomness.
      xStepAccum[i] += xStep[i];
      var xNew = xPos[i] + Math.random()*0.3 + xSineMag[i]*Math.sin(xStepAccum[i]);
      if (xNew > xMax) {
         xNew = xMax;
      }
      
      // Set the absolute position of the image
      images[i].style.top  = yPos[i] + "px";
      images[i].style.left = xNew + "px";
   }
   setTimeout("moveOneStep()", 100);
}
