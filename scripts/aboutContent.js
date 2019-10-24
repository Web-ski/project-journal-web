document.addEventListener('DOMContentLoaded', function (event) {

	const aboutContent = document.getElementsByClassName('content')[0];
	const text1 = aboutContent.firstElementChild;
	const text2 = aboutContent.children[1];

	const stylingTexts = function () {
		text1.style.opacity = '0';
		text2.style.opacity = '0';
		text1.style.marginBottom = '15px';
		text2.style.marginBottom = '15px';
	}

	const moveText = function (text, number) {
		setTimeout(function () {
			text.style.animation = 'textSlider 1s ease-in';
			text.style.opacity = '1';
		}, 300 * number)
	};

	const scrollText1 = function () {
		window.addEventListener("scroll", function () {
			if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
				moveText(text1, 2);
			} else {
				console.log(text1.getAttribute('style').valueOf('animation'));
				text1.style.animation = 'textUnslider';
				text1.style.opacity = '0';

			};
		});
	};

	const scrollText2 = function () {
		window.addEventListener("scroll", function () {
			if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
				moveText(text2, 3);
			} else {
				console.log(text1.getAttribute('style').valueOf('animation'));
				text2.style.animation = 'textUnslider';
				text2.style.opacity = '0';
			};
		});
	};

	stylingTexts();
	scrollText1();
	scrollText2();
});