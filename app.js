const navBtn = document.getElementById('nav-btn'); //nav button
const nav = document.getElementById('nav');
const navClose= document.getElementById('nav-close');




 showNav = () =>{
    nav.classList.remove('hide');
    console.log('success');
};

navBtn.addEventListener('click', showNav);


closeNav = () =>{
    nav.classList.add('hide');
};

navClose.addEventListener('click', closeNav);