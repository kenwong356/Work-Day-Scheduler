$(function () {
  // Add a listener for click events on the save button.
  $(".saveBtn").on("click", function () {
    // Get the ID of the parent time-block for this button.
    var timeBlockId = $(this).parent().attr("id");

    // Get the user input from the textarea inside this time-block.
    var userInput = $(this).siblings(".description").val();

    // Save the user input in local storage using the timeBlockId as the key.
    localStorage.setItem(timeBlockId, userInput);
  });

  var currentHour = dayjs().hour();

  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
    // Function to update the time-block classes based on the current time.
    function updateBlock() {
      // Loop through all time-blocks.
      $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        var currentHour = dayjs().hour();
        
        if (blockHour < currentHour) {
          // Past
          $(this).removeClass("present future").addClass("past");
        } else if (blockHour === currentHour) {
          // Present
          $(this).removeClass("past future").addClass("present");
        } else {
          // Future
          $(this).removeClass("past present").addClass("future");
        }
      });
    }
    updateBlock();
})