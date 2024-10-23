"use strict";

// Selecting element
const faqs = document.querySelectorAll(".faqs");

faqs.forEach(function (faq) {
  //selecting article element
  const question = faq.querySelector(".question");
  //click event on each question
  question.addEventListener("click", () => {
    faqs.forEach(function (qns) {
      const checkQns = qns.querySelector(".question");
      //checking if the current question is the one been clicked
      if (checkQns !== question) {
        checkQns.classList.remove("show-answer");
      }
    });
    question.classList.toggle("show-answer");
  });
});
