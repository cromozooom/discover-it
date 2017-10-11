$(document).ready(function(){
  // init scroll magic
  var controller = new ScrollMagic.Controller();

  var pinIntroScene = new ScrollMagic.Scene({
    triggherElement: '.slide',
    triggherHook: 0
    //duration: '50%'
  })
  .setPin('.slide')
  .addTo(controller);

  // build a scene GoIN
  var sceneGoinImg1 = new ScrollMagic.Scene({
    //triggherElement:'.';
    triggerElement: '#animPr003'
    //duration: '50%',
  })
  .setClassToggle('.project--goin .anim img', 'fade-in')
  .addIndicators()
  .addTo(controller);

  // build a scene for Bufnita
  var sceneBufnitaImg1 = new ScrollMagic.Scene({
    triggerElement: '#animPr02'
  })
  .setClassToggle('.project--bufnita-din-tei .anim img', 'fade-in')
  .addTo(controller);

  // build a scene for Newsletter
  var sceneNewsletterImg1 = new ScrollMagic.Scene({
    triggerElement: '#animPr004'
  })
  .setClassToggle('.project--responsive-email .anim img', 'fade-in')
  .addTo(controller);
});
