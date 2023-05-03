/* ----- SCROL 01 ----- */

const scroll01 = document.querySelector('.navBar01Block01');
const section01 = document.querySelector('.section01');
const remove = document.querySelector('.clickExit');
const zindex = document.querySelector('.index-nav');

scroll01.addEventListener('click', function() {
    section01.classList.toggle('showermenu01')    
    zindex.classList.toggle('nav2Zindex')      
});



remove.addEventListener('click', function(){
    section01.classList.remove('showermenu01')
    zindex.classList.remove('nav2Zindex') 
});


/* ----- SCROL 02 ----- */

const scroll02 = document.querySelector('.navBar01Block02');
const menu2 = document.querySelector('.section02');
const exit2 = document.querySelector('.clickExit2');


scroll02.addEventListener('click', function() {
    menu2.classList.toggle('showermenu02')
    zindex.classList.toggle('nav2Zindex')        
});

exit2.addEventListener('click', function(){
    menu2.classList.remove('showermenu02')
    zindex.classList.remove('nav2Zindex')    
});



