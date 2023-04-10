const body = document.querySelector("body");
const navbarColor = document.querySelector("#navbar");
const logoColor = document.querySelector("#logo");
const burgerColor = document.querySelectorAll(".burger div");
const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar-items");






const navbarSlide = () => {
    const navbarItems = document.querySelectorAll(".navbar-items li");

    // Set nav active status with boolean

    navbar.addEventListener("click", () => {
        navbar.style.transform = "transform: translateX(0%)";
        burger.classList.toggle('toggle');
        navbar.classList.toggle("navbar-active");
        document.body.classList.toggle('lock-scroll');
        console.log("test2");
        navbarItems.forEach((link)=>{
            if(link.style.animation) {
                link.style.animation ="";
            } else {
                link.style.animation = `navbar-item-fade 0.5s ease forwards`;
            }
        });
    })
    
    burger.addEventListener("click", ()=>{
        
        let isActive = false;

        //Toggle nav
        navbar.classList.toggle("navbar-active");
        document.body.classList.toggle('lock-scroll');

        // Toggle nav active status to true/false
        isActive = !isActive;
        
        //Animate link
        navbarItems.forEach((link)=>{
            if(link.style.animation) {
                link.style.animation ="";
            } else {
                link.style.animation = `navbar-item-fade 0.5s ease forwards`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');
        
    });



}
navbarSlide();




window.addEventListener('load', () => {
    navbarColor.style.transition = "0.3s";
    logoColor.style.transition = "0.3s";

    let top = window.scrollY;
    if(top >= 100){
        navbarColor.style.borderBottom = "3px solid var(--color-accent-1)";
        burgerColor.forEach(burgerColor =>{
            burgerColor.style.backgroundColor = "var(--color-black)";
        });
        logoColor.style.fill = "var(--color-black)";
        navbarColor.classList.add("navbar-color-change");

    }
    else{
        navbarColor.style.borderBottom = "3px solid transparent";
        burgerColor.forEach(burgerColor =>{
            burgerColor.style.backgroundColor = "var(--color-white)";
        });
        logoColor.style.fill = "var(--color-white)";
    }


})

window.addEventListener('scroll', () => {
    navbarColor.style.transition = "0.3s";

    let top = window.scrollY;

    if(top >= 100 && !(body.classList.contains("lock-scroll"))){
        navbarColor.classList.add("navbar-color-change");
        navbarColor.style.borderBottom = "3px solid var(--color-accent-1)";

        burgerColor.forEach(burgerColor =>{
            burgerColor.style.backgroundColor = "var(--color-black)";
        });
        logoColor.style.fill = "var(--color-black)";
    }
    else{
        navbarColor.classList.remove("navbar-color-change");
        navbarColor.style.borderBottom = "3px solid transparent";
        burgerColor.forEach(burgerColor =>{
            burgerColor.style.backgroundColor = "var(--color-white)";
        });
        logoColor.style.fill = "var(--color-white)";
    }
})

burger.addEventListener('click', ()=>{
    let top = window.scrollY;

    if(top >= 100){
        if(body.classList.contains("lock-scroll") ){
            burgerColor.forEach(burgerColor =>{
                burgerColor.style.backgroundColor = "var(--color-white)";
            });
        }
        else{
            burgerColor.forEach(burgerColor =>{
                burgerColor.style.backgroundColor = "var(--color-black)";
            });
            logoColor.style.fill = "var(--color-black)";
            navbarColor.style.borderBottom = "3px solid var(--color-accent-1)";
            navbarColor.classList.add("navbar-color-change");
            navbarColor.style.transition = "0s";
            logoColor.style.transition = "0s";
        }
    }
    else if(top == 0){
        if(body.classList.contains("lock-scroll") ){
            burgerColor.forEach(burgerColor =>{
                burgerColor.style.backgroundColor = "var(--color-white)";
            });
        }
        else{
            burgerColor.forEach(burgerColor =>{
                burgerColor.style.backgroundColor = "var(--color-white)";
            });
        }
    }
 });

 logoColor.addEventListener('mouseover',() => {
    logoColor.style.fill = "var(--color-accent-1)";
});

logoColor.addEventListener('mouseout',() => {
    let top = window.scrollY;

    if(top >= 100){
        logoColor.style.fill = "var(--color-black)";
    }
    else{
        logoColor.style.fill = "var(--color-white)";
    }
});

burger.addEventListener('mouseover',() => {
    burgerColor.forEach((link)=>{
        link.style.backgroundColor = "var(--color-accent-1)";
    });
});

burger.addEventListener('mouseout',() => {
    let top = window.scrollY;

    if(top >= 100){

        if(body.classList.contains("lock-scroll") ){
            burgerColor.forEach((link)=>{
                link.style.backgroundColor = "var(--color-white)";
            })
        }
        else{
            burgerColor.forEach((link)=>{
                link.style.backgroundColor = "var(--color-black)";
            })
        }
    }
    else{
        burgerColor.forEach((link)=>{
            link.style.backgroundColor = "var(--color-white)";
        });
    }
});


