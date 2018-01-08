var norm = "<img src='https://farm5.staticflickr.com/4680/39484349861_0d7dd5d849.jpg'/>";
var invert = "<img src='https://farm5.staticflickr.com/4687/39484361331_7172a5a898.jpg'/>";

function flipIt(result) {
  var randomNumber = Math.floor(Math.random()*2);

  if (randomNumber === 0) {
    // IDEA: norm
    $(".fish-image").html(norm);
  }
  else {
    // IDEA: invert
        $(".fish-image").html(invert);

  }
}
$(".fish-image").on("click", function() {
  flipIt()
}),
window.onload = flipIt();
