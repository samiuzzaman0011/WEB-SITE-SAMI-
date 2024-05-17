document.addEventListener("DOMContentLoaded", function() {
    // Change the background color of the body when the page loads
    document.body.style.backgroundColor = "#f0f0f0";
    
    // Add an event listener to a button
    const button = document.querySelector("button");
    button.addEventListener("click", function() {
        alert("Button was clicked!");
    });
});
