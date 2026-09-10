//shows message when button is clicked
document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "hello world";
    e.target.innerHTML = "done!";
};

//styles the link when it is clicked
document.getElementById("link").onclick = (e) => {
    e.target.classList.add("cool-link");
    e.preventDefault(); //dont go to link destination
};

//animates the ball when it is clicked
document.getElementById("btn-bounce").onclick = (e) => {
    document.getElementById("ball").classList.add("bouncing-ball");
};
