const stati_menu = document.querySelector("#stati-menu");
const bandiere_menu = document.querySelector("#bandiere-menu");
const button1 = document.getElementsByClassName("country");
const button2 = document.getElementsByClassName("language");
let Click = true;
let Click2 = true;

function visibleHidden() {
  if (Click) {
    stati_menu.style.visibility = "visible";
    bandiere_menu.style.visibility = "hidden";
    Click = false;
    Click2 = true;
  } else {
    stati_menu.style.visibility = "hidden";
    stati_menu.display = "none";
    Click = true;
  }
}

function visibleHidden2() {
  if (Click2) {
    bandiere_menu.style.visibility = "visible";
    stati_menu.style.visibility = "hidden";
    Click2 = false;
    Click = true;
  } else {
    bandiere_menu.style.visibility = "hidden";
    bandiere_menu.display = "none";
    Click2 = true;
  }
}
