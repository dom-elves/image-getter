"use strict";


//----getting pages from unsplash
var pages = function pages() {
  var randomPage = Math.floor(Math.random() * 10) + 1;
  axios.get("https://picsum.photos/v2/list?page=".concat(randomPage, "&limit=100")).then(function (response) {
    var chosenImage = randomImage(response.data);
    imageId = chosenImage.id; //takes image id
    unsplashLink = chosenImage.url;

    document.getElementById("number").innerHTML = chosenImage.id;
    document.getElementById("name").innerHTML = chosenImage.author;
    document.getElementById("image").src = chosenImage.download_url;
    document.getElementById("imgwidth").innerHTML = chosenImage.width;
    document.getElementById("imgheight").innerHTML = chosenImage.height;
    document.getElementById("unsplash").href = chosenImage.url;
  });
};

var randomImage = function randomImage(array) {
var imageNumber = Math.floor(Math.random() * (array.length - 1));
var chosenImage = array[imageNumber];
return chosenImage;
};

window.onload = pages();
$(".new-button").on("click", pages); //gets a new image by running pages()


//----glboal variables used for assigning------
var imageId = " "; //empty string for image ids so they can be global variables
var unsplashLink = " ";
var email = $("#email").val(); //taken from whatever is entered into the email input box
var emailArray = [ ];

//validates email
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}



function validate() {
  var email = $("#email").val();
    if (validateEmail(email)) { //top 3 lines & final else statement are email validation - do not delete/change
      emailArray.push(email);
        if (emailArray.includes(email)) {

        }






    } else { //below here is email validation - do not delete or change
      alert("please enter a valid email address");
    }
}





$(".link-button").on("click", validate); //function that is later called to add id


function emailIdContainer() {
  var email = $("#email").val(); //takes user entered email as a variable
  var container = document.createElement("div"); //makes a div
    document.getElementById("email-list").appendChild(container)
    container.setAttribute("class", "email-and-id"); //div attributes used later
    container.setAttribute("id", email); //adds the email as it's own id



  var h6 = document.createElement("h6"); //creates h6 element
  var mailNode = document.createTextNode(email)//adds the email to it
    document.getElementById(email).appendChild(h6) //adds it to existing list
    h6.setAttribute("class", "email-pop"); //adds the class used later
    h6.appendChild(mailNode); //adds user entered email into h6

}

// function imageIdP() {
//   var p = document.createElement("p");
//   var pNode = document.createTextNode(imageId)
//     document.getElementById("dom_elves@hotmail.co.uk").appendChild(p)
//     p.appendChild(pNode);
// }


// //function called for h6 element (user entered email)
// function emailH6() {
//   var email = $("#email").val();
//   var h6 = document.createElement("h6"); //creates h6 element
//   document.getElementById("email-and-id").appendChild(h6); //adds it to existing list
//   h6.setAttribute("class", "email-pop"); //adds the class used later
//   h6.innerHTML = email;
// }


// function imageidP() {
//   var email = $("#email").val();
//   var p = document.createElement("p"); //creates p element
//   // document.getElementById("{$$("#email").val()}").appendChild(p));
//   p.setAttribute("id", imageId); //adds image id to itself
//   p.appendChild(imageId); //adds user entered email into h6
//   h6.appendChild(p)
// }

//
// function unsplashLink() {
//   var unsplashAnchor = document.createElement("a");
//   unsplashAnchor.appendChild(document.createTextNode(imageId));
//   unsplashAnchor.setAttribute("href", unsplashLink);
//   unsplashAnchor.setAttribute("target", '_blank');
//   p.appendChild(unsplashAnchor)
// }










//makes the input popup appear
function showpopup() {
  $(".popup").css("visibility", "visible");
  $(".triangle").css("visibility", "visible");
}

$(".assign-button").on("click", showpopup); //makes the input popup disappear

function hidepopup() {
  $(".popup").css("visibility", "hidden");
  $(".triangle").css("visibility", "hidden");
}



$(".cancel-button").on("click", hidepopup); //burger menu stuff

function showmenu() {
  $('.menu-container').css("visibility", "visible");
  $('#burger1').toggleClass('burger1-animate');
  $('#burger2').toggleClass('burger2-animate');
  $('#burger3').toggleClass('burger3-animate');
}

function hidemenu() {
  $('.menu-container').css("visibility", "hidden");
  $('#burger1').toggleClass('burger1-animate');
  $('#burger2').toggleClass('burger2-animate');
  $('#burger3').toggleClass('burger3-animate');
}

$('.burger-container').on("click", showmenu);
$('.empty').on("click", hidemenu);



//mq for popup reappearing

function mqpopup() {
  $(".popup").css("visibility", "visibile")
}
