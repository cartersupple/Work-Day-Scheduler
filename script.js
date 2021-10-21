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

getHeaderDate();


