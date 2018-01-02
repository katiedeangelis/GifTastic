// Initial array of show buttons
var showButtons = ["Rick and Morty", "Futurama", "Bob's Burger", "Archer"];

$("#add-gif-button").on("click", function (event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var newShow = $("#create-gif-button").val().trim();

    console.log(newShow);

    // Adding movie from the textbox to our array
    showButtons.push(newShow);

    console.log (showButtons);

    // // Calling renderButtons which handles the processing of our movie array
    // renderButtons();
});