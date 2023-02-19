(function () {
	'use strict';
	let submenus = document.querySelectorAll('ul li ul');
	let menulinks = document.querySelectorAll('.menulink');
	
		function hideSubmenu() {
			for (let i = 0; i < submenus.length; i++) {
				submenus[i].className = 'hide-menu';
			}
		}

		hideSubmenu();


		for (let i = 0; i < menulinks.length; i++) {
			menulinks[i].addEventListener('click', function (event) {
				event.preventDefault();
				const thisMenu = this.parentNode.querySelector('ul');
				if (thisMenu.classList.contains('show-menu')) {
					hideSubmenu();
					thisMenu.className = 'hide-menu';
				} else {
					hideSubmenu();
					thisMenu.className = 'show-menu';
				}
			})
		}
})();