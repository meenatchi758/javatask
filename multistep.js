
function addToWishlist(productName) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!wishlist.includes(productName)) {
        wishlist.push(productName);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        alert(productName + " added to wishlist!");
    } else {
        alert("Item already in wishlist!");
    }
}


function removeFromWishlist(productName) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist = wishlist.filter(item => item !== productName);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    displayWishlist();
}

function displayWishlist() {
    const wishlistContainer = document.getElementById("wishlist-items");
    wishlistContainer.innerHTML = "";

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
        return;
    }

    wishlist.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("wishlist-item");
        div.innerHTML = `
            <p>${item}</p>
            <button class="remove-btn" onclick="removeFromWishlist('${item}')">Remove</button>
        `;
        wishlistContainer.appendChild(div);
    });
}

if (document.getElementById("wishlist-items")) {
    displayWishlist();
}
