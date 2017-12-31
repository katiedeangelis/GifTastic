 // Event listener for all button elements
 $("button").on("click", function() {

     // In this case, the "this" keyword refers to the button that was clicked
     var show = $(this).attr("data-show");
     console.log("Is this working?");
 });