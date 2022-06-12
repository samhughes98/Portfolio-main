document.getElementById("submitform").addEventListener("click", function(event){
    event.preventDefault();
    var namefield = document.getElementById("namefield");
    var emailfield = document.getElementById("emailfield");
    var subjectfield = document.getElementById("subjectfield");
    var msgfield = document.getElementById("msgfield");

    var namevalid = false;
    var emailvalid = false;
    var subjectvalid = false;
    var msgvalid = false;
  
    if(namefield.value == ""){
      namefield.style.border = "2px solid red";
      namefield.placeholder = "Please enter your name";
      namefield.focus();
      var contactmediv = document.getElementById("contactme");
      window.scrollTo({ top: contactmediv.offsetTop, behavior: "smooth" });
    }
    else if(namefield.value != ""){
        namefield.style.border = "none";
        namevalid = true;
    }

    if(emailfield.value == ""){
      emailfield.style.border = "2px solid red";
      emailfield.placeholder = "Please enter your email address";
      emailfield.focus();
      var contactmediv = document.getElementById("contactme");
      window.scrollTo({ top: contactmediv.offsetTop, behavior: "smooth" })
    }
    else if(emailfield.value != ""){
        emailfield.style.border = "none";
        emailvalid = true;
    }

    if(subjectfield.value == ""){
      subjectfield.style.border = "2px solid red";
      subjectfield.placeholder = "Please enter your email subject";
      subjectfield.focus();
      var contactmediv = document.getElementById("contactme");
      window.scrollTo({ top: contactmediv.offsetTop, behavior: "smooth" })
    }
    else if(subjectfield.value != ""){
        subjectfield.style.border = "none";
        subjectvalid = true;
    }

    if(msgfield.value == ""){
      msgfield.style.border = "2px solid red";
      msgfield.placeholder = "Please enter your message!";
      msgfield.focus();
      var contactmediv = document.getElementById("contactme");
      window.scrollTo({ top: contactmediv.offsetTop, behavior: "smooth" })
    }
    else if(msgfield.value != ""){
        msgfield.style.border = "none";
        msgvalid = true;
    }

    if(namevalid && emailvalid && subjectvalid && msgvalid){
        alert("message sent!");
        namefield.value = "";
        emailfield.value = "";
        subjectfield.value = "";
        msgfield.value = "";
    }

});
  