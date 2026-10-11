// for same logic throughtout
document.querySelectorAll(".slideshow").forEach((show)=>{
    const slides = show.querySelector(".slides");
    const getCurrentSlide=()=>{
        return slides.querySelector(":scope > :not(.hidden)");
    };
    const slide= (currentSlide, nextSlide)=>{
        currentSlide.classList.add("hidden");
        nextSlide.classList.remove("hidden");
    };

    // goes right
    show.querySelector(".arrow-right").onclick=(e)=>{
        e.preventDefault();
        const currentSlide=getCurrentSlide();
        let nextSlide=currentSlide.nextElementSibling;
        if(nextSlide==null){
            nextSlide=slides.firstElementChild;
        }
        slide(currentSlide,nextSlide);
    };

    // goes left
    show.querySelector(".arrow-left").onclick=(e)=>{
        e.preventDefault();
        const currentSlide=getCurrentSlide();
        let nextSlide =currentSlide.previousElementSibling;
        if(nextSlide==null){
            nextSlide=slides.lastElementChild;
        }
        slide(currentSlide,nextSlide);
    };
});