 // Event listener for all button elements
 $("button").on("click", function () {

     // In this case, the "this" keyword refers to the button that was clicked
     var show = $(this).attr("data-show");

     // Constructing a URL to search Giphy for the name of the show
     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
         show + "&api_key=dc6zaTOxFJmzC&limit=10";

     // Performing our AJAX GET request
     $.ajax({
             url: queryURL,
             method: "GET"
         })

         // After the data comes back from the API
         .done(function (response) {

             // Take the response and store it in the results variable
             var results = response.data;

             console.log(results);

         });
 });