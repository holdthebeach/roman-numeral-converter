document.addEventListener("DOMContentLoaded", ready);

function ready() {
  var form = document.getElementById('numberConverter');
  var input = document.getElementById('arabicNumber');
  var output = document.getElementById('romanNumber');

  form.onsubmit = submit;
  function submit(){
    var inputValue = input.value;
    var inputFirstChar = inputValue.toString()[0];
    var inputSecondChar = inputValue.toString()[1];
    var inputThirdChar = inputValue.toString()[2];
    var inputFirstInteger = parseInt(inputFirstChar, 10);
    var inputSecondInteger = parseInt(inputSecondChar, 10);
    var inputThirdInteger = parseInt(inputThirdChar, 10);

    var one = 'I';
    var five = 'V';
    var ten = 'X';
    var fifty = 'L'
    var hundred = 'C';
    var fiveHundred = 'D';
    var thousand = 'M';

    var outputRomanNumerals = [];
    var outputValue = '';

    function convertInteger (integer, upTwoLevels, upOneLevel, base) {
      var multiple = '';
      if (integer <= 3) {
        multiple = base.repeat(integer);
        outputRomanNumerals.push(multiple);
      }else if (integer == 4) {
        multiple = base + upOneLevel;
        outputRomanNumerals.push(multiple);
      }else if (integer == 5) {
        multiple = upOneLevel;
        outputRomanNumerals.push(multiple);
      }else if (integer <= 8) {
        multiple = upOneLevel + base.repeat(integer-5);
        outputRomanNumerals.push(multiple);
      }else {
        multiple = hundred + upTwoLevels;
        outputRomanNumerals.push(multiple);
      }
    }

    function convertEntireValue () {
      convertInteger(inputFirstInteger, thousand, fiveHundred, hundred);
      convertInteger(inputSecondInteger, hundred, fifty, ten);
      convertInteger(inputThirdInteger, ten, five, one);
      outputRomanNumerals.forEach(function(value) {
        outputValue = outputValue + value;
      })
      output.innerHTML = outputValue;
    }

    convertEntireValue();
    event.preventDefault();
    form.reset();
  }
}
