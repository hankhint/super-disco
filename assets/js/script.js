/*pseudocode

open page

O load current date

O initialize variable for tasks

check local storage for saved tasks
load saved tasks, if Any

for each timeslot, color code according to past present future
if timeslot is in past set the container to pink
if timeslot is present set container to red
if timeslot is in the future set container to blue

text input for each timeslot containter, save task text to local storage when click the save button

link save logic to save buttonws

END pseudocode*/
//------------------------------


//initializing variable that stores tasks in local storage
var tasks = {};



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
    saveTasks(tasks);
  };
};
//END LOGIC FOR LOADING TASKS

//START FUNCTION TO PUSH TO LOCAL STORAGE
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
 // this sucessfully pushes to local storage:  saveTasks("thing");
 //END FUNCTION TO PUSH TO LOCAL STORAGE



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
