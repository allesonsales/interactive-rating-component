const rating = document.querySelectorAll('.rating')
const button = document.querySelector('.submit')
const rateagain = document.querySelector('.rateagain')
const ratevalue = document.getElementById('number_rate')
const container = document.querySelector('.container')
const thanks = document.querySelector('.rate')

let nselecionado = document.querySelectorAll('.btn-rate')


button.addEventListener("click", () => {
    thanks.classList.remove("hidden")
    container.style.display = "none"
})

rateagain.addEventListener("click", () => {
    thanks.classList.add("hidden")
    container.style.display = "block"
})


nselecionado.forEach((rate) => {
    rate.addEventListener("click", (e) => {
        ratevalue.innerHTML = rate.innerHTML
    })
})



