$(document).ready(function() {
  var battle = new Audio("battle.mp3");
  $("button#battle-beasts").click(function() {
    function demo() {
      battle.play();
      //await sleep(1000);
      if (odds > 0.5) {
        console.log('dog win');
        $("ul#dog").prepend("<li class='list-group-item'>Woof Woof!</li>")
      } else {
        $("ul#cat").prepend("<li class='list-group-item'>Meow Meow!</li>")
        console.log('cat win');
      }
    }
    for (var i = 0; i < 20; i++){
      console.log(odds)
      var odds = Math.random();
      demo();
    }
  });
  $("button#dog-button").click(function() {
    $("ul#dog").prepend("<li class='list-group-item'>Woof Woof!</li>")
  });
  $("button#cat-button").click(function() {
    $("ul#cat").prepend("<li class='list-group-item'>Meow Meow!</li>")
  });

  $("h1").click(function() {
    $(this).next().toggleClass("img-toggle");
  });
});
