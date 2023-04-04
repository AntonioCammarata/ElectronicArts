const $trigger = document.querySelectorAll(".trigger");
const $content = document.querySelectorAll(".content");

$trigger.forEach($el => {
  $el.addEventListener("click", (event) => {
    // Prima levo la classe visible da tutti i `div.content`
    $content.forEach(($_content) => $_content.classList.remove("visible"));
    // Determina il div corretto sulla base del click
    const id = event.target.dataset.id;
    // Vado ad aggiungere la classe `visible` al div corretto usando l'id appena preso
    document.getElementById(id).classList.add("visible");
  });
});

