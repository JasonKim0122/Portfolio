/* Modal Script */ 
let aboutMeModal = document.getElementById('aboutMeId');
let aboutBg = document.querySelector('.aboutMeBg');
let aboutModal = document.querySelector('.aboutModal');
let deleteBtn = document.getElementById('deleteBtn');
let exitBtn = document.getElementById('exitBtn');

aboutMeModal.addEventListener('click', () => {
    aboutModal.classList.add('is-active');
});

aboutBg.addEventListener('click', () => {
    aboutModal.classList.remove('is-active');
});

deleteBtn.addEventListener('click', () => {
    aboutModal.classList.remove('is-active');
});

exitBtn.addEventListener('click', () => {
    aboutModal.classList.remove('is-active');
});

/* Modal Script End */