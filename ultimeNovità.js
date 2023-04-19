//GESTIONE CARD

const $trigger = document.querySelectorAll(".trigger");
const $content = document.querySelectorAll(".content");

$trigger.forEach(($el) => {
  $el.addEventListener("click", (event) => {
    // Prima levo la classe visible da tutti i `div.content`
    $content.forEach(($_content) => $_content.classList.remove("visible"));
    // Determina il div corretto sulla base del click
    const id = event.target.dataset.id;
    // Vado ad aggiungere la classe `visible` al div corretto usando l'id appena preso
    document.getElementById(id).classList.add("visible");
  });
});

//GESTIONE MENù
const $prev = document.querySelector("#prev");
const $next = document.querySelector("#next");
const $slider = document.querySelector("#ultimeNovità-cardMenu");
const $btnElements = document.querySelector("#buttonContainer");

$prev.addEventListener("click", function scrollingRight() {
  const animation = $slider.animate(
    { scrollLeft: ($slider.scrollLeft -= 300) },
    { duration: 500, easing: "ease-in" }
  );
  animation.play();
});

$next.addEventListener("click", function scrollingLeft() {
  const animation = $slider.animate(
    { scrollLeft: ($slider.scrollLeft += 300) },
    { duration: 5000, easing: "ease-in" }
  );
  animation.play();
});

/* $slider.addEventListener("scroll", () => {
  if ($slider.scrollLeft > 1) {
    $prev.style.display = "block";
  } else if ($slider.scrollLeft > 200) {
    $next.style.display = "none";
    $btnElements.style.display = "none";
  }
});
 */
const div = document.querySelectorAll(".div");

$trigger.forEach(function (trigger) {
  trigger.addEventListener("click", function () {
    var id = this.getAttribute("data-id");
    var mostra = document.querySelector("#" + id + " > div");
    if (mostra.classList.contains("visible")) {
      mostra.classList.remove("visible");
    } else {
      mostra.classList.add("visible");
    }
  });
});
