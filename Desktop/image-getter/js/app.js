"use strict";

var linkedArray = {};
var imageId = " "; //empty string for image ids so they can be global variables
var unsplashLink = " ";

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

//validates email
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var email = $("#email").val();

  if (validateEmail(email)) {
    saveEmail();

  } else {
    alert("please enter a valid email address");
  }
}


$(".link-button").on("click", validate); //function that is later called to add id

// function applyId(id, email) {
  var container = document.getElementById(email);
//   var p = document.createElement("p"); //creates p element
//
//   p.appendChild(document.createTextNode(imageId));
//
//   container.appendChild(p); //applies it to the page
// } //function that is later called to add email


function mailDiv(theEmail, container) {
  var h6 = document.createElement("h6"); //creates h6 element
  $(h6).append("".concat(theEmail)); //adds in value
  container.appendChild(h6); //applies it to the page
  h6.setAttribute("class", "email-pop"); //adds the class used later
  console.log("email h6 created and populated");
  return h6;
}



// adds email and ids
function saveEmail() {
  var savedEmail = document.getElementById("email").value; //takes the email value


  function popmenu(theId, container) {
    alert("link successful!");
    //creates div and puts imageid in it as text
    var div = document.createElement("div");
    var imageP = document.createElement("p"); //creates a <p> for the id to sit in
    var unsplashAnchor = document.createElement("a"); //creates <a> for the link

    div.setAttribute("class", "pop-menu");
    div.setAttribute("id", savedEmail);
    container.appendChild(div);
    imageP.setAttribute("id", imageId);


    div.appendChild(imageP);


    unsplashAnchor.appendChild(document.createTextNode(theId));
    unsplashAnchor.setAttribute("href", unsplashLink);
    unsplashAnchor.setAttribute("target", '_blank');


    imageP.appendChild(unsplashAnchor);
    return div;
  }


  if (linkedArray[savedEmail] === undefined) {


    var emailId = document.createElement("div"); //creates div for emails and id to sit in
    linkedArray[savedEmail] = [imageId]; //creates an empty array so emails can go in, also accepts new emails

    emailId.setAttribute("class", "email-and-id"); //adds the class

    document.getElementById("email-list").appendChild(emailId); //adds the image id

    var newP = mailDiv(savedEmail, emailId);
    var newDiv = popmenu(imageId, emailId);



    newP.addEventListener("click", function () {
      //allows the email to be clicked on
      $(newDiv).toggle(); //toggles id list

    });
  } else {

    document.getElementById(emailId);
    //query selector to find div that contains unique email
    //emailId equal to ^


    if (linkedArray[savedEmail].includes(imageId)) {
      //checks if an email already exists
      alert("email address is already assigned to this image id");
    } else {
      linkedArray[savedEmail].push(imageId); //adds image id to the array

      popmenu(imageId, emailId); //appends id to id array
    }
  }
}






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
