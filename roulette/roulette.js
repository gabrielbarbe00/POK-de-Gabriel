let bouton_add2 = document.getElementById("bouton_add2");
let bouton_add3 = document.getElementById("bouton_add3");
let bouton_supp3 = document.getElementById("bouton_supp3");
let bouton_supp4 = document.getElementById("bouton_supp4");
let div_choix2 = document.getElementById("div_choix2");
let div_choix3 = document.getElementById("div_choix3");
let div_choix4 = document.getElementById("div_choix4");
let text_choix1 = document.getElementById('text_choix1').value;
let text_choix2 = document.getElementById('text_choix2');
let text_choix3 = document.getElementById('text_choix3');
let text_choix4 = document.getElementById('text_choix4');
let nbr_choice = 2;

localStorage.clear()

bouton_add2.addEventListener("click", () => {
    div_choix3.style.display = "block";
    bouton_add2.style.display = "none";
    nbr_choice = 3;
})

bouton_add3.addEventListener("click", () => {
  div_choix4.style.display = "block";
  bouton_add3.style.display = "none";
  bouton_supp3.style.display = "none";
  nbr_choice = 4;
})

bouton_supp3.addEventListener("click", () => {
  div_choix3.style.display = "none";
  bouton_add2.style.display = "block";
  nbr_choice = 2;
})

bouton_supp4.addEventListener("click", () => {
  div_choix4.style.display = "none";
  bouton_add3.style.display = "block";
  bouton_supp3.style.display = "block";
  nbr_choice = 3;
})

document.getElementById("bouton_suivant").addEventListener("click", () => {
  if (nbr_choice == 2){
    /* location.href = "./roulette2.html" */
    let text_choix1 = document.getElementById('text_choix1').value
    localStorage.setItem('text_choix1',text_choix1)
    
    console.log(text_choix1)
  } else if (nbr_choice == 3){
    location.href = "./roulette3.html"
  } else if (nbr_choice == 4){
    location.href = "./roulette4.html"
  }
    
})



/* document.getElementById("bouton_start2").addEventListener("click", () => {
  console.log('start')
  rotation('roulette2')
})

function rotation(roue){
  document.getElementById(roue).classList = "tourne"
  random_number = Math.floor(Math.random() * (10000-2000-1)) + 2000
  console.log(random_number)
  setTimeout(() => {
      document.getElementById(roue).classList = "stop";
},random_number)
  
} */