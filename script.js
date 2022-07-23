/* jshint esversion: 6 */

var display = document.getElementById("counter-display");
var buttons = document.querySelectorAll(".btn");
var increaseBtn = document.querySelector(".increase");
var decreaseBtn = document.querySelector(".decrease");
var resetBtn = document.querySelector(".reset");

// var counter = 0;
// const increment = () => {
//     counter ++;
// };

// const decrement = () => {
//     counter --;
// };

// const reset = () => {
//     count = 0;
// };

// display.textContent = counter;

// increaseBtn.addEventListener("click", ()=>{
//     counter++;
// });
// decreaseBtn.addEventListener("click", decrement);
// resetBtn.addEventListener("click", reset);














var counter = 0;


buttons.forEach((btns) => {
    btns.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("increase")) {
            counter++;
        } else if (styles.contains("decrease")) {
            counter--;
        } else {
            counter = 0;
        }

        display.textContent = counter;

        if (counter > 0) {
            display.style.color = "green";
        } else if (counter < 0) {
            display.style.color = "red";
        } else {
            display.style.color = "white";
        }

    });

});