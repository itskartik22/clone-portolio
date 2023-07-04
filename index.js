// Typing Animation
const skillsArray = [
  "Web Developement",
  "Android Development",
  "Graphics Designing"
]
const typingElement = document.querySelector(".text-animation span");
let skillsIndex=0;
let textIndex=0;
let isDeleting = false;

function type(){
  const currentSkill = skillsArray[skillsIndex];
    if(isDeleting){
        typingElement.textContent = currentSkill.substring(0, textIndex-1);
        textIndex--;
    }
    else{
      typingElement.textContent = currentSkill.substring(0,textIndex+1);
      textIndex++;
    }

    if(!isDeleting && textIndex == currentSkill.length){
      isDeleting = true;
      setTimeout(type, 600);
    }
    else if(isDeleting && textIndex==0){
      isDeleting = false;
      skillsIndex++;
      if(skillsIndex == skillsArray.length){
        skillsIndex = 0;
      }
      setTimeout(type, 100);
    }
    else{
      setTimeout(type, 100);
    }

}
type();



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
        duration: 1.5
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


const navItems = Array.from(document.querySelectorAll(".nav-list li"));
const navLinks = Array.from(document.querySelectorAll(".nav-list a"));


function handleScroll(){
    const scrollPosition = window.screenY;

    for(const section of document.querySelectorAll('section')){
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if(scrollPosition >= sectionTop && scrollPosition <= sectionHeight + sectionTop){
            const targetNavItem = navItems.find(item => item.querySelector('a').getAttribute('href') === `#${section.id}`)
            if(targetNavItem){
                targetNavItem.classList.add("active")
            }
        }
        else{
            const targetNavItem = navItems.find(item => item.querySelector('a').getAttribute('href') === `#${section.id}`)
            if(targetNavItem){
                targetNavItem.classList.remove("active")
            }
        }
    }
}

window.addEventListener('scroll', handleScroll)

function handleClick(event){
    event.preventDefault();

    const targetSectionId = this.getAttribute('href');
    const targetSection = document.querySelector(targetSectionId);

    if(targetSection){
        const offset = 60;

        const targetScrollPosition = targetSection.offsetTop-offset;
         window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth'
         })

    }
}

navLinks.forEach(link => link.addEventListener('click', handleClick))


// Image Animation(Mouse Move Over)

// var container = document.getElementsByClassName("img-container");
// var inner = document.getElementsByClassName("img-inner");

(function() {
    // Init
    var container = document.getElementsByClassName("img-container"),
      inner = document.getElementsByClassName("img-inner");
  
    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };
  
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);
  
    //-----------------------------------------
  
    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
      return counter++ % updateRate === 0;
    };
  
    //-----------------------------------------
  
    var onMouseEnterHandler = function(event) {
      update(event);
    };
  
    var onMouseLeaveHandler = function() {
      inner.style = "";
    };
  
    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };
  
    //-----------------------------------------
  
    var update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };
  
    var updateTransformStyle = function(x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTransform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };
  
    //-----------------------------------------
  
    container.onmouseenter = onMouseEnterHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmousemove = onMouseMoveHandler;
  })();
  