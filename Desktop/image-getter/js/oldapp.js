"use strict";

var linkedArray = {};
var imageId = " "; //empty string for image ids so they can be global variables

var pages = function pages() {
  var randomPage = Math.floor(Math.random() * 10) + 1;
  axios.get("https://picsum.photos/v2/list?page=".concat(randomPage, "&limit=100")).then(function (response) {
    var chosenImage = randomImage(response.data);
    imageId = chosenImage.id; //takes image id

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

  } else {
    alert("please enter a valid email address");
  }
}

$(".link-button").on("click", validate); //function that is later called to add id


//function called for h6 element (user entered email)
function emailH6() {
  var h6 = document.createElement("h6"); //creates h6 element
  var mailNode = document.createTextNode(email)//adds the email to it
  document.getElementById("email-list").appendChild(h6) //adds it to existing list
  h6.setAttribute("class", "email-pop"); //adds the class used later
  h6.setAttribute("id", email); //adds the email as it's own id
  h6.appendChild(email); //adds user entered email into h6
}

function imageidP() {
  var p = document.createElement("p"); //creates p element
  p.setAttribute("id", imageId); //adds image id to itself
  p.appendChild(imageId); //adds user entered email into h6
  h6.appendChild(p)
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
