//define functions here

function getIt(){
  $('p').on('click', function(event)){
    alert('Hey!');
  });
};

function frameIt(){
  $('img').on('load', function(event){
    $('img').addClass("tasty")
  })
};

function pressIt(){
  $('input').on("keydown", function(e){
    if e.which == 71{
      alert('You pressed G!')
    }
  })
};

function submitIt(){
  $('form').on('submit', function(e){
    alert('Your form is going to be submitted now.')
  })
};

$(document).ready(function(){

// call functions here
  getIt();
  pressIt();
  submitIt();
  frameIt();

});
