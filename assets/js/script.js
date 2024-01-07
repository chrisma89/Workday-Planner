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
  const currentHour = parseInt (dayjs().hour())
  console.log(currentHour)

  
   const timeBlock =  $(".time-block")
  timeBlock.each(function(){

    let plannerHour = parseInt($(this).attr("id"))
    console.log(plannerHour)
 
    
    if (plannerHour === currentHour){
      $(this).addClass("present")
      $(this).removeClass("future past")
    }
    else if ( plannerHour < currentHour){
      $(this).addClass("past")
      $(this).removeClass("future present")

    }
    else if(plannerHour > currentHour){
      $(this).addClass("future")
      $(this).removeClass("past present")
    
    }
  })}

  updateHourblocks()
setInterval(updateHourblocks, 3600000)


// update time-blocks every hour
// setInterval(updateHourblocks, 15000)

// Allow a user to enter an event when they click a time block
const saveButton = $(".btn")

saveButton.on("click", function(event){
  event.preventDefault()
  saveUserEvent()
})

// function saveUserEvent () {

  
//   let UserInput = $(".description").val()
//   let id= $("#user-input")
//   // console.log(UserInput)
//   localStorage.setItem("user-input", UserInput[i])

  

//   // let savedInput = localStorage.getItem("user-input")
//   // UserInput.textContent = savedInput
//   }
  // retrieveData()
function saveUserEvent (){
$(".description").each(function(i){
  let userId = "user-input-" +i
let UserInput = $(this).val()})
localStorage.setItem(userId, UserInput)
}



// function retrieveData (UserInput){
//   let savedInput = localStorage.getItem(UserInput)

//   if(UserInput) {
//     UserInput.text(savedInput)
//   }
  
// }
// $(function(){
//   retrieveData()
// })


