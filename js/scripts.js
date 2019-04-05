//FRONT END
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#numInput").val());
    var output = convert(userNumber);
    // var output = genOutput(userNumber);
    // $("#result").text(output);

  });
});

//BACK END
function convert(num) {
if (num === 1) {
      console.log(" beep");
      }
  else {
    console.log(" " + num);
  }
}
