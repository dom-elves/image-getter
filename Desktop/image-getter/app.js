



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


//function that is later called to add id
function applyId(id, email) {
        let container = document.getElementById(email);
        let p = document.createElement("p") //creates p element
          p.append(`${imageId}`) //adds in value
          container.append(p); //applies it to the page
        }

//function that is later called to add email
function mailDiv(theEmail, container) {
        let p = document.createElement("h6") //creates p element
        p.append(`${theEmail}`) //adds in value
        container.append(p); //applies it to the page
        p.setAttribute("class", "email-pop"); //adds the class used later
        return p;
      }



// adds email and ids
function saveEmail() {
  var savedEmail = document.getElementById("email").value; //takes the email value
    if (linkedArray[savedEmail] === undefined) {
      linkedArray[savedEmail] = [imageId]; //creates an empty array so emails can go in, also accepts new emails

      let emailId = document.createElement("div") //creates div for emails and id to sit in
      emailId.setAttribute("class", "email-and-id") //adds the class
      document.getElementById("email-list").append(emailId) //adds the image id

      const newP = mailDiv(savedEmail, emailId);
      const newDiv = popmenu(imageId, emailId);

              function popmenu(theId, container) { //creates div and puts imageid in it as text

                let div = document.createElement("div") //creats the div for the email
                div.setAttribute("class", "pop-menu");
                div.setAttribute("id", savedEmail);
                container.append(div)

                let imageP = document.createElement("p") //creates a <p> for the id to sit in
                imageP.append(theId)
                div.append(imageP)

                return div;
              }


      newP.addEventListener("click", function() { //allows the email to be clicked on
          $(newDiv).toggle(); //toggles id list
      })


    } else {
      if (linkedArray[savedEmail].includes(imageId)) { //checks if an email already exists
        alert("email address is already assigned to this image id");
      }
       else {
         linkedArray[savedEmail].push(imageId); //adds image id to the array
           applyId(imageId, savedEmail); //appends id to id array
         }
       }
     }














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
  $('.menu-container').css("visibility", "visible");
  $('#burger1').toggleClass('burger1-animate')
  $('#burger2').toggleClass('burger2-animate')
  $('#burger3').toggleClass('burger3-animate')
}

function hidemenu() {
  $('.menu-container').css("visibility", "hidden");
  $('#burger1').toggleClass('burger1-animate')
  $('#burger2').toggleClass('burger2-animate')
  $('#burger3').toggleClass('burger3-animate')

}

$('.burger-container').on("click", showmenu)
$('.empty').on("click", hidemenu)
