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
})