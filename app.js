$(window).scroll(function() {
  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $nav = $('nav'),
        $panel = $('.panel');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
        $nav.removeClass(function (index, css) {
          return (css.match (/(^|\s)color2-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
        $nav.addClass('color2-' + $(this).data('color'));
      }
    });    
    
  }).scroll();


let text = document.querySelector(".changingText");

new Typewriter(text, {
  loop: true,
  deleteSpeed: 10
})
.changeDelay(35)
.pauseFor(2000)
.typeString("<?php")
.pauseFor(2000)
.typeString("<p> <span style='color: #b96260'>$fruits</span> = []; <p>")
.pauseFor(800)
.typeString("<p> <span style='color: #b96260'>$fruits</span> = <span style='color: #789e44'>'cerise'</span>; <p>")
.pauseFor(800)
.typeString("<p> <span style='color: #b96260'>$fruits</span> = <span style='color: #789e44'>'fraise'</span>; <p>")
.pauseFor(800)
.typeString("<p> <span style='color: #b96260'>$fruits</span> = <span style='color: #789e44'>'raisin'</span>; <p>")
.pauseFor(500)
.typeString("<br>")
.pauseFor(500)
.typeString("<p style='color: #949494'>// J'affiche le 2e fruit</p>")
.pauseFor(500)
.typeString("<p><span style='color: #09ac93'>echo</span> <span style='color: #b96260'>$fruits</span>[<span style='color: orange'>1</span>];</p>")
.pauseFor(6000)
.start();
