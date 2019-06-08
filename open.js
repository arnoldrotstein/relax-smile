function openForm () {
    const form = document.querySelector('.formDate');
    const header = document.getElementsByTagName('header')[0];
    const main = document.getElementsByTagName('main')[0];
    const footer = document.getElementsByTagName('footer')[0];
    const formCancel = document.querySelector('.close');
    
    formCancel.addEventListener('click', () => {
        form.style.display='none';
        header.style.opacity = '1';
        main.style.opacity = '1';
        footer.style.opacity = '1';
});
    
    setTimeout(() => {
        form.style.display='block';
        header.style.opacity = '0.5';
        main.style.opacity = '0.5';
        footer.style.opacity = '0.5';
        }
    , 2000);
}



document.addEventListener("DOMContentLoaded", openForm);