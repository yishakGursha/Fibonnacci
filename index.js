function generateFibonacciSequence(numberOfTerms) {
    var sequence = [];
    if (numberOfTerms >= 1) {
      sequence.push(0);
    }
    if (numberOfTerms >= 2) {
      sequence.push(1);
    }
    if (numberOfTerms >= 3) {
      for (var i = 2; i < numberOfTerms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
      }
    }
    return sequence;
  }
  
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var numberInput = document.getElementById('number');
    var numberOfTerms = parseInt(numberInput.value);
    var resultDiv = document.getElementById('result');
    var sequence = generateFibonacciSequence(numberOfTerms);
    resultDiv.textContent = 'Fibonacci Sequence: ' + sequence.join(', ');
  });