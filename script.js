let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 0;
function handleclick(event){
    event.preventDefault()
    const inputNumber = document.querySelector('#inputNumber')
   
    if(Number(inputNumber.value) == randomNumber){
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")
        
    }
    inputNumber.value = '';
    xAttempts++
    document.querySelector(".screen2 p").innerText = `Acertou em ${xAttempts} tentativas`;
}
const btnReset = document.querySelector("#btnReset");
const btnTry = document.querySelector("#btnTry");
btnTry.addEventListener('click', handleclick);
btnReset.addEventListener('click', function(event){
   
    document.querySelector(".screen1").classList.remove("hide")
    document.querySelector(".screen2").classList.add("hide")
    location.reload();
     
})



