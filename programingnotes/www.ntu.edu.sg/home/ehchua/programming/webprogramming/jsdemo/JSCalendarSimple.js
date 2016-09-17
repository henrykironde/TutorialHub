// JSCalendarSimple.js
window.onload = init;
 
// Global variables
// Today's year, month(0-11) and day(1-31)
var thisYear, thisMonth, thisDay;
 
// The "onload" handler, run after the page is fully loaded.
function init() {
   setToday();
 
   document.getElementById("selMonth").onchange = setMonth;
   document.getElementById("tfYear").onchange   = setYear;
 
   document.getElementById("btnPrevYear").onclick  = setPreviousYear;
   document.getElementById("btnPrevMonth").onclick = setPreviousMonth;
   document.getElementById("btnNextMonth").onclick = setNextMonth;
   document.getElementById("btnNextYear").onclick  = setNextYear;
   document.getElementById("btnToday").onclick     = setToday;
 
   document.getElementById("frmCalendar").onsubmit = function() {
      return false; // Stay in current page, do not refresh.
   }
}
 
// Set thisYear, thisMonth, thisDay to Today
// So that we can highlight today on the calendar
function setToday() {
   var now   = new Date();         // today
   thisDay   = now.getDate();      // 1-31
   thisMonth = now.getMonth();     // 0-11
   thisYear  = now.getFullYear();  // 4-digit year
 
   document.getElementById("selMonth").selectedIndex = thisMonth;
   document.getElementById("tfYear").value = thisYear;
   printCalendar(thisYear, thisMonth);
}
 
// Print the month-calendar for the given 4-digit year and month (0-11)
function printCalendar(year, month) {
   var daysInMonth = getDaysInMonth(year, month + 1);  // number of days
   var firstDayOfMonth = (new Date(year, month, 1)).getDay();  // 0-6 for Sun to Sat
 
   var tableInnerHTML = "<tr><th class='sunday'>Sun</th><th>Mon</th><th>Tue</th>"
        + "<th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";
 
   var tdCellCount = 0;  // count of table's <td> cells
   if (firstDayOfMonth !== 0) {  // Leave these cells blank
      tableInnerHTML += "<tr><td colspan='" + firstDayOfMonth + "'></td>";
      tdCellCount = firstDayOfMonth;
   }
   for (var day = 1; day <= daysInMonth; day++) {
      if (tdCellCount % 7 === 0) {  // new table row
         tableInnerHTML += "<tr>";
      }
 
      // Use different style classes for today, sunday and other days
      if ((day === thisDay) && (month === thisMonth) && (year === thisYear)) {
         tableInnerHTML += "<td class='today'>" + day + "</td>";
      } else if (tdCellCount % 7 === 0) {
         tableInnerHTML += "<td class='sunday'>" + day + "</td>";
      } else {
         tableInnerHTML += "<td>" + day + "</td>";
      }
 
      tdCellCount++;
      if (tdCellCount % 7 === 0) {
         tableInnerHTML += "</tr>";
      }
   }
   // print the remaining cells and close the row
   var remainingCells = 7 - tdCellCount % 7;
   if (remainingCells < 7) {
      tableInnerHTML += "<td colspan='" + remainingCells + "'></td></tr>";
   }
 
   document.getElementById("tableCalendar").innerHTML = tableInnerHTML;
}
 
// The onchange handler for the month selection
function setMonth() {
   var year  = document.getElementById("tfYear").value;
   var month = document.getElementById("selMonth").selectedIndex;
   printCalendar(year, month);
}
 
// The onchange handler for the year textfield
function setYear() {
   var year  = document.getElementById("tfYear").value;
   var month = document.getElementById("selMonth").selectedIndex;
   if (isValidYear(year)) {
      printCalendar(year, month);
   }
}
 
// Validate the year
function isValidYear(year) {
   if (year < 1 || year > 9999) {
      alert ("Sorry, the year must be between 1 and 9999.");
      document.getElementById("tfYear").focus();
      return false;
   } else {
      return true;
   }
}
 
// The onclick handler for the previous-year button
function setPreviousYear() {
   var year  = document.getElementById("tfYear").value;
   var month = document.getElementById("selMonth").selectedIndex;
   year--;
   if (isValidYear(year)) {
      document.getElementById("tfYear").value = year;
      printCalendar(year, month);
   }
}
 
// The onclick handler for the next-year button
function setNextYear() {
   var year  = document.getElementById("tfYear").value;
   var month = document.getElementById("selMonth").selectedIndex;
   year++;
   if (isValidYear(year)) {
      document.getElementById("tfYear").value = year;
      printCalendar(year, month);
   }
}
 
// The onclick handler for the previous-month button
function setPreviousMonth() {
   var year  = document.getElementById("tfYear").value;
   var month = document.getElementById("selMonth").selectedIndex;
   if (month === 0) {
      month = 11;
      year--;
   } else {
      month--;
   }
   if (isValidYear(year)) {
      document.getElementById("tfYear").value = year;
      document.getElementById("selMonth").selectedIndex = month;
      printCalendar(year, month);
   }
}
 
// The onclick handler for the next-year button
function setNextMonth() {
   var year  = document.getElementById("tfYear").value;
   var month = document.getElementById("selMonth").selectedIndex;
   if (month === 11) {
      month = 0;
      year++;
   } else {
      month++;
   }
   if (isValidYear(year)) {
      document.getElementById("tfYear").value = year;
      document.getElementById("selMonth").selectedIndex = month;
      printCalendar(year, month);
   }
}