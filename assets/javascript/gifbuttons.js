 // Initial array of show buttons
 var showButtons = ["Rick and Morty", "Futurama", "Bob's Burger", "Archer"];

 // Function to handle whenever a gif button is clicked
 function handleGifButtonClick() {

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
                 showImage.attr("src", results[i].images.fixed_width_still.url);

                 // Giving the image tag a data-still attribute of a proprty pulled off the result item
                 showImage.attr("data-still", results[i].images.fixed_width_still.url);

                 // Giving the image tag a data-animate attribute of a proprty pulled off the result item
                 showImage.attr("data-animate", results[i].images.fixed_height.url);

                 // Appending the paragraph and showImage to the "gifDiv" div created in line 26
                 gifDiv.append(p);
                 gifDiv.append(showImage);

                 // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                 $(".thar-be-gifs-here").prepend(gifDiv);
             }

         });
 }

 // Calling the renderButtons function to display the intial buttons
 renderButtons();

 // Function for displaying show buttons
 function renderButtons() {

     // Delete the show buttons prior to adding a new one (So there are no duplicates)
     $("#buttons-view").empty();

     // Looping through the array of shows to create buttons
     for (var i = 0; i < showButtons.length; i++) {

         // Then dynamicaly generating buttons for each show in the array
         var a = $("<button>");

         // Add type of button for bootstrap buttons
         a.attr("type", "button");
         // Adding a class of btn btn-success to our button for bootstrap buttons
         a.addClass("btn btn-success");
         // Adding a data-attribute
         a.attr("data-name", showButtons[i]);
         // Providing the initial button text
         a.text(showButtons[i]);
         // Adding the button to the buttons-view div
         $("#buttons-view").append(a);
     }

     // Once buttons are rendered bind click event to them
     $(".btn-success").on("click", handleGifButtonClick);
 }

 $("#add-gif-button").on("click", function (event) {
     event.preventDefault();

     // This line grabs the input from the textbox
     var newShow = $("#create-gif-button").val().trim();

     // Adding movie from the textbox to our array
     showButtons.push(newShow);

     // Calling renderButtons which handles the processing of the showButtons array
     renderButtons();

     $("#create-gif-button").val("");
 });