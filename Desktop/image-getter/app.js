function getimage(){
  url = "https://unsplash.com/photos/random";

  fetch(url)
    .then(function(response){
      return response.json();
    })
  .then(function(data){
    console.log(data)
  })
}
