



const linkedArray = { };

let imageId = " "; //empty string for image ids so they can be global variables



const pages = function () {
      const randomPage = Math.floor(Math.random() * 10) + 1
      axios.get(`https://picsum.photos/v2/list?page=${randomPage}&limit=100`)
          .then(function(response) {
              const chosenImage = randomImage(response.data)
               imageId = chosenImage.id; //takes image id
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

$(".new-button").on("click", pages); //gets a new image by running pages()







//validates email
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  const email = $("#email").val();

  if (validateEmail(email)) {
    document.getElementById("link-button").addEventListener("click", saveEmail);


  } else {
    alert("please enter a valid email address");
  }
}

$(".link-button").on("click", validate);




//remember emails that were entered
function saveEmail() {
  var savedEmail = document.getElementById("email").value; //takes the email value
    console.log(savedEmail);
    if (linkedArray[savedEmail] === undefined) {
      linkedArray[savedEmail] = [imageId]; //creates an empty array so emails can go in, also accepts new emails
    } else {
      if (linkedArray[savedEmail].includes(imageId)) { //checks if an email already exists
        alert("email address is already assigne to this image id");
      }
       else {
         linkedArray[savedEmail].push(imageId); //adds image id to the array
          for (let i = 0; i < linkedArray[savedEmail].length; i++) {
            let idFinal = `<p> ${linkedArray[savedEmail][i]} </p>`;
            idFinal = document.getElementById("id-number").innerHTML;
          }

       }
    }
  }


  // var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
  // var text = "";
  // var i;
  // for (i = 0; i < cars.length; i++) {
  //   text += cars[i] + "<br>";
  // }
  // document.getElementById("demo").innerHTML = text;








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
