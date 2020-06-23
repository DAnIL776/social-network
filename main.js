const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector('.menu-sidebar');

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
});

const shareBtn = document.querySelector('.shareBtn');
const menuShare = document.querySelector('.menu-share');

shareBtn.addEventListener('click', function(){
    menuShare.classList.toggle('active');
});