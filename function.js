function handleThumbClick(couponId, buttonId) {
    // Get the thumbs-up and thumbs-down buttons for the current coupon
    const thumbsUpButton = document.getElementById(`thumbs-up-${couponId}`);
    const thumbsDownButton = document.getElementById(`thumbs-down-${couponId}`);
    const thumbsUpImg = thumbsUpButton.querySelector('img');
    const thumbsDownImg = thumbsDownButton.querySelector('img');

        // Reset both buttons
        thumbsUpImg.src = 'thumb-up.png';
        thumbsDownImg.src = 'thumb-down.png';
    
    // Reset both buttons
    thumbsUpButton.classList.remove('clicked');
    thumbsDownButton.classList.remove('clicked');
    
    // If the clicked button is the thumbs-up, mark it as clicked
    if (buttonId === 'thumbs-up') {
        thumbsUpButton.classList.add('clicked');
        thumbsUpImg.src = 'thumb-up-green.png';
    } 
    // If the clicked button is the thumbs-down, mark it as clicked
    else if (buttonId === 'thumbs-down') {
        thumbsDownButton.classList.add('clicked');
        thumbsDownImg.src = 'thumb-down-green.png';
    }

    // Store the state in a cookie
    setCookie(`clickedThumb-${couponId}`, buttonId, 1);
}

// Function to get a cookie value by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // expires in 'days' days
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// On page load, apply the saved states for all coupons
document.addEventListener('DOMContentLoaded', () => {
    couponArray.forEach(coupon => {
        const savedState = getCookie(`clickedThumb-${coupon.id}`);
        if (savedState) {
            const button = document.getElementById(`${savedState}-${coupon.id}`);
            if (button) button.classList.add('clicked');
        }
    });
});