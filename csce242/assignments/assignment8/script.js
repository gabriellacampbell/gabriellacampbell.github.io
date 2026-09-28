//associate array of place with associated map 
const mountains = {
    "Asheville":"https://www.google.com/maps?q=Asheville+NC&output=embed",
    "Boone": "https://www.google.com/maps?q=Boone+NC&output=embed",
    "Hot Springs":"https://www.google.com/maps?q=Hot+Springs+NC&output=embed",
    "Table Rock":"https://www.google.com/maps?q=Table+Rock+State+Park+SC&output=embed"
};
const beaches = {
    "Outer Banks":"https://www.google.com/maps?q=Outer+Banks+NC&output=embed",
    "Folly Beach": "https://www.google.com/maps?q=Folly+Beach+SC&output=embed",
    "Myrtle Beach":"https://www.google.com/maps?q=Myrtle+Beach+SC&output=embed",
    "Hilton Head":"https://www.google.com/maps?q=Hilton+Head+SC&output=embed"
};
//constants for needed html 
const destinationType=document.getElementById("destination-type");
 const destinationList= document.getElementById("destination-list");
const map=document.getElementById("map");
//calls live map from selected destination
const showMap=(mapLink)=>{
    map.innerHTML= "";
    const iframe=document.createElement("iframe");
    iframe.src=mapLink;

    map.append(iframe);
}; 
destinationType.onchange=() =>{
    destinationList.innerHTML="";
    map.innerHTML ="";

    let destinations;
    //gets the selected array
    if(destinationType.value== "mountains"){
        destinations=mountains;
    }else if(destinationType.value=="beach"){
        destinations=beaches;
    }else{
        return;
    }
    for(let destination in destinations){//loops through each destination
        const p=document.createElement("p");
        const link=document.createElement("a");

        link.innerHTML=destination;
        link.href="#";
        link.classList.add("destination-link");
        link.onclick =()=>{
            showMap(destinations[destination]);
        };
        p.append(link);
        destinationList.append(p);
    }};