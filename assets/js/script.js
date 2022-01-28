/*pseudocode

open page

O load current date

O initialize variable for tasks

O check local storage for saved tasks
O load saved tasks, if Any

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
    saveTasks();
  };
};
//END LOGIC FOR LOADING TASKS

//START FUNCTION TO PUSH TO LOCAL STORAGE
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
 // this sucessfully pushes to local storage:  
 //gitsaveTasks("thing");
 //END FUNCTION TO PUSH TO LOCAL STORAGE


 // START LOGIC FOR CLICK TO EDIT TASK FIELDS
// $( "button" ).click(function() {
//   console.log( "You clicked a paragraph!" );

// });

$( document ).ready(function(){
 
  // Sets up click behavior on all button elements with the alert class
  // that exist in the DOM when the instruction was executed
  $( "button.savebutton" ).on( "click", function() {
      console.log( "A button with the savebutton class was clicked!" );
      var element = $( this ).attr("id");
      var taskTextEl = '"' + element + "task" + '"';
      var taskText = $( this ).attr( taskTextEl );
      console.log(taskText);
      console.log(taskTextEl);
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
