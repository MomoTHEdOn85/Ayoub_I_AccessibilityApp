

const transcript = document.querySelector(".collapser");
const transcriptBtn = document.querySelector(".transcript-toggle");

// transcript
transcript.classList.add("collapse");
transcriptBtn.addEventListener("click", () => {
  transcript.classList.contains("collapse")
    ? (transcriptBtn.innerHTML = "Collapse Transcript")
    : (transcriptBtn.innerHTML = "Expand Transcript");
  transcript.classList.toggle("collapse");
});

// Only add the events if addEventListener is supported (IE8 and less don't support it, but that will use Flash anyway)
if (document.addEventListener) {
  // Wait for the video's meta data to be loaded, then set the progress bar's max value to the duration of the video
  video.addEventListener('loadedmetadata', function() {
    progress.setAttribute('max', video.duration);
  });

  // Add events for all buttons
  playpause.addEventListener('click', function(e) {
    if (video.paused || video.ended) video.play();
    else video.pause();
  });

  // The Media API has no 'stop()' function, so pause the video and reset its time and the progress bar
  stop.addEventListener('click', function(e) {
    video.pause();
    video.currentTime = 0;
    progress.value = 0;
  });
  mute.addEventListener('click', function(e) {
    video.muted = !video.muted;
  });
  volinc.addEventListener('click', function(e) {
    alterVolume('+');
  });
  voldec.addEventListener('click', function(e) {
    alterVolume('-');
  });
  fs.addEventListener('click', function(e) {
    handleFullscreen();
  });

  // As the video is playing, update the progress bar
  video.addEventListener('timeupdate', function() {
   // For mobile browsers, ensure that the progress element's max attribute is set
   if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
   progress.value = video.currentTime;
   progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
  });

 // React to the user clicking within the progress bar
 progress.addEventListener('click', function(e) {
   var pos = (e.pageX  - this.offsetLeft) / this.offsetWidth;
   video.currentTime = pos * video.duration;
 });

  // Listen for fullscreen change events (from other controls, e.g. right clicking on the video itself)
  document.addEventListener('fullscreenchange', function(e) {
    setFullscreenData(!!(document.fullScreen || document.fullscreenElement));
  });
  document.addEventListener('webkitfullscreenchange', function() {
    setFullscreenData(!!document.webkitIsFullScreen);
  });
  document.addEventListener('mozfullscreenchange', function() {
    setFullscreenData(!!document.mozFullScreen);
  });
  document.addEventListener('msfullscreenchange', function() {
    setFullscreenData(!!document.msFullscreenElement);
  });
}
}