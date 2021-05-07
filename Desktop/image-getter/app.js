
const pages = function () {
      const randomPage = Math.floor(Math.random() * 10) + 1
      axios.get(`https://picsum.photos/v2/list?page=${randomPage}&limit=100`)
          .then(function(response) {
              const chosenImage = randomImage(response.data)

               document.getElementById("number").innerHTML = chosenImage.id;
               document.getElementById("name").innerHTML = chosenImage.author;
               document.getElementById("image").src = chosenImage.download_url;
               document.getElementById("imgwidth").innerHTML = chosenImage.width;
               document.getElementById("imgheight").innerHTML = chosenImage.height;
               document.getElementById("unsplash").href = chosenImage.url;
        });
    }

const randomImage = function (array) {
  const imageNumber = Math.floor(Math.random() * (array.length - 1));
  const chosenImage = array[imageNumber]
    return chosenImage
}

window.onload = pages();

$(".new-button").on("click", pages);












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

$(".link-button").on("click", validate);


//makes the input popup appear
function showpopup() {
  $(".popup").css("visibility", "visible");
  $(".triangle").css("visibility", "visible");
}

$(".assign-button").on("click", showpopup);

//makes the input popup disappear
function hidepopup() {
  $(".popup").css("visibility", "hidden");
  $(".triangle").css("visibility", "hidden");
}

$(".cancel-button").on("click", hidepopup);


//jquery for input section icon animations









//burger menu stuff

function showmenu() {
  $('.menu-container').css("display", "block");
  $('#burger1').toggleClass('burger1-animate')
  $('#burger2').toggleClass('burger2-animate')
  $('#burger3').toggleClass('burger3-animate')
}

function hidemenu() {
  $('.menu-container').css("display", "none");
  $('#burger1').toggleClass('burger1-animate')
  $('#burger2').toggleClass('burger2-animate')
  $('#burger3').toggleClass('burger3-animate')

}

$('.burger-container').on("click", showmenu)
$('.menu-container').on("click", hidemenu)
