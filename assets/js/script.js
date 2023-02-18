var dayjs = dayjs();


$(function () {  //! check to make sure same as document ready
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


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //? could write out a bunch of ifs saying that if hourx clicked then save input... or make an array of the ids and a for loop with an if statement
  btn.on("click", function () {
    var timeBlock = $(this).parent().attr('id'); //? goign to be the key
    var noteDescription = $(this).siblings('textarea').val()
console.log(timeBlock, noteDescription)
localStorage.setItem(timeBlock, noteDescription)

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    // var hourClickedInfo = btnClicked.closest("div"); 
    // console.log(hourClickedInfo);
    // //? so now that I have the id of the parent container I need to get down into the textarea
    // var hourText = hourClickedInfo.children;
    // console.log(hourText);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?



  // TODO: Add code to display the current date in the header of the page.
  currentDay.text(dayjs.format("dddd, MMMM, D, YYYY"));
});
