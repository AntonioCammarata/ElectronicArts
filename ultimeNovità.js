//-----------------------------GESTIONE CARD------------------------

const $trigger = document.querySelectorAll(".triggerContainer");
const $content = document.querySelectorAll(".content");


$trigger.forEach(($el) => {
  $el.addEventListener("click", (event) => {
    // Prima levo la classe visible da tutti i `div.content`
    $content.forEach(($_content) => $_content.classList.remove("visible"));
    // Determina il div corretto sulla base del click
    const id = event.target.dataset.id;
    // Vado ad aggiungere la classe `visible` al div corretto usando l'id appena preso
    document.getElementById(id).classList.add("visible");
    console.log(id);
  });
});





//---------------------------GESTIONE SCROLL MENù------------------------

const $prev = document.querySelector("#prev");
const $next = document.querySelector("#next");
const $slider = document.querySelector("#ultimeNovità-cardMenu");
const $btnElements = document.querySelector("#buttonContainer");

//scroll to right
$next.addEventListener("click", () =>{
  let scrollTarget = $slider.scrollLeft + 100;
  $slider.style.scrollBehavior = "smooth";
  $slider.style.transitionDuration = 2000;
  $slider.scrollTo({
    left: scrollTarget,
  });
})
  
//scroll to left
$prev.onclick = () => $slider.scrollLeft -=100

//check display arrows
$slider.addEventListener("scroll", () => {
  if ($slider.scrollLeft === 0) {
    $prev.style.display = "none";
  } else {
    $prev.style.display = "block";
  }
  //se la posizione dello scroll laterale è maggiore o uguale alla larghezza totale dell'elemento meno la larghezza visibile dell'elemento, nascondo il pulsante "next". Altrimenti, mostro il pulsante "next".
  if ($slider.scrollLeft >= $slider.scrollWidth - $slider.clientWidth) {
    $next.style.display = "none";
  } else {
    $next.style.display = "block";
  }

});


//
//-------------------------------GESTIONE FOCUS TRIGGER--------------

const $redbar = document.querySelectorAll(".triggerButtons__RedBar")


$trigger.forEach(($_el) => {
  $_el.addEventListener("click", event => {
    $redbar.forEach(($_bar) => $_bar.classList.remove("visible__bar"))
    $trigger.forEach(($_trig) => $_trig.classList.remove("triggered_bg"))
    const nth = event.target.dataset.nth
    document.getElementById(nth).classList.add("visible__bar")
    event.currentTarget.classList.add("triggered_bg")
  })
})