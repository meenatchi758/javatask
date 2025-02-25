const stars = document.querySelectorAll(".star");
const averageRatingElement = document.getElementById("average-rating");
const userRatingMessage = document.getElementById("user-rating-message");

// Sample rating data
let ratings = [];
let averageRating = 0;

// Function to update average rating
function updateAverageRating() {
    if (ratings.length === 0) {
        averageRating = 0;
    } else {
        averageRating = ratings.reduce((a, b) => a + b, 0) / ratings.length;
    }
    averageRatingElement.textContent = averageRating.toFixed(1);
}

// Function to handle star click
stars.forEach(star => {
    star.addEventListener("click", function() {
        const ratingValue = parseInt(this.getAttribute("data-value"));

        // Add new rating
        ratings.push(ratingValue);
        updateAverageRating();

        // Highlight selected stars
        stars.forEach(s => s.classList.remove("active"));
        for (let i = 0; i < ratingValue; i++) {
            stars[i].classList.add("active");
        }

        // Display user message
        userRatingMessage.textContent = `You rated this product ${ratingValue} stars!`;
    });
});
