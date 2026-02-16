// Fade animation
const faders = document.querySelectorAll('.fade');

const appearOnScroll = new IntersectionObserver(function(entries, observer){
entries.forEach(entry=>{
if(!entry.isIntersecting) return;
entry.target.classList.add('show');
observer.unobserve(entry.target);
});
},{threshold:0.2});

faders.forEach(fader=>{
appearOnScroll.observe(fader);
});

// Subtle parallax
window.addEventListener("scroll", function(){
const img = document.querySelector(".laptop-img");
if(img){
let scrollPosition = window.scrollY;
img.style.transform = "translateY(" + scrollPosition * 0.02 + "px)";
}
});