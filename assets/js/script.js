// Current Date display
const currentDay = $("#currentDay");
currentDay.text(dayjs().format("dddd, MMMM D, YYYY"))

function displayTime(){
   const currentTime = $("#currentTime")
   currentTime.text((dayjs().format("h:mm:ss A")))
}

displayTime()

// update clock every second
setInterval (displayTime, 1000)

console.log("ding")