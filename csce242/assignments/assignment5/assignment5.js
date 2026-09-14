//text box
document.getElementById("speech-container").addEventListener("click", () => {
    document.getElementById("text-box").classList.toggle("show");
});

//beverage of choice dropdown menu:
const beverageSelect = document.getElementById("beverages");
const beverageOutput = document.getElementById("beverage-output");
    beverageSelect.addEventListener("change", function() {   
    const selectedBeverage = beverageSelect.options[beverageSelect.selectedIndex].text;
    beverageOutput.textContent = selectedBeverage + ": Nice choice!";});


//add sticker when sun is press3d
document.getElementById("sticker").onclick = () => {
    document.getElementById("emoji").classList.add("display-sticker");
}
