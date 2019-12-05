jQuery(document).ready(function() {

    particlesJS.load('particles-js', '/js/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

});

/* ---- greetin box -opener ---- 

function handler(){
	mainContent.classList.add('show');
        setTimeout(function(){
        	mainContent.classList.add('open');
		},1500);
	service.classList.add('flex');	
	}
	var service = document.getElementById('service');
	var openBtn = document.getElementById('open_btn');
    var mainContent = document.getElementById('greeting');
	openBtn.addEventListener('click', handler);
	document.addEventListener('keydown', function(e){
    if(e.keyCode === 13)
        handler();
});

*/

(function(){
	let menu = document.getElementById('menu');
	let menu_block = document.getElementById('menu_block');
	let nav_item = document.getElementsByClassName('nav_item')

	menu.addEventListener('click', function(){
		menu_block.classList.toggle('open');
	})
	nav_item[0].addEventListener('click', function(){
		menu_block.classList.remove('open');
	})
	nav_item[1].addEventListener('click', function(){
		menu_block.classList.remove('open');
	})
	nav_item[2].addEventListener('click', function(){
		menu_block.classList.remove('open');
	})
	nav_item[3].addEventListener('click', function(){
		menu_block.classList.remove('open');
	})
	nav_item[4].addEventListener('click', function(){
		menu_block.classList.remove('open');
	})
})(); 


$(document).ready(function() {
	$('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
});