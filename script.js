

const loadReviews = () => {
    console.log("loadReviews called");

    const container = document.querySelector("#reviews-list");
    for(const review of reviews){
        const reviewElement = createReviewElement(review);
        container.appendChild(reviewElement);
    }
}

// once content is loaded, then call loadReviews
document.addEventListener("DOMContentLoaded", loadReviews);


const handleReviewSubmit = () => {
    console.log("handleReviewSubmit called");
}

const submitButton = document.querySelector("button");
submitButton.addEventListener("click", handleReviewSubmit);

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
