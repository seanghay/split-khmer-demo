import 'milligram'
import { split, processText } from 'split-khmer'
const $text = document.getElementById('text');
const $output = document.getElementById('output');
const $textOutput = document.getElementById('text-output');


$text.addEventListener('input', () => {
  $output.textContent = JSON.stringify(
    split($text.value),
    null, 2
  );
  $textOutput.value = processText($text.value)
})