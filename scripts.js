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
    var thousand = 'M';

    var outputRomanNumerals = [];
    var outputValue = '';

    function convertHundredsInteger (hundredsValue) {
      var hundredsMultiple = '';
      if (hundredsValue <= 3) {
        hundredsMultiple = hundred.repeat(hundredsValue);
        console.log(hundredsMultiple);
        outputRomanNumerals.push(hundredsMultiple);
        console.log(outputRomanNumerals);
      }else if (hundredsValue == 4) {
        hundredsMultiple = hundred + fiveHundred;
        outputRomanNumerals.push(hundredsMultiple);
        console.log(outputRomanNumerals);
      }else if (hundredsValue == 5) {
        hundredsMultiple = fiveHundred;
        outputRomanNumerals.push(hundredsMultiple);
        console.log(outputRomanNumerals);
      }else if (hundredsValue <= 8) {
        hundredsMultiple = fiveHundred + hundred.repeat(hundredsValue-5);
        outputRomanNumerals.push(hundredsMultiple);
        console.log(outputRomanNumerals);
      }else {
        hundredsMultiple = hundred + thousand;
        outputRomanNumerals.push(hundredsMultiple);
        console.log(outputRomanNumerals);
      }
    }
    convertHundredsInteger(inputFirstInteger);

    function convertTensInteger (tensValue) {
      var tensMultiple = '';
      if (tensValue == 0){
        return '';
      }else if (tensValue <= 3) {
        tensMultiple = ten.repeat(tensValue);
        console.log(tensMultiple);
        outputRomanNumerals.push(tensMultiple);
        console.log(outputRomanNumerals);
      }else if (tensValue == 4) {
        tensMultiple = ten + fifty;
        outputRomanNumerals.push(tensMultiple);
        console.log(outputRomanNumerals);
      }else if (tensValue == 5) {
        tensMultiple = fifty;
        outputRomanNumerals.push(tensMultiple);
        console.log(outputRomanNumerals);
      }else if (tensValue <= 8) {
        tensMultiple = fifty + ten.repeat(tensValue-5);
        outputRomanNumerals.push(tensMultiple);
        console.log(outputRomanNumerals);
      }else {
        tensMultiple = ten + hundred;
        outputRomanNumerals.push(tensMultiple);
        console.log(outputRomanNumerals);
      }
    }
    convertTensInteger(inputSecondInteger);

    function convertOnesInteger (onesValue) {
      var onesMultiple = '';
      if (onesValue == 0){
        return '';
      }else if (onesValue <= 3) {
        onesMultiple = one.repeat(onesValue);
        console.log(onesMultiple);
        outputRomanNumerals.push(onesMultiple);
        console.log(outputRomanNumerals);
      }else if (onesValue == 4) {
        onesMultiple = one + five;
        outputRomanNumerals.push(onesMultiple);
        console.log(outputRomanNumerals);
      }else if (onesValue == 5) {
        onesMultiple = five;
        outputRomanNumerals.push(onesMultiple);
        console.log(outputRomanNumerals);
      }else if (onesValue <= 8) {
        onesMultiple = five + one.repeat(onesValue-5);
        outputRomanNumerals.push(onesMultiple);
        console.log(outputRomanNumerals);
      }else {
        onesMultiple = one + ten;
        outputRomanNumerals.push(onesMultiple);
        console.log(outputRomanNumerals);
      }
    }
    convertOnesInteger(inputThirdInteger);

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
