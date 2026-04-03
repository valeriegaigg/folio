const elements = document.querySelectorAll('.scroll-animation-element');
const elements2 = document.querySelectorAll('.scroll-mywork');
const project = document.querySelector('#project');
const block = document.querySelectorAll('.orange');
const h1 = document.querySelector('h1');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optional: Unobserve the element after the animation plays once
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null, // observe against the viewport
    threshold: 0.2 // trigger when 10% of the element is visible
});

elements.forEach(element => {
    observer.observe(element);
});

elements2.forEach(element => {
    observer.observe(element);
});

function dropdown (){
    
    block.style.display = "true"
    console.log("dropdown")
}

function uploadFiles() {
    const input = document.getElementById('fileInput');
    const files = input.files
    
}