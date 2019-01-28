document.addEventListener("DOMContentLoaded", ready);

function ready() {
  var form = document.getElementById('numberConverter');
  var input = document.getElementById('arabicNumber');
  var output = document.getElementById('romanNumber');
  var outputValue = 0;

  console.log(form);
  form.onsubmit = submit;
  function submit(){
    outputValue = input.value;
    console.log(outputValue);
    output.innerHTML = outputValue;
    event.preventDefault();
    form.reset();
  }
}
