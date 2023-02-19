var dayjs = dayjs();


$(function () {  
var currentDay = $("#currentDay");
var btn = $(".btn");
var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour13 = $("#hour-13");
var hour14 = $("#hour-14");
var hour15 = $("#hour-15");
var hour16 = $("#hour-16");
var hour17 = $("#hour-17");

  
  // event listener for click of save button captures text value and send it to local storage wit the id for the corresponding container.
  btn.on("click", function () {
    var timeBlock = $(this).parent().attr('id'); 
    var noteDescription = $(this).siblings('textarea').val()
   
    var newNote = {
      timeBlock: timeBlock,
      text: noteDescription
    }
 // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    var description= []; //  = readFromStorage()
    description.push(newNote)
    saveToStorage(description)
   
    
  });

   function saveToStorage(description) {
    localStorage.setItem("description", JSON.stringify(description))
  }
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  var outDestription = localStorage.getItem(description)
  
  console.log(description)
  
  
 
  
  console.log(dayjs.format("H"))

  // Adds code to display the current date in the header of the page.
  currentDay.text(dayjs.format("dddd, MMMM, D, YYYY"));
});
