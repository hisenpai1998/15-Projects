const colors = ["green", "red", "rgba(144,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNummer = getRandomNumber();
   
    document.body.style.backgroundColor = colors[randomNummer];
    color.textContent = colors[randomNummer];
});

function getRandomNumber() {
    return Math.floor(Math.random() * color.length);
}
