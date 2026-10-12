const base_url = "https://gabriellacampbell.github.io/csce242/json/";

const getBars =async()=>{
    const response =await fetch(base_url+"bars-data.json");
    return response.json();
};

const displayBar = (bar)=>{
    const section =document.createElement("section");
    section.classList.add("bar");

    const img =document.createElement("img");
    img.src =base_url+bar.img_name;
    img.alt=bar.name;
    section.append(img);

    const info= document.createElement("div");
    info.classList.add("bar-info");

    const h3 =document.createElement("h3");
    h3.textContent =bar.name;
    info.append(h3);

    const location =document.createElement("p");
    location.textContent =bar.location;
    info.append(location);

    const type =document.createElement("p");
    type.textContent=bar.type;
    info.append(type);

    const description =document.createElement("p");
    description.textContent=bar.description;
    info.append(description);

    section.append(info);
    return section;
};

const showBars = async ()=>{
    const bars =await getBars();
    const barList = document.getElementById("bar-list");

    bars.forEach((bar)=>{
        barList.append(displayBar(bar));
    });
};
showBars();