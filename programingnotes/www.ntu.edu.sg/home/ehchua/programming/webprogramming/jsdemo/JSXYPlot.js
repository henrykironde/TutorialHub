// JSXYPlot.js
window.onload = init;
 
const SOURCE_IMAGE = "images/car_green.gif";
const SIZE = 50;  // width and height for the image
const MARGIN_LEFT = 15;  // left-margin for the container
const MARGIN_TOP  = 180; // top-margin for the container
// x, y coordinates of the items
const X_MIN = 0;
const Y_MIN = 0;
const X_MAX = 600;
const Y_MAX = 300;
const WIDTH = X_MAX - X_MIN + 1;
const HEIGHT = Y_MAX - Y_MIN + 1;
 
var numItems = 0;  // number of items created so far
 
// The onload handler. Initialize the bounds
function init() {
   var box = document.getElementById("box");
   box.style.top = MARGIN_TOP + "px";
   box.style.left = MARGIN_LEFT + "px";
   box.style.width = WIDTH + "px";
   box.style.height = HEIGHT + "px";
 
   document.getElementById("btnCreate").onclick = newItem;
   document.getElementById("btnUpdate").onclick = updateItem;
}
 
// Create a new item at x, y
function newItem() {
   // Need to parseInt as it will be added.
   var x = parseInt(document.getElementById("newX").value);
   var y = parseInt(document.getElementById("newY").value);
   var displayX = x + MARGIN_LEFT;
   var displayY = y + MARGIN_TOP;
   if ((x >= X_MIN) && (x <= X_MAX) && (y >= Y_MIN) && (y <= Y_MAX)) {
      numItems++;
      // Put up an <img> to represent the item
      var itemImg = "<img class='item' name='item' src='"
            + SOURCE_IMAGE + "' style='width:" + SIZE
            + "px; height:" + SIZE + "px; top:" + displayY
            + "px; left:" + displayX + "px' />";
 
      // Put up a <p> for the item description
      var itemDesc = "<p class='itemDesc' name='itemDesc' style='top:"
            + displayY + "px; left:" + displayX
            + "px'>" + numItems + "</p>";
 
      document.getElementById('allItems').innerHTML += itemImg + itemDesc;
      // add a form's select option
      document.getElementById('updateNo').innerHTML
            += "<option>" + numItems + "</option>";
   }
}
 
// Update the position of itemNo to x, y
function updateItem() {
   var x = parseInt(document.getElementById("updateX").value);
   var y = parseInt(document.getElementById("updateY").value);
   var itemNo = document.getElementById("updateNo").value - 1;
 
   var items = document.getElementsByName("item");
   var itemDescs = document.getElementsByName("itemDesc");
   if (itemNo < items.length
       && (x >= X_MIN) && (x <= X_MAX) && (y >= Y_MIN) && (y <= Y_MAX)) {
      items[itemNo].style.left = x + MARGIN_LEFT + "px";
      items[itemNo].style.top  = y + MARGIN_TOP + "px";
      itemDescs[itemNo].style.left = x + MARGIN_LEFT + "px";
      itemDescs[itemNo].style.top  = y + MARGIN_TOP + "px";
   }
}