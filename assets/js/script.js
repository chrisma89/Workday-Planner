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
  const timeBlock =  $(".time-block")
    
    timeBlock.each(function(){
    let plannerHour = parseInt($(this).attr("id"))
    
    if (plannerHour === currentHour)
    {
      $(this).addClass("present")
      $(this).removeClass("future past")
    }
    else if ( plannerHour < currentHour)
    {
      $(this).addClass("past")
      $(this).removeClass("future present")
    }
    else if(plannerHour > currentHour)
    {
      $(this).addClass("future")
      $(this).removeClass("past present")
    }
  }
  )
}

// call function upon loading of page
updateHourblocks()



// update time-blocks every hour
setInterval(updateHourblocks, 3600000)


// Allow a user to enter an event when they click a time block

const saveButton = $(".btn")

saveButton.on("click", function(event){
  event.preventDefault()
  
    // iterate over each time block and store key and value in local storage
    $(".time-block").each( function(){
      let key = parseInt($(this).attr("id"))
      let description = $(this).find(".description").val()
     localStorage.setItem(key , description)
     }) 
    });


// retrieve stored data onto the planner
function retrieveData(){
  
  // iterate over each time block to retrieve each block's saved user event
  $(".time-block").each(function(){
    let key = parseInt($(this).attr("id"))
    let description = localStorage.getItem(key)
    if (description){
      $(this).find(".description").val(description)
    }
  }
)}

// call function to retrieve data 
retrieveData()


// function to clear local storage and events on page

$(".clearbtn").on("click" , function(){
  localStorage.clear();
  $(".time-block").each(function(){
    $(this).children().eq(1).text("")
  })
  location.reload()
})




