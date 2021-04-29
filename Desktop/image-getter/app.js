function getimage(){ //gets the image from the api
  url = "https://dog.ceo/api/breeds/image/random";

  fetch(url) //returns data
    .then(function(response){
      return response.json();
    })
  .then(function(data){ //returns data as a string
    display_image(data.message);
  })
  .catch(function(error){ //displays errors
    console.log("error: " + error);
  })
}

function display_image(image_url){  //puts image link into html
  document.getElementById("image").src = image_url
}


//validates email
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  const email = $("#email").val();

  if (validateEmail(email)) {
    console.log("working");
  } else {
    alert("please enter a valid email address");
  }
}

$("#validate").on("click", validate);

//burger menu stuff



function showmenu() {
  $('.menu-container').css("display", "block");
}

function hidemenu() {
  $('.menu-container').css("display", "none");
}

$('.burger-container').on("click", showmenu)
$('.menu-container').on("click", hidemenu)
