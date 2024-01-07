# Chrisma-Workday-Planner
## About the Project

This is a one day event planner that can be used to create and save events for scheduling, planning and organising a working day from 9 am to 5pm.

Upon loading the page, the day and time will automatically update to the current UTC time. This has been made possible through jquery and dayjs.

The user can view a colour-coded planner ( grey for past time, red for current time and green for future time), that can used populate the planner with events. The user will need to click on the save button at the end of eah time block to then be able to see the event. 

The save button takes on a event-listener powered by jquery to store the user's event input to the local storage. This cretaes the ability to retrieve the data back on to the page and enables viewing of the event until when the storage is cleared.

The page also has a clear events button as an extra feature, which carries an event listener. Upon clicking, the lcoal storage and the events page is cleared and the page reloads.


## Built with

This repository has been built using 

-HTML
-CSS 
-Javascript
-jQuery
-Git 
-Github 
-Browser APIs 
-dayjs

## Resources:
-https://day.js.org/
-https://www.w3schools.com/jsref/met_win_setinterval.asp
-https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
-https://api.jquery.com/category/events/
-https://www.w3schools.com/jquery/jquery_events.asp
-https://developer.mozilla.org/en-US/docs/Web/API/Location/reload




### Installation

This webpage can be rendered by visiting the url : https://chrisma89.github.io/Chrisma-Workday-Planner/
The code can be viewed at github: https://github.com/chrisma89/Chrisma-Workday-Planner

### Usage


The screenshot of the webpage is below : ![webpagescreenshot](./assets/images/webpage%20screenshot.png)

### Credits
- Thank you to the curriculum team behind bootcampspot for the starter files
- Thank you to the TA,Mr Chris Kratz, for the pseudocode


### Licence
The standard MIT Licence is in use for this repository.

