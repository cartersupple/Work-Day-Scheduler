// ensures page is in a state to be manipulated
$(function() {
    console.log('ready');
});
// created variables to store task data

var theDay = [
    {
        id:"0",
        hour: "09",
        time:"09",
        task:"",
        amOrPm:"am"
    },
    {
        id:"1",
        hour: "10",
        time:"10",
        task:"",
        amOrPm:"am"
    },
    {
        id:"2",
        hour: "11",
        time:"11",
        task:"",
        amOrPm:"am"
    },
    {
        id:"3",
        hour: "12",
        time:"12",
        task:"",
        amOrPm:"pm"
    },
    {
        id:"4",
        hour: "01",
        time:"13",
        task:"",
        amOrPm:"pm"
    },
    {
        id:"5",
        hour: "02",
        time:"14",
        task:"",
        amOrPm:"pm"
    },
    {
        id:"6",
        hour: "03",
        time:"14",
        task:"",
        amOrPm:"pm"
    },
    {
        id:"7",
        hour: "04",
        time:"15",
        task:"",
        amOrPm:"pm"
    },
    {
        id:"8",
        hour: "05",
        time:"16",
        task:"",
        amOrPm:"pm"
    },
]



// gets data for an updating date
function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do, YYYY');
    $("#currentDay").text(currentHeaderDate);
}

// saves data to localStorage
function saveTasks () {
    localStorage.setItem("myDay", JSON.stringify(theDay));
}

// displays tasks from localStorage
function displayTasks() {
    theDay.forEach(function (_thisHour) {
        $(`#{_thisHour.id}`).val(_thisHour.reminder);
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
getHeaderDate();

//styles the container of hours and tasks
theDay.forEach(function(thisHour) {
    var timeRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(timeRow);

    var timeCol = $("<div>")
    .text(`${thisHour.hour}${thisHour.amOrPm}`)
    .attr9({
        "class": "col-md hour"
    });
// creates the data that will hold the tasks and compares time through moment
    var hourTask = $("<div>")
    .attr({
        "class": "col-md-9 description p-0"
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





}
)