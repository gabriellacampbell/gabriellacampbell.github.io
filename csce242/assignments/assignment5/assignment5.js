//text box

//beverage of choice dropdown menu:
const beverageSelect = document.getElementById("beverages");
const beverageOutput = document.getElementById("beverage-output");
    beverageSelect.addEventListener("change", function() {   
    const selectedBeverage = beverageSelect.options[beverageSelect.selectedIndex].text;
    beverageOutput.textContent = selectedBeverage + ": Nice choice!";});


//sticker 