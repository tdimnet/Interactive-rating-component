const $rating = document.querySelector(".rating");
const $ratingBtns = document.querySelectorAll(".rating-btn");
const $ratingsScreen = document.querySelector(".ratings-screen");
const $submitBtn = document.querySelector(".submit-btn");
const $thankYouScreen = document.querySelector(".thank-you-screen");

let ratingValue = "0";

$ratingBtns.forEach(($ratingBtn) =>
  $ratingBtn.addEventListener("click", function () {
    $ratingBtns.forEach(($ratingBtn) =>
      $ratingBtn.classList.remove("selected-rating")
    );
    this.classList.add("selected-rating");
    ratingValue = this.textContent;
  })
);

$submitBtn.addEventListener("click", function () {
  if (ratingValue > 0) {
    $rating.textContent = ratingValue;
    $ratingsScreen.classList.add("hidden");
    $thankYouScreen.classList.remove("hidden");
  }
});
