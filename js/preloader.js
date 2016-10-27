/* PRELOADER DISABLED
var tl = new TimelineMax({
  repeat: -1
});

tl.add(
  TweenMax.from(".logo-svg", 2, {
    scale: 0.5,
    rotation: 360,
    ease: Elastic.easeInOut
  })
);

tl.add(
  TweenMax.to(".logo-svg", 2, {
    scale: 0.5,
    rotation: 360,
    ease: Elastic.easeInOut
  })
);

var overlay = document.getElementById("overlay");

window.addEventListener('load', function(){
  setTimeout(function() {
  overlay.style.display = 'none';
}, 1000);
});
// END OF PRELOADER STUFF */