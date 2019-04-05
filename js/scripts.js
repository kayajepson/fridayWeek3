//FRONT END
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#numInput").val());
    var output = genOutput(userNumber);
    $("#result").text(output);

  });
});

//BACK END
function convert(num) {
if (num.includes("1")) {
      return(" beep");
  } if (num.includes("2")) {
        return(" boop");
    } if (num.includes("3")) {
          return(" dave");
      }
        else {
          return(" " + num);
        }
}

function genOutput(userNumber) {
  var output = [];
  for (var i = 0; i <= userNumber; i++) {
    output.push(convert(i.toString()))
  };
  return(output);
}
