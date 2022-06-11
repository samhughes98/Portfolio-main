document.addEventListener("DOMContentLoaded", function () {

  var x = document.getElementById("maincontent");
  var y = document.getElementById("maincontent1");

  const introtext = "Hi! My Name Is Sam.";
  const introtext2 = " I'm a Web Developer.";
  let letter = 0;
  let letter1 = 0;

  function typeText() {
    if (letter < introtext.length) {
      x.innerHTML += introtext.charAt(letter);
      letter++;
      setTimeout(typeText, 40);
    }
    if(letter === introtext.length) {
      if (letter1 < introtext2.length) {
      y.innerHTML += introtext2.charAt(letter1);
      letter1++;
      setTimeout(typeText, 40);
    }
  }
}
  typeText();
});
