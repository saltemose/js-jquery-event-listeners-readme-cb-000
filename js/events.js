//define functions here


function getIt() {
  $('p').on('click', function(event) {
    alert("Hey!")
  });
}

function frameIt() {
  image = $('img')
  image.on('load', function(event) {
    image.addClass('tasty')
  })
}

function pressIt() {
  $('form input[type=text]').on('keydown', function(event) {
    if(event.which == 71) {
      alert("You've pressed letter G")
    }
  })
}

function submitIt() {
  $('form').on('submit', function(event) {
    alert('Your form is going to be submitted now.')
  })
}


$(document).ready(function(){
  getIt() ;
  pressIt() ;
  submitIt() ;
  frameIt() ;

});
