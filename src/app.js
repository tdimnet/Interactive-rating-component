const $ratingBtns = document.querySelectorAll('.rating-btn')
const $ratingsScreen = document.querySelector('.ratings-screen')
const $thankYouScreen = document.querySelector('.thank-you-screen')
const $submitBtn = document.querySelector('.submit-btn')

let ratingValue = 0

$ratingBtns.forEach($ratingBtn => $ratingBtn.addEventListener('click', function() {
    $ratingBtns.forEach($ratingBtn => $ratingBtn.classList.remove('selected-rating'))
    this.classList.add('selected-rating')

    console.log("=====")
    console.log(this.textContent)
    console.log("=====")
}))
