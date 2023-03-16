let Add = document.getElementById("plus")
let count = 0

function increase1() {
    count = count + 1
    Add.innerText = count
}
function increase2() {
    count = count + 2
    Add.innerText = count
}
function increase3() {
    count = count + 3
    Add.innerText = count
}

let Topup = document.getElementById("up")
let inc = 0

function incr1() {
    inc = inc + 1
    Topup.innerText = inc
}
function incr2() {
    inc = inc + 2
    Topup.innerText = inc
}
function incr3() {
    inc = inc + 3
    Topup.innerText = inc
}

function reset() {
    count = 0
    inc = 0
    Add.innerText = count
    Topup.innerText = inc
}

