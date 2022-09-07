var form = document.querySelector('form')
var inp = document.querySelector('.inp')
var btn = document.querySelector('.btn')
var piyoda = 3.6
var velosiped = 20.1
var mashina = 70
var samalayot = 800
var soatpiyoda = document.querySelector('.humanrun')
var soatvelosiped = document.querySelector('.bike')
var soatmashina = document.querySelector('.car')
var soatsamalyot = document.querySelector('.air')

  

form.addEventListener('submit' , function(evt){
    evt.preventDefault()
    function vaqt(masofa,tezlik){
        var soat = +Math.floor(masofa/tezlik)
        var minut = +Math.floor((masofa/tezlik - soat)*60)
        var secund = +Math.floor(((masofa/tezlik - soat)*60 - minut)*60)
            return `${soat} soat ${minut} minut ${secund} secund`;
    }
     var km = +inp.value
   soatpiyoda.textContent = vaqt(km,piyoda)
   soatvelosiped.textContent = vaqt(km,velosiped)
   soatmashina.textContent = vaqt(km,mashina)
   soatsamalyot.textContent = vaqt(km,samalayot)
})

