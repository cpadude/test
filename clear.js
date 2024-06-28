function clearForm() {
  var inputs = document.querySelectorAll('input, textarea');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
    inputs[i].setAttribute('autocomplete', 'off');
    // Additional techniques (optional):
    inputs[i].placeholder = ''; // Clear placeholder text (if applicable)
  }
}

clearForm();
