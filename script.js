let dataSet = [
  {day: "mon", amount: 17.45},
  {day: "tue", amount: 34.91},
  {day: "wed", amount: 52.36},
  {day: "thu", amount: 31.07},
  {day: "fri", amount: 23.39},
  {day: "sat", amount: 43.28},
  {day: "sun", amount: 25.48}
];

let total = 0;

function calculateTotal () {
    dataSet.forEach(data=>{
        let amount = data.amount;
        total += amount;
    })
}


function loopArr () {
    dataSet.forEach(data=>{
        let day = data.day;
        let amount = data.amount;

        let targetDiv = document.querySelector("." + day);
        let targetBar = targetDiv.querySelector(".bar");
        let targetDetailedTotal = targetDiv.querySelector(".detailed-total");


        calculateBarHeight(amount, targetBar);
        addMouseOver(amount, targetBar, targetDetailedTotal);
        addMouseOut(targetBar, targetDetailedTotal);
    })
}


function calculateBarHeight(amount, targetBar){
    let maxBarHeight = 500;
    let percentage = (amount/total);
    let barHeight = Math.round(maxBarHeight * percentage) + "px";
    targetBar.style.height = barHeight;

}

function addMouseOver (amount, targetBar, targetDetailedTotal){
    targetBar.addEventListener("mouseenter", e=>{
        let text = targetDetailedTotal.querySelector("p");
        text.innerText = `£${amount}`;
        targetDetailedTotal.setAttribute("id", "active");
    })

}

function addMouseOut (targetBar, targetDetailedTotal){
    targetBar.addEventListener("mouseout", () => {
    targetDetailedTotal.removeAttribute("id", "active");
    let text = targetDetailedTotal.querySelector("p");
    text.innerText = "£XX.XX";
    })
}

function chooseDay(){
    let randomNumber = Math.floor(Math.random() * 7);
    let randomDay = dataSet[randomNumber].day;
    let targetBar = document.querySelector("." + randomDay + " .bar");
    targetBar.setAttribute("id", "today");

}



calculateTotal();
chooseDay();
loopArr();