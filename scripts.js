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
    var outputValue = 0;

    console.log(inputFirstInteger);
    console.log(inputSecondInteger);
    console.log(inputThirdInteger);
    output.innerHTML = inputFirstChar + inputSecondChar + inputThirdChar;
    event.preventDefault();
    form.reset();
  }
}
