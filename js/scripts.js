$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();
    var string1 = $("#palindrome").val();
    var stringStrip = string1.split("");
    stringStrip = stringStrip.filter(function(str){
      return /\S/.test(str);
    });
    console.log(stringStrip);

    stringStrip.reverse();
    var backwardsString = stringStrip.join("");
    console.log(backwardsString);
    var palindromeString = string1 + backwardsString;
    console.log(palindromeString);
    var palindromeArray = palindromeString.split("");
    palindromeArray = palindromeArray.filter(function(str){
      return /\S/.test(str);
    });
    console.log(palindromeArray);

    var j = stringStrip.length;
    console.log(j);
    for (i = 0; i < (string1.length - 1); i ++) {
      console.log(palindromeArray[i],palindromeArray[j]);
      if (palindromeArray[i] === palindromeArray[j]) {
        alert("It's a match");
        j++;
      }
      else {
        alert("This is not a palindrome.");
        break;
      }
    }
    // var palindromeFormat = palindromeArray.join("");
    // console.log(palindromeFormat);
    // $("#output").text(palindromeFormat);
  });

});
