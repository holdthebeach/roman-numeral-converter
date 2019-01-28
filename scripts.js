document.addEventListener("DOMContentLoaded", ready);

function ready() {
  var form = document.getElementById('numberConverter');
  var input = document.getElementById('arabicNumber');
  var output = document.getElementById('romanNumber');
  var outputValue = 0;

  console.log(form);
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
    var oneThousand = 'M';

    var outputRomanNumerals = [];
    var outputValue = '';

    function convertHundredsInteger (hundredsValue) {
      var hundredsMultiple = '';
      if(hundredsValue <= 3) {
        hundredsMultiple = hundred.repeat(hundredsValue);
        console.log(hundredsMultiple);
        outputRomanNumerals.push(hundredsMultiple);
        console.log(outputRomanNumerals);
      }else if(hundredsValue == 4) {
        hundredsMultiple = 'CD';
        outputRomanNumerals.push(hundredsMultiple);
        console.log(outputRomanNumerals);
      }else if (hundredsValue == 5) {
        hundredsMultiple = 'D';
        outputRomanNumerals.push(hundredsMultiple);
        console.log(outputRomanNumerals);
      }else if (hundredsValue <= 8) {
        hundredsMultiple = 'D' + hundred.repeat(hundredsValue-5);
        outputRomanNumerals.push(hundredsMultiple);
        console.log(outputRomanNumerals);
      }else{
        hundredsMultiple = 'CM';
        outputRomanNumerals.push(hundredsMultiple);
        console.log(outputRomanNumerals);
      }
    }
    convertHundredsInteger(inputFirstInteger);

    function convertTensInteger (tensValue) {

    }

    function convertOnesInteger (onesValue) {

    }

    function convertEntireValue () {
      outputValue = convertHundredsInteger(inputFirstInteger) +
        convertTensInteger (inputSecondInteger) +
        convertOnesInteger (inputThirdInteger);
    }

    console.log(inputFirstInteger);
    console.log(inputSecondInteger);
    console.log(inputThirdInteger);
    output.innerHTML = inputFirstChar + inputSecondChar + inputThirdChar;
    event.preventDefault();
    form.reset();
  }
}
