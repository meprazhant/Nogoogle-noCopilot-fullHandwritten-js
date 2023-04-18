var prev = ""
var log = document.getElementById("log")
var pre = document.getElementById("prevval")
function clicked(e) {
    var val = e.target.innerText
    prev = prev + val
    log.innerText = prev
}

function clearText() {
    prev = ""
    log.innerText = ""
    pre.innerText = ""
}

function backSpace() {
    prev = prev.slice(0, -1)
    log.innerText = prev

}

function calc(e) {
    log.innerText = ""
    var operator = e.target.innerText
    pre.innerText = prev + " " + operator
    prev = ""
}


function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}

function calculate() {
    var pree = pre.innerText
    var oper = (pree.slice(-1))
    var val1 = parseFloat(pree.split(" ")[0])
    var val2 = parseFloat(prev)
    var output = ""
    try {
        if (oper == "+") {
            output = add(val1, val2)
        } else if (oper == "-") {
            output = subtract(val1, val2)
        } else if (oper == '*') {
            output = multiply(val1, val2)
        } else if (oper == "/") {
            output = divide(val1, val2)
        } else {
            output == "Broken"
        }
        pre.innerText = ""
        prev = output
        log.innerText = output
    } catch (error) {
        log.innerText == error
    }

}