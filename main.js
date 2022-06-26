import 'milligram'
import { split, processText, joinToString } from 'split-khmer'
const $text = document.getElementById('text');
const $output = document.getElementById('output');
const $textOutput = document.getElementById('text-output');
const $textReverse = document.getElementById('text-reverse');


$text.addEventListener('input', () => {
  $output.textContent = JSON.stringify(
    split($text.value),
    null, 2
  );
  $textOutput.value = processText($text.value)
  $textReverse.value = joinToString(split($text.value).reverse())
})