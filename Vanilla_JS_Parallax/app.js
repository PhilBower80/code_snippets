window.addEventListener('scroll', function (e) {
	const target = document.querySelectorAll('.scroll');

	// console.log(target.style);
	// console.log(window.pageYOffset);

	let i = 0,
		length = target.length;

	for (i; i < length; i++) {
		let pos = window.pageYOffset * target[i].dataset.rate;

		if (target[i].dataset.direction === 'vertical') {
			target[i].style.transform = 'translate3d(0px, ' + pos + 'px, 0px)';
		} else {
			let posX = window.pageYOffset * target[i].dataset.ratex;
			let posY = window.pageYOffset * target[i].dataset.ratey;

			target[i].style.transform =
				'translate3d(' + posX + 'px, ' + posY + 'px , 0px)';
		}
	}
});
