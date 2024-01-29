var elInp = document.querySelector('.inp')
var elRes = document.querySelector('.p_child')
var elBtn = document.querySelector('.btn')
var elRes1 = document.querySelector('.res1')
var elRes2 = document.querySelector('.res2')
var elRes3 = document.querySelector('.res3')
var elRes4 = document.querySelector('.res4')



function fn() {
    var Inp = elInp.value * 1

    if (Inp / 4) {
        elRes1.textContent = Inp / 4
    } else {
        elRes1.textContent = "N time"
    }
    if (Inp / 20) {
        elRes2.textContent = Inp / 20
    } else {
        elRes2.textContent = "N time"
    }
    if (Inp / 100) {
        elRes3.textContent = Inp / 100
    } else {
        elRes3.textContent = "N time"
    }
    if (Inp / 800) {
        elRes4.textContent = Inp / 800
    } else {
        elRes4.textContent = "N time"
    }
    elInp.value = ''
    elInp.focus()
    
    

}

