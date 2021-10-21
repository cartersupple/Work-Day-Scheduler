// ensures page is in a state to be manipulated
$(function() {
    console.log('ready');
});
// gets data for an updating date
function getHeaderDate() {
    var currentHeaderDate = moment().format('MMMM, dddd Do');
    $("#currentDay").text(currentHeaderDate);
}

// saves data to localStorage
function saveTasks () {
    localStorage.setItem("myDay", JSON.stringify(myDay));
}

// displays tasks from localStorage
function displayTasks() {
    myDay.forEach(function (_thisHour) {
        $(`#{_thisHour.id}`).val(_thisHour.reminder);
    })
}

// displays existing tasks from localStorage if they exist 

function init() {
    var daysTasks = JSON.parse(localStorage.getItem("myDay"));
    if(daysTasks) {
        myDay = daysTasks;
    }
    saveTasks();
    displayTasks();
}
// adds header date
getHeaderDate();

// created variables to store task data
var myDay = [
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
