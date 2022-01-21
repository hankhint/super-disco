// set variable for current day and push to index.html

var today = new Date();


//var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//date code from https://phoenixnap.com/kb/how-to-get-the-current-date-and-time-javascript
var date =  today.toLocaleDateString();
//console.log(today);

//push var date to <p id="currentDay" class="lead"></p>
document.getElementById("currentDay").innerHTML = date;