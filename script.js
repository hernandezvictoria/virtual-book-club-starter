

const loadReviews = () => {
    console.log("loadReviews called");

    const container = document.querySelector("#reviews-list");
    for(const review of reviews){
        const reviewElement = createReviewElement(review);
        container.appendChild(reviewElement);
    }
}


// our submit handler
const handleReviewSubmit = (event) => {
    console.log("handleReviewSubmit called")
    event.preventDefault(); // making sure there are things to submit

    const reviewInput = document.querySelector("#review-text");
    const reviewText = reviewInput.value;

    const reviewRatingInput = document.querySelector("#rating");
    const rating = reviewRatingInput.value;

    const reviewTitle = document.querySelector("#book-title");
    const title = reviewTitle.value;

    // create a new review object
    let review = {
        title: title,
        reviewText: reviewText,
        rating: rating,
        likes: 0,
        reposts: 0
    }

    const newReviewElement = createReviewElement(review);
    const reviewsContainer = document.querySelector("#reviews-list");

    reviewsContainer.insertBefore(newReviewElement, reviewsContainer.firstChild); // insert at the top of the list
    event.target.reset(); // reset the form

}

// once content is loaded, then call loadReviews
document.addEventListener("DOMContentLoaded", () =>{
    loadReviews()
    const reviewForm = document.querySelector("#review-form");
    reviewForm.addEventListener("submit", handleReviewSubmit);
});

const createReviewElement = (review) => {
    console.log(review);
    const reviewElement = document.createElement("div");
    reviewElement.className = "review-item";
    // can use inner HTML to set the content of the element instead of using setTextContent and appendChild
    reviewElement.innerHTML = `
    <h3>${review.title}</h3>
    <p>${review.reviewText}</p>
    <p>Rating: ${review.rating}/5</p>
    <button>Likes: ${review.likes}</button>
    <button>Reposts: ${review.reposts}</button>
    `
    return reviewElement;
}
