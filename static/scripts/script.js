document.addEventListener("DOMContentLoaded", function () {
  //on page load print stylised title
  var x = document.getElementById("maincontent");
  var y = document.getElementById("maincontent1");
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  const introtext = "Hi! My Name Is Sam.\n";
  const introtext2 = " I'm a Web Developer.";
  let letter = 0;
  let letter1 = 0;

  function typeText() {
    if (letter < introtext.length) {
      x.innerHTML += introtext.charAt(letter);
      letter++;
      setTimeout(typeText, 40);
    }
    if (letter === introtext.length) {
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

const el = document.getElementById("instagram");

const hiddenDiv = document.getElementById("popup1");

el.addEventListener("mouseover", function handleMouseOver() {
  hiddenDiv.style.display = "block";
  hiddenDiv.style.animation = "grow2 1.5s";
});

el.addEventListener("mouseout", function handleMouseOut() {
  hiddenDiv.style.display = "none";
});

const el1 = document.getElementById("facebook");

const hiddenDiv1 = document.getElementById("popup2");

el1.addEventListener("mouseover", function handleMouseOver1() {
  hiddenDiv1.style.display = "block";
  hiddenDiv1.style.animation = "grow2 1.5s";
});

el1.addEventListener("mouseout", function handleMouseOut1() {
  hiddenDiv1.style.display = "none";
});

const el2 = document.getElementById("twitter");

const hiddenDiv2 = document.getElementById("popup3");

el2.addEventListener("mouseover", function handleMouseOver2() {
  hiddenDiv2.style.display = "block";
  hiddenDiv2.style.animation = "grow2 1.5s";
});

el2.addEventListener("mouseout", function handleMouseOut2() {
  hiddenDiv2.style.display = "none";
});

const el3 = document.getElementById("linkedin");

const hiddenDiv3 = document.getElementById("popup4");

el3.addEventListener("mouseover", function handleMouseOver3() {
  hiddenDiv3.style.display = "block";
  hiddenDiv3.style.animation = "grow2 1.5s";
});

el3.addEventListener("mouseout", function handleMouseOut3() {
  hiddenDiv3.style.display = "none";
});

const el4 = document.getElementById("google");

const hiddenDiv4 = document.getElementById("popup5");

el4.addEventListener("mouseover", function handleMouseOver4() {
  hiddenDiv4.style.display = "block";
  hiddenDiv4.style.animation = "grow2 1.5s";
});

el4.addEventListener("mouseout", function handleMouseOut4() {
  hiddenDiv4.style.display = "none";
});

const el5 = document.getElementById("youtube");

const hiddenDiv5 = document.getElementById("popup6");

el5.addEventListener("mouseover", function handleMouseOver5() {
  hiddenDiv5.style.display = "block";
  hiddenDiv5.style.animation = "grow2 1.5s";
});

el5.addEventListener("mouseout", function handleMouseOut5() {
  hiddenDiv5.style.display = "none";
});

var clearlines = document.getElementById("aboutmeline");
var clearlines1 = document.getElementById("myprojline");
var clearlines2 = document.getElementById("mylinksline");
var clearlines3 = document.getElementById("contactmeline");

//scroll functions
function contactmescrollbtn() {
  var contactmedivbtn = document.getElementById("contactme");
  contactmedivbtn.style.display = "block";
  window.scrollTo({ top: 4000, behavior: "smooth" });
}

const ScrollToHome = () => {
  window.scrollTo(0, 0);

  clearlines.style.borderBottom = "none";
  clearlines.style.animation = "none";
  clearlines1.style.borderBottom = "none";
  clearlines1.style.animation = "none";
  clearlines2.style.borderBottom = "none";
  clearlines2.style.animation = "none";
  clearlines3.style.borderBottom = "none";
  clearlines3.style.animation = "none";
};
const scrollToAm = () => {
  var aboutmediv = document.getElementById("aboutme");
  var aboutmeline = document.getElementById("aboutmeline");
  aboutmeline.style.borderBottom = "2px solid grey";
  aboutmeline.style.animation = "grow 1s forwards";
  aboutmediv.style.display = "block";
  window.scrollTo({ top: aboutmediv.offsetTop, behavior: "smooth" });

  clearlines1.style.borderBottom = "none";
  clearlines1.style.animation = "none";
  clearlines2.style.borderBottom = "none";
  clearlines2.style.animation = "none";
  clearlines3.style.borderBottom = "none";
  clearlines3.style.animation = "none";
};

const scrollToProj = () => {
  var myprojdiv = document.getElementById("myproj");
  var myprojline = document.getElementById("myprojline");
  myprojline.style.borderBottom = "2px solid grey";
  myprojline.style.animation = "grow 1s forwards";
  myprojdiv.style.display = "block";
  window.scrollTo({ top: myprojdiv.offsetTop, behavior: "smooth" });

  clearlines.style.borderBottom = "none";
  clearlines.style.animation = "none";
  clearlines2.style.borderBottom = "none";
  clearlines2.style.animation = "none";
  clearlines3.style.borderBottom = "none";
  clearlines3.style.animation = "none";
};

const scrollToLinks = () => {
  var mylinksdiv = document.getElementById("mylinks");
  var mylinksline = document.getElementById("mylinksline");
  mylinksline.style.borderBottom = "2px solid grey";
  mylinksline.style.animation = "grow 1s forwards";
  mylinksdiv.style.display = "block";
  window.scrollTo({ top: mylinksdiv.offsetTop, behavior: "smooth" });

  clearlines1.style.borderBottom = "none";
  clearlines1.style.animation = "none";
  clearlines.style.borderBottom = "none";
  clearlines.style.animation = "none";
  clearlines3.style.borderBottom = "none";
  clearlines3.style.animation = "none";
};

const scrollToContact = () => {
  var contactmediv = document.getElementById("contactme");
  var contactmeline = document.getElementById("contactmeline");
  contactmeline.style.borderBottom = "2px solid grey";
  contactmeline.style.animation = "grow 1s forwards";
  contactmediv.style.display = "block";
  window.scrollTo({ top: contactmediv.offsetTop, behavior: "smooth" });

  clearlines1.style.borderBottom = "none";
  clearlines1.style.animation = "none";
  clearlines2.style.borderBottom = "none";
  clearlines2.style.animation = "none";
  clearlines.style.borderBottom = "none";
  clearlines.style.animation = "none";
};

function testScroll(ev) {
  var scrollerarrows = document.getElementById("scroller1");
  if (window.pageYOffset > 700) {
    var aboutmediv = document.getElementById("aboutme");
    scrollerarrows.style.display = "none";
    aboutmediv.style.display = "block";
  }

  if (window.pageYOffset > 1400) {
    var myprojdiv = document.getElementById("myproj");
    myprojdiv.style.display = "block";
  }

  if (window.pageYOffset > 2200) {
    var mylinksdiv = document.getElementById("mylinks");
    mylinksdiv.style.display = "block";
  }

  if (window.pageYOffset > 2600) {
    var contactmediv = document.getElementById("contactme");
    contactmediv.style.display = "block";
  }

  if(window.pageYOffset < 100){
    scrollerarrows.style.display = "block";
  }
}

var img1 = document.getElementById("projimg1");
var img1caption = document.getElementById("img1caption");

img1.onmouseover = function () {
 img1caption.style.display = "block";
};

var img2 = document.getElementById("projimg2");
var img2caption = document.getElementById("img2caption");

img2.onmouseover = function () {
 img2caption.style.display = "block";
};


var img3 = document.getElementById("projimg3");
var img3caption = document.getElementById("img3caption");

img3.onmouseover = function () {
 img3caption.style.display = "block";
};

img1caption.style.display = "none";
img2caption.style.display = "none";
img3caption.style.display = "none";





window.onscroll = testScroll;
