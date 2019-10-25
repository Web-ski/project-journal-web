document.addEventListener('DOMContentLoaded', function (event) {

	const aboutContent = document.getElementsByClassName('content')[0];
	const text1 = aboutContent.firstElementChild;
	const text2 = aboutContent.children[1];
	const img = aboutContent.children[2];
	const text3 = aboutContent.children[3];
	const text4 = aboutContent.children[4];
	const text5 = aboutContent.children[5];

	const stylingTexts = function () {
		const contElemsArr = aboutContent.children;
		img.style.height = '100px';
		img.style.display = 'block';
		img.style.margin = '0 auto';

		[].forEach.call(contElemsArr, function (item) {
			item.style.opacity = "0";
			item.style.marginBottom = "15px";
			console.log(item);
		});
	}

	const moveText = function (text, time) {
		setTimeout(function () {
			text.style.animation = 'textSlider 1s ease-in';
			text.style.opacity = '1';
		}, 200 * time);
	};

	const scrollText = (text, number, time) => {
		window.addEventListener("scroll", function () {
			if (document.body.scrollTop > (100 + number) || document.documentElement.scrollTop > (100 + number)) {
				moveText(text, time);
			};
		});
	}

	stylingTexts();
	scrollText(text1, 100, 1);
	scrollText(text2, 200, 2);
	scrollText(img, 300, 2);
	scrollText(text3, 400, 2);
	scrollText(text4, 400, 2.1);
	scrollText(text5, 400, 2.3);
});