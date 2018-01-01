// Initial array of show buttons
var showButtons = ["Rick and Morty", "Futurama", "Bob's Burger", "Archer"];

$("#add-gif-button").on("click", function (event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var newGifButton = $("#create-gif-button").val().trim();

    console.log(newGifButton);

    // // Adding movie from the textbox to our array
    // movies.push(movie);

    // // Calling renderButtons which handles the processing of our movie array
    // renderButtons();
});