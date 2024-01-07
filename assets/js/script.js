// Current Date display at the top of the calender when a user opens the planner.
const currentDay = $("#currentDay");
currentDay.text(dayjs().format("dddd, MMMM D, YYYY"))

function displayTime(){
   const currentTime = $("#currentTime")
   currentTime.text((dayjs().format("h:mm:ss A")))
}

displayTime()

// update clock every second
setInterval (displayTime, 1000)

// Color-coded time block based on past, present, and future 
function updateHourblocks (){
  const currentHour = dayjs().hour()
  console.log(currentHour)

  
   const timeBlock =  $(".time-block")
  timeBlock.each(function(){

    let plannerHour = parseInt($(this).attr("id"))
    console.log(plannerHour)
 
    if (plannerHour < currentHour){
      $(this).addClass("past")
      $(this).removeClass("present future")
    
    }
    else if (plannerHour === currentHour){
      $(this).addClass("present")
      $(this).removeClass("future past")
    }
    else if ( plannerHour > currentHour){
      $(this).addClass("future")
      $(this).removeClass("past present")

    }
  })}

updateHourblocks()


// update time-blocks every hour
// setInterval(updateHourblocks, 15000)

// Allow a user to enter an event when they click a time block
