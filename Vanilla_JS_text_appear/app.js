function scrollAppear() {
	let introText = document.querySelector('.intro-text');
	let boundBox = document.querySelector('.intro-text-bounding-box');
	let introPosition = boundBox.getBoundingClientRect().top;
	let screenPosition = window.innerHeight / 1.3;

	if (introPosition < screenPosition) {
		introText.classList.add('intro-appear');
	}
}

window.addEventListener('scroll', scrollAppear);
