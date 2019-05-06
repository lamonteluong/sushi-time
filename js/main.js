var tl = new TimelineMax();
var btn = document.getElementById('refresh');

tl.from('#Bowl', 1, {x: '-400', opacity: 0, ease: Power1.easeOut});
tl.from('#Sushi_1', 1, {y: '-250', opacity: 0, rotation: 20, transformOrigin: '50% 50%', ease: Bounce.easeOut}, '-=.4');
tl.from('#Sushi_2', 1, {y: '-250', opacity: 0, rotation: -70, transformOrigin: '50% 50%', ease: Bounce.easeOut}, '-=.7');
tl.from('#Chopstick_1', .4, {y: '-250', opacity: 0, rotation: 20, transformOrigin: '50% 50%', ease: Power1.easeOut}, '-=.7');
tl.from('#Chopstick_2', .4, {y: '-250', opacity: 0, rotation: -60, transformOrigin: '50% 50%', ease: Power1.easeOut}, '-=.6');
tl.from('#big_light', 1, {x: 200, opacity: 0, ease: Power1.easeOut}, '-=.7');
tl.from('#small_light', 1, {x: 1200, opacity: 0, ease: Power1.easeOut}, '-=.7');

tl.from('h1', 2, {y: 150, opacity: 0, ease: Power4.easeOut}, '-=1');

tl.from('#refresh', 1, {y: -50, opacity: 0, rotation: -360, transformOrigin: '50% 50%', ease: Power4.easeOut}, '-=1.5');

btn.addEventListener("click", function(){
    tl.restart();
});