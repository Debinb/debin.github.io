// (function($) {

// var pathEls = document.querySelectorAll('path');
// 			for (var i = 0; i < pathEls.length; i++) 
// 				{
// 					var pathEl = pathEls[i];
// 					var offset = anime.setDashoffset(pathEl);
// 					pathEl.setAttribute('stroke-dashoffset', offset);
// 					anime({
// 						targets: pathEl,
// 						strokeDashoffset: [offset, 0],
// 						duration: 7000,
// 						delay: anime.random(0, 2000),
// 						loop: true,
// 						direction: 'alternate',
// 						easing: 'linear',
// 						autoplay: true
// 					});
// 				}
//             })