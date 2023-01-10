// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
    // document.ready makes sure the javascript doesn't load before the html page $(document).ready(function () {
var currentDay = $('#currentDay')
var dayjs = dayjs()
var btn = $('.btn')
var hour9 = $('#hour-9')
var hour10 = $('#hour-10')
var hour11 = $('#hour-11')
var hour12 = $('#hour-12')
var hour13 = $('#hour-13')
var hour14 = $('#hour-14')
var hour15 = $('#hour-15')
var hour16 = $('#hour-16')
var hour17 = $('#hour-17')

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
        // could write out a bunch of ifs saying that if hourx clicked then save input... or make an array of the ids and a for loop with an if statement
    // local storage. HINT: What does `this` reference in the click listener
        // 'this' is the button I think even if I get rid of the event parameter
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
        

    btn.on('click', function( event ) {
        var btnClicked = event.target; // very specific will be the icon or the button
        

        // adds an id and colects the value of the textarea
        $(this).closest('div').attr('id', 'clicked')
        var hourClickedInfo = console.log($('#clicked').children().eq(1).val())


      

        
        // hourInfo = btnClicked.description.val()
        // console.log(hourInfo)

    
        // localStorage.setItem(btnClicked, hourInfo )
    
     })   
    
 
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //


    // TODO: Add code to display the current date in the header of the page.
    currentDay.text(dayjs.format("dddd, MMMM, D, YYYY"))
  });
  