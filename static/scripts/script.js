document.addEventListener("DOMContentLoaded", function () {
  //on page load print stylised title
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

var aboutmecount = 0;

const el = document.getElementById('instagram');

const hiddenDiv = document.getElementById('popup1');

el.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv.style.display = 'block';
});

el.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv.style.display = 'none';
});

const el1 = document.getElementById('facebook');

const hiddenDiv1 = document.getElementById('popup2');

el1.addEventListener('mouseover', function handleMouseOver1() {
  hiddenDiv1.style.display = 'block';
});

el1.addEventListener('mouseout', function handleMouseOut1() {
  hiddenDiv1.style.display = 'none';
});


const el2 = document.getElementById('twitter');

const hiddenDiv2 = document.getElementById('popup3');

el2.addEventListener('mouseover', function handleMouseOver2() {
  hiddenDiv2.style.display = 'block';
});

el2.addEventListener('mouseout', function handleMouseOut2() {
  hiddenDiv2.style.display = 'none';
});

const el3 = document.getElementById('linkedin');

const hiddenDiv3 = document.getElementById('popup4');

el3.addEventListener('mouseover', function handleMouseOver3() {
  hiddenDiv3.style.display = 'block';
});

el3.addEventListener('mouseout', function handleMouseOut3() {
  hiddenDiv3.style.display = 'none';
});

const el4 = document.getElementById('google');

const hiddenDiv4 = document.getElementById('popup5');

el4.addEventListener('mouseover', function handleMouseOver4() {
  hiddenDiv4.style.display = 'block';
});

el4.addEventListener('mouseout', function handleMouseOut4() {
  hiddenDiv4.style.display = 'none';
});

const el5 = document.getElementById('youtube');

const hiddenDiv5 = document.getElementById('popup6');

el5.addEventListener('mouseover', function handleMouseOver5() {
  hiddenDiv5.style.display = 'block';
});

el5.addEventListener('mouseout', function handleMouseOut5() {
  hiddenDiv5.style.display = 'none';
});


  //scroll functions
  const scrollToAm = () => {
    const scrollaboutme = document.getElementById('aboutmebtn');
    scrollaboutme.addEventListener('click', () => {
      var scrollDiv = document.getElementById("aboutme").offsetTop;
      window.scrollTo({ top: 930, behavior: 'smooth'});
    });
  };


  function testScroll(ev){
    if(window.pageYOffset > 500){
      var aboutmediv = document.getElementById("aboutme");
      aboutmediv.style.display = "block";
  }
}

  window.onscroll=testScroll
