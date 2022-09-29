let ecranVisible = document.querySelector("#ecranVisibleAffichage");

/*fonction qui calcul*/
function calcul() {
  let c1 = ecranVisible.textContent;
  if (c1.match(/^(?=.*[%])/gm)) {
    c1 = c1.replace("%", "/100");
  } else if (c1.match(/^(?=.*[X])/gi)) {
    c1 = c1.replace("x", "*");
  }
  let c2 = eval(c1);
  ecranVisible.textContent = c2;
}
/*fonction qui efface ecranVisible*/
document.querySelector("#reset").addEventListener("click", function reset() {
  ecranVisible.innerText = "";
});
//Ici je gère la mise en memoire M+
document
  .getElementById("ajouter_a_la_memoire")
  .addEventListener("click", () => (memoire = ecranVisible.textContent));
//Ici je gère la fonction de rappel memoire M
document
  .getElementById("afficher_la_valeur_mise_en_memoire")
  .addEventListener(
    "click",
    () => (memoire = ecranVisible.textContent += memoire)
  );
//affichons les valeurs à l'ecranVisible
document.querySelectorAll("#paveNumerique>button,.afficher").forEach((button) =>
  button.addEventListener("click", function afficher() {
    ecranVisible.textContent += button.textContent;
  })
);
//calculons au click sur le btn "="
document.querySelector("#calculer").addEventListener("click", calcul);
//synchronisons les fonctionalitées avec le clavier
ecranVisible.addEventListener("input", clavier);
function clavier(event) {
  let nbr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "/",
    "*",
    "Enter",
    "Backspace",
    "Delete",
  ];
  for (let i; i < nbr.length; i++) {
    if (nbr[i] == event.key && nbr[i] == "*") {
      ecranVisible.textContent += "x";
    } else if (
      nbr[i] == event.key &&
      (event.key == "Backspace" || event.key == "Delete")
    ) {
      reset();
    } else if (nbr[i] == event.key && event.key == "Enter") {
      calcul();
    } else if (nbr[i] == event.key) {
      ecranVisible.textContent += nbr[i];
    } else {
      alert("commande non autorisée");
      console.log(event.key);
    }
  }
  console.log(ecranVisible.clientWidth)
  /*figons les dimension de l'ecranVisible*/
  if (ecranVisible.clientHeight>=25.5 &&ecranVisible.clientWidth>=130) {
    ecranVisible.setAttribute("contenteditable", "false");
  }
}
