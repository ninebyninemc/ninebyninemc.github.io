(function($) {
    $(document).ready(function() {

    /* IF YOU WANT TO APPLY SOME BASIC JQUERY TO REMOVE THE VIDEO BACKGROUND ON A SPECIFIC VIEWPORT MANUALLY

     var is_mobile = false;

    if( $('.player').css('display')=='none') {
        is_mobile = true;       
    }
    if (is_mobile == true) {
        //Conditional script here
        $('.big-background, .small-background-section').addClass('big-background-default-image');
    }else{
        $(".player").mb_YTPlayer(); 
    }

    });

*/
    /*  IF YOU WANT TO USE DEVICE.JS TO DETECT THE VIEWPORT AND MANIPULATE THE OUTPUT  */

        //Device.js will check if it is Tablet or Mobile - http://matthewhudson.me/projects/device.js/
        if (!device.tablet() && !device.mobile()) {
            $(".player").mb_YTPlayer();
        } else {
            //jQuery will add the default background to the preferred class 
            $('.big-background, .small-background-section').addClass(
                'big-background-default-image');
        }
    });


})(jQuery);

var tag = document.createElement("script");

tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("ytplayer", {
    events: {
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady() {
  player.playVideo();
  // Mute Sound Function!
  player.mute();
  setTimeout(endOfVideo,90000);
}

function endOfVideo() {
    var myElement = document.querySelector(".videooverlay");
    myElement.style.opacity = "1";
    (function fade(){(myElement.style.opacity-=.1)<0?myElement.style.display="none":setTimeout(fade,40)})();
}


