$(document).ready(function() {
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
