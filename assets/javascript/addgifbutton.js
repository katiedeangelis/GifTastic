// Initial array of show buttons
var showButtons = ["Rick and Morty", "Futurama", "Bob's Burger", "Archer"];

// Function for displaying show buttons
function renderButtons() {

    // Delete the show buttons prior to adding a new one (So there are no duplicates)
    $("#buttons-view").empty();

    // Looping through the array of shows to create buttons
    for (var i = 0; i < showButtons.length; i++) {

        // Then dynamicaly generating buttons for each show in the array
        var a = $("<button>");

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
}

$("#add-gif-button").on("click", function (event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var newShow = $("#create-gif-button").val().trim();

    console.log(newShow);

    // Adding movie from the textbox to our array
    showButtons.push(newShow);

    console.log(showButtons);

    // Calling renderButtons which handles the processing of the showButtons array
    renderButtons();
});