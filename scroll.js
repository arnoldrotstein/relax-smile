window.onload = () => {
    
function scrollToElem() {
   const hrefs = document.querySelectorAll('.header-nav a');
    hrefs.forEach(e => {
        e.addEventListener('click', function(elem) {
            window.scrollTo(elem.clientX, elem.clientY);
            console.log(elem.clientX)
        })
    }) 
} 

setTimeout(scrollToElem, 1000);
    
}