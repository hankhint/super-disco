/*pseudocode

open page

load current date

initialize variable for tasks

check local storage for saved tasks
load saved tasks, if Any

for each timeslot, color code according to past present future
if timeslot is in past set the container to pink
if timeslot is present set container to red
if timeslot is in the future set container to blue

text input for each timeslot containter, save task text to local storage when click the save button

link save logic to save buttonws

END pseudocode*/

//initializing variable that stores tasks in local storage

var tasks = {};
// set variable for current day and push to index.html
var today = new Date();

//START LOGIC TO DISPLAY CURRENT DATE
//var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//date code from https://phoenixnap.com/kb/how-to-get-the-current-date-and-time-javascript
var date = today.toLocaleDateString();

//push var date to <p id="currentDay" class="lead"></p>
document.getElementById("currentDay").innerHTML = date;
//END LOGIC TO DISPLAY CURRENT DATE



//TODO: slim this down for this assignment 
var loadTasks = function () {
  tasks = JSON.parse(localStorage.getItem("tasks"));

  // if nothing in localStorage, create a new object to track all task status arrays
  if (!tasks) {
    tasks = {
/*       toDo: [],
      inProgress: [],
      inReview: [],
      done: [], */
      nineAM: "",
      tenAM: "",
      elevenAM: "",
      noon: "",
      onePM: "",
      twoPM: "",
      threePM: "",
      fourPM: "",
      fivePM: "",

    };
  }

//   for (const property in object) {
//     console.log(`${property}: ${object[property]}`);
//   }

  // loop over object properties
//   $.each(tasks, function (list, arr) {
//     // then loop over sub-array
//     arr.forEach(function (task) {

//         //TODO: arrange this for this assignment
//       createTask(task.text, task.date, list);
//     });
// //TODO
// $.each(tasks, function())
//   });
};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  saveTasks("thing");
var auditTask = function(taskEl) {
  // get date from task element
  var date = $(taskEl)
    .find("span")
    .text()
    .trim();

  // convert to moment object at 5:00pm
  var time = moment(date, "L").set("hour", 17);

  // remove any old classes from element
  $(taskEl).removeClass("list-group-item-warning list-group-item-danger");

  // apply new class if task is near/over due date
  if (moment().isAfter(time)) {
    $(taskEl).addClass("list-group-item-danger");
  } else if (Math.abs(moment().diff(time, "days")) <= 2) {
    $(taskEl).addClass("list-group-item-warning");
  }
};

 

//TO DO: audit to make sure this works
// load tasks for the first time
loadTasks();

//TO DO: update for this assignment
// audit task due dates every 30 minutes
setInterval(function () {
  $(".card .list-group-item").each(function () {
    auditTask($(this));
  });
  //
}, 1800000);
