"use strict";

// Selecting element
const faqs = document.querySelectorAll(".faqs"),
  features = document.querySelectorAll(".features ul li"),
  featureDetails = document.querySelector(".features-details"),
  emailInput = document.getElementById("email"),
  emailContainer = document.querySelector(".email"),
  emailBtn = document.querySelector(".emailBtn"),
  menuBtn = document.querySelector(".menu-btn"),
  closeBtn = document.querySelector(".close-btn"),
  overlayContainer = document.querySelector(".overlay");
const featuresInfo = [
  {
    id: 1,
    title: "Bookmark in one click",
    info: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    id: 2,
    title: "Intelligent search",
    info: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    id: 3,
    title: "Share your bookmarks",
    info: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

//selecting the features
features.forEach(function (item, i) {
  item.addEventListener("click", () => {
    features.forEach(function (checkfeatures) {
      if (checkfeatures !== item) {
        checkfeatures.classList.remove("active");
      }
      featureDetails.innerHTML = `
        <div class="feature-illustration">
          <img src="./images/illustration-features-tab-${featuresInfo[i].id}.svg" alt="illustration-hero">
          <div class="bg-color"></div>
        </div>
        <div class="feature-details">
          <h2>${featuresInfo[i].title}</h2>
          <p>${featuresInfo[i].info}
          </p>
          <button class="btn btn-blue info">More Info</button>
        </div>
       `;
    });
    item.classList.toggle("active");
  });
});

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

//checking for email vailodity 
emailInput.addEventListener("blur", function () {
  if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity(""); // Clear any previous custom error
    emailContainer.classList.add("error");
  } else {
    emailContainer.classList.remove("error");
  }
});

emailBtn.addEventListener("click", function (e) {
  if (!emailInput.validity.valid) {
    e.preventDefault();
    emailInput.setCustomValidity("");
    emailContainer.classList.add("error");
  } else {
    emailContainer.classList.remove("error");
  }
});

// Adding functionality to the Overlay Menu
menuBtn.addEventListener("click", () => {
  overlayContainer.classList.add("show-menu");
});

closeBtn.addEventListener("click", () => {
  overlayContainer.classList.remove("show-menu");
});
