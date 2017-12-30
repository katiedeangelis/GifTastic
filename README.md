# GifTastic
A dynamic web page that utilizes the Giphy AP, JavaScript, and jQuery to populate to provide users with the gifs of their choice. 

## Build

- An array of strings each saved to the variable topic.
- Each array creates a button in the HTML.
- Each gif that is shown to the user also has a rating (PG, G, etc.)
- A form that takes user input.

## Functionality

- When a use clicks on a topic button, the page grabs 10 static, non-animated gif images from the Giphy API and places them on the page.
- When the user clicks one of the still GIPHY images, the gif animates. If the user clicks the gif again, it stops playing.
- Values that the user enters in the form appends a new button to the HTML which the user can then click to generate gifs.