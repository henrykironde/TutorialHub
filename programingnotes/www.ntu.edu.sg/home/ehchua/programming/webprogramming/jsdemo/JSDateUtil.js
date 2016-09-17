// DateUtil.js
// Return true if the given year is a leap year
function isLeapYear(year) {
   return ((year % 4) === 0 && ((year % 100) !== 0 || (year % 400) === 0));
}
 
// Return the number of days in the given month (1-12) of the year (xxxx)
function getDaysInMonth(year, month) {
   if (month === 2) {
      if (isLeapYear(year)) {
         return 29;
      } else {
         return 28;
      }
   } else if ((month === 1) || (month === 3) || (month === 5) || (month === 7)
       || (month === 8) || (month === 10) || (month === 12)) {
      return 31;
   } else {
      return 30;
   }
}
 
// Get the day of the week given year, month (1-12) and day (1-31)
function getDayInWeek(year, month, day) {
  var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday",
                  "Thursday", "Friday", "Saturday"];
  var theDate = new Date(year, month-1, day);
  return weekdays[theDate.getDay()];
}