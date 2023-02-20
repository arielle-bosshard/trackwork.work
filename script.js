
function youTubes_makeDynamic() {
    var $ytIframes = $('iframe[src*="youtube.com"]');
    $ytIframes.each(function (i,e) {
        var $ytFrame = $(e);
        var ytKey; var tmp = $ytFrame.attr('src').split(/\//); 
        tmp = tmp[tmp.length - 1]; tmp = tmp.split('?'); ytKey = tmp[0];
        var $ytLoader = $('<div class="ytLoader">');
        $ytLoader.append($('<img class="cover" src="https://i.ytimg.com/vi/'+ytKey+'/hqdefault.jpg">'));
        $ytLoader.append($('<img class="playBtn" src="play_button.png">'));
        $ytLoader.data('$ytFrame',$ytFrame);
        $ytFrame.replaceWith($ytLoader);
        $ytLoader.click(function () {
                var $ytFrame = $ytLoader.data('$ytFrame');
                $ytFrame.attr('src',$ytFrame.attr('src')+'?autoplay=1');
                $ytLoader.replaceWith($ytFrame);
        });
    });
};
document.addEventListener(function () {youTubes_makeDynamic()});

document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
  
    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
              }
            }
  
            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });
  
      lazyVideos.forEach(function(lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
