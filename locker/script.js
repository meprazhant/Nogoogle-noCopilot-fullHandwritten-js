var ALphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function nextalpha(a) {
    var cur = document.getElementById("cur" + a);
    var curindex = ALphabet.indexOf(cur.innerText);
    if (curindex == 25) {
        curindex = 0;
    }
    cur.innerText = ALphabet[curindex + 1];
    var next = document.getElementById("next" + a);
    var prev = document.getElementById("prev" + a);
    prev.innerText = ALphabet[curindex];
    next.innerText = ALphabet[curindex + 2];

    if (curindex == 24) {
        next.innerText = "A";
    }
    if (curindex == 0) {
        prev.innerText = "Z";
    }

    checksum();


}

function prevalpha(a) {
    var cur = document.getElementById("cur" + a);
    var curindex = ALphabet.indexOf(cur.innerText);
    if (curindex == 0) {
        curindex = 25;
    }
    cur.innerText = ALphabet[curindex - 1];
    var next = document.getElementById("next" + a);
    var prev = document.getElementById("prev" + a);
    prev.innerText = ALphabet[curindex - 2];
    next.innerText = ALphabet[curindex];
    if (curindex == 1) {
        prev.innerText = "Z";
    }
    if (curindex == 25) {
        next.innerText = "A";
    }
    checksum();
}

function checksum() {
    var cur1 = document.getElementById("cur1").innerText;
    var cur2 = document.getElementById("cur2").innerText;
    var cur3 = document.getElementById("cur3").innerText;
    var cur4 = document.getElementById("cur4").innerText;
    var cur5 = document.getElementById("cur5").innerText;
    var khuljaa = document.getElementById("khuljaa");

    var output = (cur1 + cur2 + cur3 + cur4 + cur5);

    if (output == "TUDUM") {
        khuljaa.style.display = "block";
    }
}