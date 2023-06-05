gsap.registerPlugin(ScrollTrigger)

gsap.from(".skills",{
    scrollTrigger:{
        trigger:".skills",
        start: "top 600",
        end: "bottom 100",
        // markers: true,
        toggleActions: "play reverse play reverse",
    },
    y : -70,
    opacity: 0,
    duration: 1
});

const exboxContainer = document.querySelectorAll(".exbox-container");
const exBox = document.querySelectorAll(".exp-box");
const aboutElement = document.querySelectorAll(".about-slide-animation")
exboxContainer.forEach((box)=>{
    gsap.from(box,{
        scrollTrigger:{
            trigger:box,
            start: "top 600",
            end: "+=250 100",
            // markers: true,
            toggleActions: "play reverse play reverse",
        },
        y : -70,
        opacity: 0,
        duration: 1
    });

})
aboutElement.forEach((box)=>{
    gsap.from(box,{
        scrollTrigger:{
            trigger:box,
            start: "top 800",
            end: "+=250 100",
            // markers: true,
            toggleActions: "play reverse play reverse",
        },
        y : -100,
        opacity: 0,
        duration: 1
    });

})



exBox.forEach((e,i) => {
    if(i%2!=0){
        e.classList.add("left-target-arrow")
    }
    else{
        e.classList.add("right-target-arrow")
    }
})

