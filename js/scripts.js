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
    if (total === 5) {
      $("#reject").show();
    } else if (total <= 12) {
      $("#javascript").show();
    } else if (total <= 15) {
      $("#java").show();
    } else {
      $("#cPlusPlus").show();
    }
  });

});
