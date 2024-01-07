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

function updateHourblocks (){
  currentHour = dayjs().hour()
  console.log(currentHour)

  // const plannerHour =$(".time-block")
  // console.log(plannerHour)
   const timeBlock =  $(".time-block")
  $(timeBlock).each(function(){

    let plannerHour = parseInt($(this).attr("id"))
    console.log(plannerHour)
  //  console.log(timeBlock)
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