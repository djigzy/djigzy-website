let activePage = window.location.href;
let test = window.location.pathname;

const navbarLinks = document.querySelectorAll(".navbar-links a")
const sections = document.querySelectorAll("section");

navbarLinks.forEach(link =>{
    if(link.href == activePage){
        link.classList.add("active");
    }
})

window.addEventListener('hashchange', () => {
    activePage = window.location.href;
    navbarLinks.forEach(link =>{
        
        link.classList.remove("active");
        if(link.href == activePage){
            link.classList.add("active");
        }
    })
})

let activeSectionScroll = ( () =>{
    let current = "";
    sections.forEach( section => {
        const sectionTop = section.offsetTop-1;
        const sectionHeight = section.clientHeight;
        if(scrollY > sectionTop){
            current = section.getAttribute("id");
        }
    });
    navbarLinks.forEach( link => {
        link.classList.remove("active");
        if(link.classList.contains(current)){
            link.classList.add("active");
        }
    })
})

window.addEventListener('scroll', activeSectionScroll);
window.addEventListener('load', activeSectionScroll);
