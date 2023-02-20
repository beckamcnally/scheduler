var dayjs = dayjs();


$(function () {  
var currentDay = $("#currentDay");
var btn = $(".btn");
var timeBlock = $('.time-block')
  
  // event listener for click of save button captures text value and send it to local storage wit the id for the corresponding container.
  btn.on("click", function () {
    var cureentTimeBlock = $(this).parent().attr('id'); 
    var noteDescription = $(this).siblings('textarea').val()
   
    var newNote = {
      cureentTimeBlock: cureentTimeBlock,
      text: noteDescription
    }
 // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?



    var description= readFromStorage()
    description.push(newNote)
    saveToStorage(description)
   
    return description;
  });

  function readFromStorage() {
    var description = localStorage.getItem('description')
    console.log(description)
    if (description) {
      description = JSON.parse(description);
    } else {
      description = [];
    }
    return description;
  }

   function saveToStorage(description) {
    localStorage.setItem("description", JSON.stringify(description))
    
  }
 
  // displays past present and future
  var currentHour = dayjs.format("H")
  


  for (var i = 0; i < timeBlock.length; i++) {
    var element = timeBlock[i];
    var elementHour = element.id
    elementHour = Number(elementHour)
    
    if (elementHour == currentHour) {
      $(element).removeClass('past future').addClass('present')
    } else if (currentHour < elementHour) {
      $(element).removeClass('future present').addClass('past')
    } else {
      $(element).removeClass('present past').addClass('future')
    }

   }

  // Adds code to display the current date in the header of the page.
  currentDay.text(dayjs.format("dddd, MMMM, D, YYYY"));
});
