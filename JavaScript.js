'use strict'

function changeIcon(){
    var IconHamburger = document.getElementById("icon-hamburger");
    if (IconHamburger.src == "file:///D:/XeroAMV/Practicas/bookmark-landing-page-master/images/icon-hamburger.svg" ){
        IconHamburger.src = "images/icon-close.svg";
        ActivateBackground();
        document.getElementById("nav").style.display = "flex";
        document.getElementById("icons").style.display = "block";
        document.getElementById("logo").style.filter = "brightness(0) invert(1)";
    }
    else{
        IconHamburger.src = "images/icon-hamburger.svg";
        DeactivateBackground();
        document.getElementById("nav").style.display = "none";
        document.getElementById("icons").style.display = "none";
        document.getElementById("logo").style.filter = "none";
    }
}

function ActivateBackground(){
    var BackGround = document.getElementById("background-for-mobile");
    BackGround.style.backgroundColor = "#182DA8";
    

}

function DeactivateBackground(){
    var BackGround = document.getElementById("background-for-mobile");
    BackGround.style.backgroundColor = "inherit";

}


function ActiveHr(id){
    var hr = document.getElementById(id);
    
    if (hr.style.display == "block"){
        hr.style.display = "block";
    }
    if(VerificationDisplayHr() == true){
        hr.style.display = "block";
    }
    else{
        document.getElementById("line-1").style.display = "none";
        document.getElementById("line-2").style.display = "none";
        document.getElementById("line-3").style.display = "none";
        hr.style.display = "block";

    }
    ChagenElements(id);
}

function VerificationDisplayHr(){
    var acum;
    var hr1 = document.getElementById("line-1");
    var hr2 = document.getElementById("line-2");
    var hr3 = document.getElementById("line-3");

    if (hr1.style.display == "none" && hr2.style.display == "none" && hr3.style.display == "none"){
        acum = true; 
    }
    if (hr1.style.display == "block" || hr2.style.display == "block" || hr3.style.display == "block"){
        acum = false;
    }
    return acum;      
}

function ChagenElements(id){
    var title = document.getElementById("title-2");
    var paragraph = document.getElementById("paragraph-2");
    var illustration = document.getElementById("illustration-features");

    if (id == "line-1"){
        title.innerHTML = "Bookmark in one click";
        paragraph.innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";    
        illustration.src="images/illustration-features-tab-1.svg";
    }
    if (id == "line-2"){
        title.innerHTML = "Intelligent search";
        paragraph.innerHTML = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";    
        illustration.src="images/illustration-features-tab-2.svg";
    }
    if (id == "line-3"){
        title.innerHTML = "Share your bookmarks";
        paragraph.innerHTML = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";    
        illustration.src="images/illustration-features-tab-3.svg";
    }
    
}



function ChangeArrowAndParagraph(idArrow,idParagraph){
    ChangeArrow (idArrow);
    ChangeDisplayParagraph(idParagraph);       
}

function ChangeArrow (idArrow){
    var Arrow = document.getElementById(idArrow);
    if(Arrow.style.transform == "rotate(180deg)" ){
        Arrow.style.transform = "rotate(0)";
        Arrow.style.filter = "none";
    }
    else{
        ResetArrows();
        Arrow.style.transform = "rotate(180deg)";
        Arrow.style.filter =  "invert(39%) sepia(90%) saturate(1250%) hue-rotate(325deg) brightness(97%) contrast(94%)";
    }
}


function ResetArrows(){
    var Arrow1 = document.getElementById("Question1-arrow");
    var Arrow2 = document.getElementById("Question2-arrow");
    var Arrow3 = document.getElementById("Question3-arrow");
    var Arrow4 = document.getElementById("Question4-arrow");

        Arrow1.style.transform = "rotate(0)";
        Arrow2.style.transform = "rotate(0)";
        Arrow3.style.transform = "rotate(0)";
        Arrow4.style.transform = "rotate(0)";

        Arrow1.style.filter = "none";
        Arrow2.style.filter = "none";
        Arrow3.style.filter = "none";
        Arrow4.style.filter = "none";

}

function ChangeDisplayParagraph(idParagraph){
    var Paragraph = document.getElementById(idParagraph);
    if (Paragraph.style.display != "block"){
        VerificationDisplayParagraph()
        Paragraph.style.display = "block";
    }
    else{
        Paragraph.style.display = "none";
    }
}


function VerificationDisplayParagraph(){
    var Paragraph1 = document.getElementById("Question1-Answer");
    var Paragraph2 = document.getElementById("Question2-Answer");
    var Paragraph3 = document.getElementById("Question3-Answer");
    var Paragraph4 = document.getElementById("Question4-Answer");

    Paragraph1.style.display = "none";
    Paragraph2.style.display = "none";
    Paragraph3.style.display = "none";
    Paragraph4.style.display = "none";
}


function Email(){
    var email = document.getElementById("email");
    var body = document.getElementById("body");
    
    
    if(screen.width == 1024){   
        if(ValidateEmail(email.value) == false){ 
            console.log("computadora Activado");         
            document.getElementById("background-error").style.display = "block";
            document.getElementById("message-of-error").style.display = "block";
            document.getElementById("icon-error").style.display = "block";
            document.getElementById("Contact-Us").style.marginLeft = "15px";
            document.getElementById("background").style.border = "2px solid #fb5859";
        }
        else{
            console.log("computadora DesActivado"); 
            email.value = "";
            document.getElementById("background-error").style.display = "none";
            document.getElementById("message-of-error").style.display = "none";
            document.getElementById("icon-error").style.display = "none";
            document.getElementById("background").style.border = "none";
            document.getElementById("Contact-Us").style.marginLeft = "270px";
        }
    }

    else{
        console.log("hola");
        if(ValidateEmail(email.value) == false){     
            ForMobile();
            document.getElementById("background-error").style.display = "block";
            document.getElementById("message-of-error").style.display = "block";
            document.getElementById("icon-error").style.display = "block";
            document.getElementById("background").style.border = "2px solid #fb5859";
        }
        else{
            console.log("asd");
            ForMobileDeactive();
            email.value = "";
            document.getElementById("background-error").style.display = "none";
            document.getElementById("message-of-error").style.display = "none";
            document.getElementById("icon-error").style.display = "none";
            document.getElementById("background").style.border = "none";
        }
    }
    

}

function ForMobile(){  
    document.getElementById("Contact-Us").style.marginTop = "-50px"
    document.getElementById("Contact-Us").style.marginLeft = "265px"     
}

function ForMobileDeactive(){
    document.getElementById("Contact-Us").style.marginTop = "0"
    document.getElementById("Contact-Us").style.marginLeft = "265px" 
}


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}