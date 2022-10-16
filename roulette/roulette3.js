document.getElementById("roulette_3_choix_1").textContent = localStorage.getItem('text_choix1')
document.getElementById("roulette_3_choix_2").textContent = localStorage.getItem('text_choix2')
document.getElementById("roulette_3_choix_3").textContent = localStorage.getItem('text_choix3')

document.getElementById("bouton_start3").addEventListener("click", () => {
    console.log('start3')
    rotation('roulette3')
  })
  
  function rotation(roue){
    document.getElementById(roue).classList = "tourne"
    random_number = Math.floor(Math.random() * (3000-1000-1)) + 1000
    console.log(random_number)
    setTimeout(() => {
        document.getElementById(roue).classList = "stop";
  },random_number)
    
  }