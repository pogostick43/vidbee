function playVideo(src) {
  var videoOverlay = document.getElementById("video-overlay");
  var videoContainer = document.getElementById("video-container");
  var videoPlayer = document.getElementById("video-player");
  var closeButton = document.getElementById("close-button");

  // Set the video source
  videoPlayer.setAttribute("src", src);

  // Show the video overlay
  videoOverlay.style.display = "block";

  // Dim the screen
  document.body.style.overflow = "hidden";

  videoPlayer.play();
  // Close the video when the X button is clicked
  closeButton.onclick = function() {
    videoPlayer.pause();
    videoOverlay.style.display = "none";
    document.body.style.overflow = "auto";
  };

  // Close the video when the user clicks outside of it
  videoOverlay.onclick = function(event) {
    if (event.target == videoOverlay) {
      videoPlayer.pause();
      videoOverlay.style.display = "none";
      document.body.style.overflow = "auto";
    }
  };
}
