$(document).ready(function(){

  // $(document).on('mouseover','.line', function(){
  // //   $(this).css('outline', 'solid 2px blue');
  // // })
  //   var randomClass = getRandomClass();
  // $(document).on({
  //   hover: function(){
  //     $('.line', this).addClass(randomClass);
  //   }
  // })

function getRandomClass() {
  var classes = new Array("green", "blue", "yellow", "purple", "red");

  var randomNumber = Math.floor(Math.random()*6);

  return classes[randomNumber];
}


});
