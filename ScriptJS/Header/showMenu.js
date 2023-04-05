const logo = document.querySelector('.box-01');
const menu = document.querySelector('.backgoundHamburger');
const menu02 = document.querySelector('.navClick');
const exit = document.querySelector('.symbols');
// window.document.querySelector('.window')


logo.addEventListener('click', function() {
    menu.classList.toggle('showermenu')    
    menu02.classList.toggle('showermenu')    
});

exit.addEventListener('click', function(){
    menu.classList.remove('showermenu')
    menu02.classList.remove('showermenu')  
});

// exit.addEventListener('click', function(){
//     menu.classList.remove('document')
// });

// exit.addEventListener('click',function(){
//     menu.classList.remove('window')
// });


