//FRONT END
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#numInput").val());
    var userName = $("input#nameInput").val();
    console.log(userName);
    var output = genOutput(userNumber);
    $("#result").text(output);

  });
  $("#reverse").click(function() {
    event.preventDefault();
    var userNumber = parseInt($("input#numInput").val());
    var output = genOutput(userNumber);
    $("#result").text(output.reverse());
  });
});

//BACK END
function convert(num) {
  var userName = $("input#nameInput").val();
  if (userName === "" && num.includes("3")) {
    return(" I'm sorry, Dave. I'm afraid I can't do that.");
  } if (userName !== "" && num.includes("3")) {
    return(" I'm sorry, " + userName + ". I'm afraid I can't do that.");
  } if (num.includes("2")) {
    return(" boop");
  } if (num.includes("1")) {
    return(" beep");
  } else {
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
