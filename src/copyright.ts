/* 
const year = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear; 
*/

const year: HTMLSpanElement = document.getElementById(
  "year"
) as HTMLSpanElement; // we know that this element is present in the document
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
