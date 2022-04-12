"use strict";

/////////////////////////////////////////////
// Rating Buttons 1-5
const rateBtns = document.querySelectorAll(".rating-btn");
// const rateBtns = document.getElementsByClassName("outer-shell");

for (let i = 0; i < rateBtns.length; i++) {
  rateBtns[i].addEventListener("click", function () {
    for (let e = 0; e < rateBtns.length; e++) {
      rateBtns[e].classList.remove("clicked-btn");
    }
    this.classList.add("clicked-btn");
    // console.log("You clicked the rating button #" + (i + 1));
  });
}

/////////////////////////////////////////////
// CTA BUTTON + THANK YOU SECTION
const subBtn = document.querySelector(".cta-btn");
const outerShell = document.querySelector(".outer-shell");
const rateSect = document.querySelector(".inner-shell .rate-sect");
const thankYou = document.querySelector(".inner-shell .thank-you");

subBtn.addEventListener("click", function () {
  for (let i = 0; i < rateBtns.length; i++) {
    if (rateBtns[i].classList.contains("clicked-btn")) {
      rateSect.classList.add("hide-el");
      thankYou.classList.remove("hide-el");
      outerShell.classList.remove("fixed-width--16");

      const getBtnNum = rateBtns[i].textContent;
      thankYou.querySelector(
        ".selected-rating-msg"
      ).textContent = `You selected ${getBtnNum} out of 5`;
    }
  }
});
