// ensures page is in a state to be manipulated
$(function() {
    console.log('ready');
});
// created variables to store task data

var theDay = [
    {
        id:"0",
        hour: "9:00 ",
        time:"09",
        task:"",
        amOrPm:"am"
    },
    {
        id:"1",
        hour: "10:00 ",
        time:"10",
        task:"",
        amOrPm:"am"
    },
    {
        id:"2",
        hour: "11:00 ",
        time:"11",
        task:"",
        amOrPm:"am"
    },
    {
        id:"3",
        hour: "12:00 ",
        time:"12",
        task:"",
        amOrPm:"pm"
    },
    {
        id:"4",
        hour: "1:00 ",
        time:"13",
        task:"",
        amOrPm:"pm"
    },
    {
        id:"5",
        hour: "2:00 ",
        time:"14",
        task:"",
        amOrPm:"pm"
    },
    {
        id:"6",
        hour: "3:00 ",
        time:"14",
        task:"",
        amOrPm:"pm"
    },
    {
        id:"7",
        hour: "4:00 ",
        time:"15",
        task:"",
        amOrPm:"pm"
    },
    {
        id:"8",
        hour: "5:00 ",
        time:"16",
        task:"",
        amOrPm:"pm"
    },
]



// gets data for an updating date
function headerDate() {
    var currentDate = moment().format('dddd, MMMM Do, YYYY');
    $("#currentDay").text(currentDate);
}

// saves data to localStorage
function saveTasks () {
    localStorage.setItem("myDay", JSON.stringify(theDay));
}

// displays tasks from localStorage
function displayTasks() {
    theDay.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}

// displays existing tasks from localStorage if they exist 

function init() {
    var daysTasks = JSON.parse(localStorage.getItem("myDay"));
    if(daysTasks) {
        theDay = daysTasks;
    }
    saveTasks();
    displayTasks();
}
// adds header date
headerDate();

//styles the container of hours and tasks
theDay.forEach(function(thisHour) {
    var timeRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(timeRow);

    var timeCol = $("<div>")
    .text(`${thisHour.hour}${thisHour.amOrPm}`)
    .attr({
        "class": "col-md-3 hour"
    });
// creates what will hold the tasks and compares time through moment
    var hourTask = $("<div>")
    .attr({
        "class": "col-md description p-0"
    });
    var taskData = $("<textarea>");
    hourTask.append(taskData);
    taskData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        taskData.attr ({
            "class":"past",
        })
    } else if (thisHour.time === moment().format("HH")) {
        taskData.attr({
            "class":"present"
        })
    } else if (thisHour.time > moment().format("HH")) {
        taskData.attr({
            "class":"future"
        })
    }
//make a save button to tell local storage to keep info after refresh
var saveButton = $("<i class='far fa-save fa-lg'></i>")
var saveTask = $("<button>")
    .attr({
        "class": "col-md-1 saveBtn"
    });
    saveTask.append(saveButton);
    timeRow.append(timeCol,hourTask, saveTask);
}
)
// loads localStorage data into hour fields after they are created
init();

// saves the data to be used by the localStorage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveLocal = $(this).siblings(".description").children(".future").attr("id");
    theDay[saveLocal].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveLocal);
    saveTasks();
    displayTasks();
})

//Script page! Controls the functionality of the Scheduler!