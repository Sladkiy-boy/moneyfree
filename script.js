let btnMoney = document.querySelector(".button__money")
let modalMoney = document.querySelector(".block_money-modal")
let btnClose = document.querySelector(".close_money")
btnMoney.addEventListener("click" , () => {
    alert("Йде зарахування грошей")
    modalMoney.classList.toggle("active")
})

btnClose.addEventListener("click" , () =>{
    modalMoney.classList.remove("active")
})

