document.getElementById("bouton_start2").addEventListener("click", () => {
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
    
  }