/*pseudocode

open page

O load current date

O initialize variable for tasks

O check local storage for saved tasks
O load saved tasks, if Any
O push tasks to html



for each timeslot, color code according to past present future
if timeslot is in past set the container to pink
if timeslot is present set container to red
if timeslot is in the future set container to blue

text input for each timeslot containter, save task text to local storage when click the save button

link save logic to save buttonws

END pseudocode*/
//------------------------------
var tasks = {};
//initializing variable that stores tasks in local storage
//TODO: does it exist in local storage
// if (!tasks) {
 // var tasks = {
    // nineAM: "write your task here",
    // tenAM: "write your task here",
    // elevenAM: "write your task here",
    // noon: "write your task here",
    // onePM: "write your task here",
    // twoPM: "write your task here",
    // threePM: "write your task here",
    // fourPM: "write your task here",
    // fivePM: "write your task here",
//   };
// }

//START LOGIC TO DISPLAY CURRENT DATE
// set variable for current day and push to index.html
var today = new Date();
//var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//date code from https://phoenixnap.com/kb/how-to-get-the-current-date-and-time-javascript
var date = today.toLocaleDateString();
//push var date to <p id="currentDay" class="lead"></p>
document.getElementById("currentDay").innerHTML = date;
//END LOGIC TO DISPLAY CURRENT DATE

//START LOGIC FOR LOADING TASKS
var loadTasks = function () {
  //get tasks object from local storage
  tasks = JSON.parse(localStorage.getItem("tasks"));

  // if nothing in localStorage, create a new object to track all task status arrays
  if (!tasks) {
    //create a new object to track all task status arrays
    tasks = {
      nineAM: "write your task here",
      tenAM: "write your task here",
      elevenAM: "write your task here",
      noon: "write your task here",
      onePM: "write your task here",
      twoPM: "write your task here",
      threePM: "write your task here",
      fourPM: "write your task here",
      fivePM: "write your task here",
    };
  }

  //document.getElementById("currentDay").innerHTML = date;
  document.getElementById("nineAMtask").innerHTML = tasks.nineAM;
  document.getElementById("tenAMtask").innerHTML = tasks.tenAM;
  document.getElementById("elevenAMtask").innerHTML = tasks.elevenAM;
  document.getElementById("noontask").innerHTML = tasks.noon;
  document.getElementById("onePMtask").innerHTML = tasks.onePM;
  document.getElementById("twoPMtask").innerHTML = tasks.twoPM;
  document.getElementById("threePMtask").innerHTML = tasks.threePM;
  document.getElementById("fourPMtask").innerHTML = tasks.fourPM;
  document.getElementById("fivePMtask").innerHTML = tasks.fivePM;
};
//END LOGIC FOR LOADING TASKS

//START FUNCTION TO PUSH TO LOCAL STORAGE
var saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
//END FUNCTION TO PUSH TO LOCAL STORAGE

// START LOGIC FOR CLICK TO EDIT TASK FIELDS

$(document).ready(function () {
  // Sets up click behavior on all button elements with the savebutton class
  // that exist in the DOM when the instruction was executed

  $("button.savebutton").on("click", function () {
    //get id of element that created the click
    var element = $(this).attr("id");
    //add 'task' to the element name to get the name of the element to get textarea ID name
    var taskTextEl = element + "task";

    //get text from input element
    var taskText = document.getElementById(taskTextEl).innerHTML;
    console.log("this is the task text", taskText);
    //set appropriate part of tasks object with the submitted task

    tasks[element] = taskText;

    //TODO: save text to local storage
    saveTasks();
  });
});
//END LOGIC FOR CLICK TO EDIT TASK FIELDS

// load tasks for the first time on page load
loadTasks();

//TO DO: update for this assignment
// audit task due dates every 30 minutes
setInterval(function () {
  $(".card .list-group-item").each(function () {
    auditTask($(this));
  });
  //
}, 1800000);
