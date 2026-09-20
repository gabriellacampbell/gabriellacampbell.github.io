//tells how many points your using for classes missed and sends message
document.getElementById("days-missed").onkeyup = (e) => {
    const numDays = parseInt(e.target.value);
    const message = document.getElementById("miss-message");

    const gLoss = document.getElementById("grade-loss");
    const gradeLossPerClass =  7/25;
    const perGradeLoss = (gradeLossPerClass*numDays).toFixed(2);

    gLoss.innerHTML = "You will lose " + perGradeLoss + "% for skipping " + numDays + " days.";
    
    if(numDays == 0){
        message.innerHTML = "You have perfect attendence!";
    }
    else if(numDays <= 5){
        message.innerHTML = "All good, you only missed a few days";
    }
    else if(numDays <= 10){
        message.innerHTML = 
        "Its going to be difficult to keep your grade up! Lock in!!";
    }
    else{
        message.innerHTML = "You are cooked."
    }
   
};

//for days left and message
const today = new Date();
const lastDay = new Date(today.getFullYear(),11,4); //dec = 11
const amtLeft = Math.ceil((lastDay - today) / (1000 * 60 * 60 * 24));

document.getElementById("days-left").innerHTML = 
    "You have " + amtLeft + " days left this semester.";

const msg = document.getElementById("days-left-msg");

if (amtLeft == 0){
    msg.innerHTML = "Happy Last Day!!";
}
else if(amtLeft <= 30 ){
    msg.innerHTML = "Close! Less than a month, you got it!";
}
else if(amtLeft <= 60){
    msg.innerHTML = "You still got a bit to go, bud.";
}
else{
    msg.innerHTML = "You just started!";
}

//to hide the exersize not shown and make the selected appear
document.getElementById("exercise1-link").onclick = () => {
    document.getElementById("exercise1").classList.remove("hidden");
    document.getElementById("exercise2").classList.add("hidden");
};

document.getElementById("exercise2-link").onclick = () => {
    document.getElementById("exercise2").classList.remove("hidden");
    document.getElementById("exercise1").classList.add("hidden");
};