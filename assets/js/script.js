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

    //document.getElementById("currentDay").innerHTML = date;
    document.getElementById("nineAM").innerHTML = nineAM;
    document.getElementById("tenAM").innerHTML = tenAM;
    document.getElementById("elevenAM").innerHTML = elevenAM;
    document.getElementById("noon").innerHTML = noon;
    document.getElementById("onePM").innerHTML = onePM;
    document.getElementById("twoPM").innerHTML = twoPM;
    document.getElementById("threePM").innerHTML = threePM;
    document.getElementById("fourPM").innerHTML = fourPM;
    document.getElementById("fivePM").innerHTML = fivePM;
  }
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
    console.log("element is", element);
    //add 'task' to the element name to get the name of the element to get textarea ID name
    var taskTextEl = element + "task";
    console.log("taskTextEl is", taskTextEl);

    //TODO: get text from input element
    var taskText = document.getElementById(taskTextEl).innerHTML;
    console.log("taskText is", taskText);

    //TODO: set appropriate part of tasks object with the submitted task
    //var settingTaskArray = "tasks." + element;
    //  console.log(settingTaskArray);

    tasks[element] = taskText;

    console.log(tasks[element]);
    console.log(tasks);
    //TODO: save text to local storage
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
