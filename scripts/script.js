// ids for nav counters
const hearts = document.getElementById("heart-counter")
const copies = document.getElementById("copy-counter")
const coins = document.getElementById("coin-counter")

// classes for buttons
const cardBtns = document.querySelectorAll(".heart-btn")
const copyBtns = document.querySelectorAll(".copy-btn")
const callBtns = document.querySelectorAll(".call-btn")

// titles
// const title = document.querySelectorAll(".card-title")

// call history
const callHistoryBtn = document.getElementById("call-history-btn")
const callHistoryContainer = document.getElementById("call-history-container")

const callHistory = [];

// heart btn functionalities
let countHearts = 0;
for (btn of cardBtns) {
    btn.addEventListener("click", function () {
        countHearts++;
        hearts.innerText = countHearts;
    })
}

// call btn functionalities
let countCoins = 100;
for (const btn of callBtns) {
    btn.addEventListener("click", function () {

        if (countCoins < 20) {
            alert("You Don't Have Sufficient Balance");
            return;
        }

        countCoins = countCoins - 20;
        coins.innerText = countCoins;

        const cardT = btn.parentElement.parentElement;
        const title = cardT.querySelector(".card-title")
        const cardTitle = title.innerText;

        const cardN = btn.parentElement.parentElement;
        const number = cardN.querySelector(".card-numbers")
        const cardNumber = number.innerText;
        alert("📞 Calling... " + cardTitle + " " + cardNumber)

        const data = {
            name: cardTitle,
            number: cardNumber,
            date: new Date().toLocaleTimeString()
        }
        callHistory.push(data)

        callHistoryContainer.innerHTML = "";
        for (const call of callHistory) {
            const div = document.createElement("div")
            div.innerHTML = 
            `
            <div class="call flex justify-between items-center mx-6 mt-4 p-4 rounded-[8px] bg-[#FAFAFA]">
                    <div>
                        <h3 class="service-name font-inter font-semibold text-[1.25rem] dark-color">Fire Service Number
                        </h3>
                        <p class="service-number font-madurai text-[1.25rem] gray-color">999</p>
                    </div>
                    <p class="time font-madurai text-[1.125rem] dark-color">
                        11:33:55 AM
                    </p>
                </div>
            `
            callHistoryContainer.appendChild(div)
            console.log(div)
        }
    })
}






// copy btn functionalities
let countCopies = 0;
for (const btn of copyBtns) {
    btn.addEventListener("click", function () {
        countCopies++;
        copies.innerText = countCopies;

        const card = btn.parentElement.parentElement;
        const number = card.querySelector(".card-numbers")
        const copyCardNumber = number.innerText;

        navigator.clipboard.writeText(copyCardNumber)
            .then(function () {
                alert("The number is copied  " + copyCardNumber)
            })
    })
}