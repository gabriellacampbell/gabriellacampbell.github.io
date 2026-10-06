class Vacation {
    constructor(title,type,description,things,image,mapSrc){
        this.title=title;
        this.type=type;
        this.description=description;
        this.things=things;
        this.image=image;
        this.mapSrc=mapSrc;
    }

    get card(){
        const section=document.createElement("section");
        section.classList.add("vacation-card");
        section.append(this.cardHeader());
        section.append(this.cardImage());
        section.onclick= ()=>this.showModal();
        return section;
    }

    cardImage(){
        const img=document.createElement("img");
        img.src=`images/${this.image}`;
        img.alt=`Picture of ${this.title}`;
        return img;
    }  

    cardHeader(){
        const header =document.createElement("div");
        header.classList.add("card-header");
        const h3=document.createElement("h3");
        h3.textContent=this.title;
        const p=document.createElement("p");
        p.textContent=`${this.type} Vacation`;
        header.append(h3,p);
        return header;
    }
    showModal(){
        document.querySelector("#modal-title").textContent= this.title;
        document.querySelector("#modal-type").innerHTML=this.labelledText("Type",this.type);
        document.querySelector("#modal-description").innerHTML=this.labelledText("Description",this.description);
        document.querySelector("#modal-things").innerHTML=this.labelledText("Things to do",this.things);

        const map =document.querySelector("#modal-map");
        map.innerHTML="";
        map.append(this.mapFrame());
        document.querySelector("#vacation-modal").style.display="block";
    }

    labelledText(label,value){
        return `<strong>${label}: </strong>${value}`;
    }
    mapFrame(){
        const iframe=document.createElement("iframe");
        iframe.src =this.mapSrc;
        iframe.title=`Map of ${this.title}`;
        iframe.loading="lazy";
        iframe.allowFullscreen =true;
        return iframe;
    }
}

const vacations=[];
vacations.push(new Vacation(
    "Ashville", "Mountain",
    "A lively mountain city known for its arts scene, breweries, and views of the Blue Ridge.",
    "Tour the Biltmore Estate, drive the Blue Ridge Parkway, and explore the River Arts District",
    "ashville.jpg", 
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207788.69846877584!2d-82.73022246396441!3d35.5364497925199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88598ca93c0f6f09%3A0x94ef31c106343a5d!2sAsheville%2C%20NC!5e0!3m2!1sen!2sus!4v1791254033510!5m2!1sen!2sus"
));
vacations.push(new Vacation(
    "Hot Springs", "Mountain",
    "A small trail town on the French Broad River where the Appalachian Trail runs down Main Street.",
    "Soak in the mineral hot springs, hike the Appalachian Trail, and go whitewater rafting.",
    "hotsprings.jpg",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207788.69846877584!2d-82.73022246396441!3d35.5364497925199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885a3218bdd5fedd%3A0x79a534f1577692ee!2sHot%20Springs%2C%20NC%2028743!5e0!3m2!1sen!2sus!4v1791254300392!5m2!1sen!2sus"
));
vacations.push(new Vacation(
    "Table Rock", "Mountain",
    "A dramatic granite peak with sweeping views over the Upstate of South Carolina.",
    "Hike the Table Rock summit trail, camp at the state park, and swim in the lake.",
    "tablerock.jpg",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26129.931616269783!2d-82.74243218154778!3d35.050702003311294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8859b2454bbb22d5%3A0x573d2c49c8967814!2sTable%20Rock!5e0!3m2!1sen!2sus!4v1791254395159!5m2!1sen!2sus"
));
vacations.push(new Vacation(
    "Sunset Beach", "Beach",
    "A quiet, family-friendly island on the southern tip of North Carolina's coast. ",
    "Walk the Kindred Spirit mailbox trail, fish off the pier, and watch the sunset.",
    "sunsetbeach.jpg",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52988.53136606191!2d-78.59614823528322!3d33.89523671056397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x890082b0f127f05b%3A0xd1e58176f5ff4a78!2sSunset%20Beach%2C%20NC!5e0!3m2!1sen!2sus!4v1791254462351!5m2!1sen!2sus" 
));
vacations.push(new Vacation(
    "Oak Island", "Beach",
    "A relaxed beach town with a long, flat shoreline that is great for families.",
    "Climb the Oak Island Lighthouse, fish off the pier, and relax on the beach.",
    "oakisland.jpg",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105908.0154134674!2d-78.2255877413525!3d33.95075950188497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8900a081b16e4cb3%3A0xb94fac3c2cceea73!2sOak%20Island%2C%20NC!5e0!3m2!1sen!2sus!4v1791254532480!5m2!1sen!2sus" 
));
vacations.push(new Vacation(
    "Pawleys Island", "Beach",
    "A historic, low-key island known for its hammocks and quiet dunes.",
    "Stroll the dunes, crab in the creek, and visit nearby Brookgreen Gardens.",
    "pawleys.jpg",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368215.1583125073!2d-79.26798474909579!3d33.41725000559556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8900310270ac82d3%3A0xb93d3315efe428d2!2sPawleys%20Island%2C%20SC!5e0!3m2!1sen!2sus!4v1791254616023!5m2!1sen!2sus" 
));

function loadVacations(){
    const list=document.querySelector("#vacation-list");
    vacations.forEach((vacation)=>{
        list.append(vacation.card);
    });
}

function closeModal(){
    document.querySelector("#vacation-modal").style.display ="none";
}

function setupModalClose(){
    const modal=document.querySelector("#vacation-modal");
    document.querySelector("#close").onclick = closeModal;
    modal.onclick=(event)=>{
        if(event.target=== modal){
            closeModal();
        }
    };
    document.addEventListener("keydown",(event)=>{
        if(event.key==="Escape"){
            closeModal();
        }
    });
}
loadVacations();
setupModalClose();