 // Event listener for all button elements
 $("button").on("click", function () {

     // In this case, the "this" keyword refers to the button that was clicked
     var show = $(this).attr("data-name");

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

            // Before looping through and appending, clear the div
            $(".thar-be-gifs-here").html("");

             // Take the response and store it in the results variable
             var results = response.data;

             // Looping over every result item
             for (var i = 0; i < results.length; i++) {

                // Creating a div with the class "item"
                 var gifDiv = $("<div class='item'>");

                 // Storing the result item's rating
                 var rating = results[i].rating;

                 // Creating a paragraph tag with the result item's rating
                 var p = $("<p>").text("Rating: " + rating);

                 // Creating an image tag
                 var showImage = $("<img>");

                 // Giving the image tag a src attribute of a proprty pulled off the result item
                 showImage.attr("src", results[i].images.fixed_height.url);

                 // Appending the paragraph and showImage to the "gifDiv" div created in line 26
                 gifDiv.append(p);
                 gifDiv.append(showImage);

                 // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                 $(".thar-be-gifs-here").prepend(gifDiv);
             }

         });
 });