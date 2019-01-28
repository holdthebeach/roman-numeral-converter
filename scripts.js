document.addEventListener("DOMContentLoaded", ready);

//when DOM has been loaded
function ready() {
  //HTML elements for which we'll extract the values or reset the content
  var form = document.getElementById('numberConverter');
  var input = document.getElementById('arabicNumber');
  var output = document.getElementById('romanNumber');

  form.onsubmit = submit;
  function submit(){
    var inputValue = input.value;
    //converting input values to strings to access each individual integer
    var inputFirstChar = inputValue.toString()[0];
    var inputSecondChar = inputValue.toString()[1];
    var inputThirdChar = inputValue.toString()[2];
    //converting integer strings back to integers
    var inputFirstInteger = parseInt(inputFirstChar, 10);
    var inputSecondInteger = parseInt(inputSecondChar, 10);
    var inputThirdInteger = parseInt(inputThirdChar, 10);

    //setting Roman numeral values
    var one = 'I';
    var five = 'V';
    var ten = 'X';
    var fifty = 'L'
    var hundred = 'C';
    var fiveHundred = 'D';
    var thousand = 'M';

    //setting empty array and string for integer conversion
    var outputRomanNumerals = [];
    var outputValue = '';

    /**
    parameter #2 is two levels up in the Roman numerals chart and parameter #3
    is one level up in the Roman numerals chart e.g. ten (X) is two levels up
    and five (V) is one level up from the base of one (I)
    **/
    function convertInteger (integer, upTwoLevels, upOneLevel, base) {
      //set the Roman number to an empty string
      var romanNumber = '';
      if (integer <= 3) {
        //take the base string value and repeat it based on the integer param
        romanNumber = base.repeat(integer);
        outputRomanNumerals.push(romanNumber);
      }else if (integer == 4) {
        /**
        take the base string value and place to the right of (subtract it
        from) the next level up string value
        **/
        romanNumber = base + upOneLevel;
        outputRomanNumerals.push(romanNumber);
      }else if (integer == 5) {
        //set to the next level up string value
        romanNumber = upOneLevel;
        outputRomanNumerals.push(romanNumber);
      }else if (integer <= 8) {
        //add the base string value repeated to the next level up value
        romanNumber = upOneLevel + base.repeat(integer-5);
        outputRomanNumerals.push(romanNumber);
      }else {
        /**
        take the base string value and place to the right of (subtract it
        from) the two levels up string value
        **/
        romanNumber = hundred + upTwoLevels;
        outputRomanNumerals.push(romanNumber);
      }
    }

    function convertEntireValue () {
      //call the convertInteger function 3x to get a separate value for each
      convertInteger(inputFirstInteger, thousand, fiveHundred, hundred);
      convertInteger(inputSecondInteger, hundred, fifty, ten);
      convertInteger(inputThirdInteger, ten, five, one);
      //for each value added to the empty array, concatenate with outputValue
      outputRomanNumerals.forEach(function(value) {
        outputValue = outputValue + value;
      })
      //set the output to the final concatenated value
      output.innerHTML = outputValue;
    }

    convertEntireValue();
    //so that the page does not refresh
    event.preventDefault();
    //so that the input field is emptied upon each submission
    form.reset();
  }
}
