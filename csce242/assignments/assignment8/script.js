document.getElementById("mountains").onclick = () => {
    const mount = ["ashville", "boone", "Hot Springs", "Table Rock"];
    const destList = document.getElementById("destination-list");
    destList.innerHTML = "";
}

document.getElementById("beach").onclick = () => {
    const beachDestinations = ["Outerbanks", "Folly Beach", "Myrtle Beach", "Hilton Head"];
    const destList = document.getElementById("destination-list");
    destList.innerHTML = "";
}

beach.forEach((beach)=>{
        const p = document.createElement("p").innerHTML;
        p.innerHTML = beach;
        beachList.append(p);
    });
