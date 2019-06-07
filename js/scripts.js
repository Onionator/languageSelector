$(document).ready(function() {
  // when the submit button is clicked this function will determine which programming language the user should learn based on the total added values returned from each question
  $(".form").submit(function(event) {
    event.preventDefault();
    //this hides the previous answer
    $(".hidden").hide();
    $(".contentBox").show();
    //total stores the total from the values that the user inputted by answering questions
    var total = parseInt($("input:radio[name=question1]:checked").val());
    total += parseInt($("input:radio[name=question2]:checked").val());
    total += parseInt($("input:radio[name=question3]:checked").val());
    total += parseInt($("input:radio[name=question4]:checked").val());
    total += parseInt($("input:radio[name=question5]:checked").val());
    // these if statements determine what language the index.html should show by unhiding the language related to the id based on which range the value in total falls into
    if (total <= 5) {
      $("#reject").show();
    } else if (total <= 12) {
      $("#javascript").show();
    } else if (total <= 15) {
      $("#java").show();
    } else {
      $("#cPlusPlus").show();
    }
  });

  //this function only works with survey 2
  $(".form2").submit(function(event) {
    event.preventDefault();
    //this hides the previous answer
    $(".hidden").hide();
    $(".contentBox").show();
    // an array
    var answers = [0,0,0,0,0];
    //total stores the total from the values that the user inputted by answering questions
    answers[0] = $("input:radio[name=question1]:checked").val();
    answers[1] = $("input:radio[name=question2]:checked").val();
    answers[2] = $("input:radio[name=question3]:checked").val();
    answers[3] = $("input:radio[name=question4]:checked").val();
    answers[4] = $("input:radio[name=question5]:checked").val();
    // these if statements determine what language the index.html should show by unhiding the language related to the id based on which range the value in total falls into
    var result;
    if (answers[0] === answers[1] || answers[0] === answers[2] || answers[0] === answers[3] || answers[0] === answers[4]) {
      result = answers[0];
    } else if (answers[1] === answers[2] || answers[1] === answers[3] || answers[1] === answers[4]) {
      result = answers[1];
    } else if (answers[2] === answers[3] || answers[2] === answers[4]) {
      result = answers[2];
    } else {
      result = answers[3];
    }

    if (result === answers[0] && result === answers[1] || result === answers[0] && result === answers[2] || result === answers[0] && result === answers[3] || result === answers[0] && result === answers[4]) {
      alert(result);
    } else if (result === answers[1] && result === answers[2] || result === answers[1] && result === answers[3] || result === answers[1] && result === answers[4]) {
      alert(result);
    } else if (result === answers[2] && result === answers[3] || result === answers[2] && result === answers[4]) {
      alert(result);
    } else if (result === answers[3] && result === answers[4]) {
      alert(result);
    } else {
      alert(result);
    }
  });
});
