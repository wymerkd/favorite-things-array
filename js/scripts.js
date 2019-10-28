$(document).ready(function() {
  $('#fav-things').submit(function(event) {
    event.preventDefault();
    var favThing1 = $('#favorite-thing1').val();
    var favThing2 = $('#favorite-thing2').val();
    var favThing3 = $('#favorite-thing3').val();
    var favThing4 = $('#favorite-thing4').val();
    var favThings = [favThing1, favThing2, favThing3, favThing4];
    var bestFavThings = [];
    bestFavThings.push(favThings[1], favThings[0], favThings[2]);
    console.log(bestFavThings);
    $("ul#fav-list").append("<li>" + bestFavThings[0] + "</li>" + "<li>" + bestFavThings[1] + "</li>" + "<li>" + bestFavThings[2] + "</li>");

    var flavors = ["vanilla", "chocolate", "strawberry", "rasberry"];
    flavors.forEach(function(flavor) {
      $("ul#fav-list").append("<li>" + flavor + "</li>");
    });
  });
});
