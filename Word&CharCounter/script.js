let text= document.getElementById("text");
let word = document.getElementById("word");
let char = document.getElementById("char");
text.addEventListener("input", function(){
    let textval = this.value;
    let sizechar = textval.length;
    char.innerHTML = sizechar; 
    textval = textval.trim();
    let wordval = textval.split(" ");
    let finalword = wordval.filter(function(data){
        return data!="";
    })
    word.innerHTML = finalword.length;
})