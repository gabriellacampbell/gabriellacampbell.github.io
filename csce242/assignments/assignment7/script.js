//grabs div
const cars = document.getElementById("cars");

//for random color
const carColors=[
    "red", "orange", "yellow", "green", "navy", "violet", "pink"
];

//adds first car
const addCar = (color, left, top) =>
{
    const car=document.createElement("div");
    car.classList.add("car");

    car.style.background = color;
    car.style.left = left + "%";
    car.style.top = top + "px";

    const roof = document.createElement("div");
    roof.classList.add("roof");
    const wheelLeft = document.createElement("div");
    wheelLeft.classList.add("wheel", "wheel-left");
    const wheelRight = document.createElement("div");
    wheelRight.classList.add("wheel", "wheel-right");

    car.appendChild(roof);
    car.appendChild(wheelLeft);
    car.appendChild(wheelRight);
    cars.appendChild(car);
};

//adds the rest of the cars randomly
for(let i=0; i<9; i++){
    const left = Math.floor(Math.random()*85);
    let top;
    if(Math.random() < 0.5){
        //puts in top lame
        top = 20; 
    }
    else{
         //puts in bottom lane
        top = 150;
    }

    //fpor colors
    const color = carColors[Math.floor(Math.random()*carColors.length)];
    addCar(color, left, top);
};