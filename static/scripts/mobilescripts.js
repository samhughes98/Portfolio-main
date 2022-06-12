function introtext(){
    if (x.matches){
    if (letter < text.length) {
        y.innerHTML += text.charAt(letter);
        letter++;
        setTimeout(introtext, 60);
      }
    }
}


var x = window.matchMedia("(max-width: 768px)")
var y = document.getElementById("titlemobile")
var text = "Hi! Welcome to my portfolio website.\n"
let letter = 0;
introtext(x) // Call listener function at run time