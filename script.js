function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        alert(`Code ${code} copied to clipboard!`);
    }).catch(err => {
        alert('Failed to copy code. Please try again.');
    });
}

const couponCtn = document.getElementsByClassName("couponCtn")[0];

const couponArray = [
    {
        id: 1,
        offer: "Exclusive Oraimo Discount Code: Save Up to 58% Off + Get an Extra Free 5% Off Voucher",
        code: "7HJQ440D3JPK",
        used: "5387",
        today: "5",
    },
    {
        id: 2,
        offer: "Don’t Miss! Oraimo Flash Sale: Up to 59% Off + Extra 5% Off All Products",
        code: "7HJQ440D3JPK",
        used: "5387",
        today: "5",
    },
    {
        id: 3,
        offer: "Get 8% Off Your First Oraimo Order + 600 Bonus Points When You Download and Register the Oraimo App Today",
        code: "VTRW8TKTJRF4",
        used: "5387",
        today: "5",
    },
    {
        id: 2,
        offer: "Oraimo Deals on Best-Selling Products: Extra 5% Off Everything",
        code: "2u9536ms",
        used: "5387",
        today: "5",
    },
    {
        id: 2,
        offer: "Oraimo Smart Watch Discounts: Up to 50% Off + Extra 5% Voucher",
        code: "f5g2m6p4",
        used: "5387",
        today: "5",
    },
    {
        id: 2,
        offer: "Save Up to 39% on Oraimo Wireless Earbuds + Extra 5% Off",
        code: "7qfvnphm",
        used: "5387",
        today: "5",
    },
    {
        id: 2,
        offer: "Oraimo Clippers on Sale: Up to 43% Off + Extra 5% Off All Orders",
        code: "7HJQ440D3JPK",
        used: "5387",
        today: "5",
    },
    {
        id: 2,
        offer: "Oraimo Home Appliances Sale: Save Up to 47% Today + Extra 5% Off",
        code: "VTRW8TKTJRF4",
        used: "5387",
        today: "5",
    },
    {
        id: 2,
        offer: "Exclusive Oraimo Promo Code: New Arrivals with Extra 5% Off",
        code: "2u9536ms",
        used: "5387",
        today: "5",
    },
    {
        id: 2,
        offer: "Oraimo Power Banks: Best Deals with Extra 5% Off Discount Code",
        code: "f5g2m6p4",
        used: "5387",
        today: "5",
    },
    {
        id: 2,
        offer: "Oraimo Free Shipping on N15,000 Worth of Order & Above",
        code: "7qfvnphm",
        used: "5387",
        today: "5",
    },
    {
        id: 2,
        offer: "Smart Oraimo Clippers Discount: Save with 5% Off Oraimo Discount Network  Coupons",
        code: "7HJQ440D3JPK",
        used: "5387",
        today: "5",
    },
]

for (i = 0; i < couponArray.length; i++) {
    let couponBox = document.createElement("div");
    couponBox.innerHTML = `
            <div class="coupon">
                <div class="coupon-details">
                    <h3>${couponArray[i].offer}</h3>
                </div>
                <div class="coupon-extras">
                    <div class="coupon-codeCtn">
                        <a href="https://ng.oraimo.com?affiliate_code=gQU41bWUcc">
                            <div class="coupon-code">${couponArray[i].code}</div>
                        </a>
                        <img class="copy" src="copy.png" onclick="copyCode('${couponArray[i].code}')" alt="">
                    </div>  
                    <div class="thumbs-up-extras">
                        <div class="thumbs">
                            <img src="thumbs-up.png" alt="">
                            <img src="thumbs-down.png" alt="">
                        </div>
                        <div class="view-stats">
                            <p class="success">100% SUCCESS</p>
                            <div class="stats"><img src="view.png" alt=""><p>${couponArray[i].used} Used - ${couponArray[i].today} Today</p></div>
                        </div>
                    </div>
                </div>
            </div>
                `
    couponCtn.append(couponBox)
}

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});