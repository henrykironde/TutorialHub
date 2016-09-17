// JSTicTacToe.js
/*
 * The cells are numbered from 0 to 8 from top-left to bottom-right.
 */
window.onload = init;  // run init() after the page is loaded
 
const NUM_CELLS = 9;
 
// A pattern is a 9-bit number where bit x represents cell x.
const WINNING_PATTERNS
    = new Array(0007, 0070, 0700, 0444, 0222, 0111, 0421, 0124); // Octal
var crossPattern, noughtPattern;  // keep the plays so far
 
// "cross" is currently playing (boolean of true or false)
var crossPlaying;
 
// Initialize the game
function init() {
   resetGame();
   document.getElementById("btnNewGame").onclick = resetGame;
}
 
// Reset game by clearing all the cells and player's pattern
function resetGame() {
   crossPattern = 0;
   noughtPattern = 0;
   crossPlaying = true;
   for (var cellNum = 0; cellNum < NUM_CELLS; cellNum++) {
      var elm = document.getElementById("cell" + cellNum);
      elm.innerHTML = "&nbsp;";  // Clear content
      elm.className = "";        // Reset the class, used by CSS
      elm.onmousedown = play;    // Attach mouse click handler
   }
}
 
// Mouse-click handler
function play(evt) {
   var thisCell;
   if (evt) {  // non-IE
     thisCell = evt.target;
   } else {    // IE
     thisCell = window.event.srcElement;
   }
 
   // Place the seed on the cell clicked and update the player's pattern
   if (thisCell.innerHTML === "&nbsp;") {
      if (crossPlaying) {
         thisCell.innerHTML = "x";
         crossPattern |=  Math.pow(2, thisCell.id.charAt(4));
      } else {
         thisCell.innerHTML = "o";
         noughtPattern |=  Math.pow(2, thisCell.id.charAt(4));
      }
   }
   if (!checkWin()) {
      // Continue playing
      // Disable mouse click for this cell. This cell is no longer active
      thisCell.onmousedown = null;
      // toggling the current player
      crossPlaying = !crossPlaying;
   }
}
 
// Check if the current player wins the game
function checkWin() {
   var theWinningPattern = -1;
   var playerPattern;
   if (crossPlaying) {
      playerPattern = crossPattern;
   } else {
      playerPattern = noughtPattern;
   }
 
   // Check if playerPattern is one of the winning patterns
   for (var i = 0; i < WINNING_PATTERNS.length; i++) {
      if ((WINNING_PATTERNS[i] & playerPattern) === WINNING_PATTERNS[i]) {
         theWinningPattern = WINNING_PATTERNS[i];
         break;
      }
   }
 
   // Change the class name of the cells of the winning pattern
   // CSS class-selector displays them differently
   if (theWinningPattern > -1) {
      for (var cellNum = 0; cellNum < NUM_CELLS; cellNum++) {
         var elm = document.getElementById("cell" + cellNum);
         if (theWinningPattern & Math.pow(2, cellNum)) {
            elm.className = "winningCell";
         }
         elm.onmousedown = null;  // disable mouse click for all cells
      }
      return true;
   } else {
      return false;
   }
}