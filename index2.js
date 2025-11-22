const decrease_button = document.getElementById("decrease");
const reset_button = document.getElementById("reset");
const increase_button = document.getElementById("increase");
const counter_text = document.getElementById("counter");

let count = 0;
increase_button.onclick = function(){
  count ++;
  counter_text.textContent = count;
}
decrease_button.onclick = function(){
  count --;
  counter_text.textContent = count;
}
  reset_button.onclick = function(){
    count = 0;
    counter_text.textContent = count;
}