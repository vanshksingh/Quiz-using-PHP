function expandBox(topicId) {
    var box = document.getElementById(topicId);
    // console.log(topicId);
    box.classList.add('expanded');
    setTimeout(function() {
        console.log(encodeURIComponent(topicId));
        window.location.href = "start5.html?subject=" + encodeURIComponent(topicId);
    }, 750);
  }
  

// Function to show the overlay
function showOverlay(event) {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";

    // Prevent the click event from propagating to the document
    event.stopPropagation();
}

// Function to close the overlay if clicked outside of the "subs-info" element
document.addEventListener("click", function(event) {
    var overlay = document.getElementById("overlay");
    var subsInfo = document.querySelector(".subs-info");
    var isClickInsideSubsInfo = subsInfo.contains(event.target);
    if (!isClickInsideSubsInfo && overlay.style.display === "block") {
        closeOverlay();
    }
});

// Function to close the overlay
function closeOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}


