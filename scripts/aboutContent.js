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

	const moveText = function (text) {
		setTimeout(function () {
			text.style.animation = 'textSlider 1s ease-in';
			text.style.opacity = '1';
		}, 300);
	};

	const removeText = function (text) {
		setTimeout(function () {
			text.style.animation = 'textUnslider';
			text.style.opacity = '0';
		}, 100);
	}

	const scrollText = (text, number) => {
		window.addEventListener("scroll", function () {
			if (document.body.scrollTop > (200+number) || document.documentElement.scrollTop > (200+number)) {
				moveText(text);
			} else {
				removeText(text);
			};
		});
	}

	const scrollText1 = function (text) {
		scrollText(text, 100)
	};
	const scrollText2 = function (text) {
		scrollText(text, 200)
	};
	

	stylingTexts();
	scrollText1(text1);
	scrollText2(text2);
});