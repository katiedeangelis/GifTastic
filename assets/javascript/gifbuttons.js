 // Event listener for all button elements
 $("button").on("click", function() {

     // In this case, the "this" keyword refers to the button that was clicked
     var show = $(this).attr("data-show");

      // Constructing a URL to search Giphy for the name of the show
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        show + "&api_key=dc6zaTOxFJmzC&limit=10";

     console.log(queryURL);
 });