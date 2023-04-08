const rating = document.querySelectorAll(".rating-choice");
const form = document.querySelector(".form");
const thanks = document.querySelector(".thanks");
const submit = document.querySelector(".button");
const ratingChoice = document.querySelector(".choice");

submit.addEventListener("click", submitRating);

submit.disabled = true;

for (var n = 0; n < rating.length; n++) {
  rating[n].addEventListener("click", addChoice);
}

function checkActive(choice) {
  for (var n = 0; n < rating.length; n++) {
    if (rating[n].classList.contains("active")) {
      rating[n].classList.remove("active");
    }
  }
  rating[choice].classList.add("active");
  submit.disabled = false;
}

function addChoice() {
  var choice = this.innerHTML;

  switch (choice) {
    case "1":
      checkActive(0);
      break;
    case "2":
      checkActive(1);
      break;
    case "3":
      checkActive(2);
      break;
    case "4":
      checkActive(3);
      break;
    case "5":
      checkActive(4);
      break;
  }
  ratingChoice.innerHTML = choice;
}

function submitRating() {
  if (!submit.disabled) {
    form.classList.add("clear");
    thanks.classList.remove("clear");
  }
}
