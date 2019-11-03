document.addEventListener('DOMContentLoaded', function (event) {

	const $pwsjBlueColor = '#297cf1';
	const $pwsjBlackColor = '#111111';

	const aboutContent = document.getElementsByClassName('content')[0];
	const container = aboutContent.getElementsByClassName('container');
	const text1 = container[0].firstElementChild;
	const text2 = container[0].children[1];
	const title = container[1].firstElementChild;
	const img = container[1].children[1];
	const text3 = container[1].children[2];
	const text4 = container[1].children[3];
	const text5 = container[1].children[4];
	
	const stylingTexts = function () {
		const contElemsArr1 = container[0].children;
		const contElemsArr2 = container[1].children;
		
		img.style.height = '100px';
		img.style.display = 'block';
		img.style.margin = '5px auto';
		img.style.border = 'solid 10px' + $pwsjBlueColor;
		img.style.borderRadius = '50%';
		img.style.backgroundColor = $pwsjBlackColor;
		title.style.color = '#919191';

		[].forEach.call(contElemsArr1, function (item) {
			item.style.opacity = "0";
			item.style.marginBottom = "15px";
		});

		[].forEach.call(contElemsArr2, function (item) {
			item.style.opacity = "0";
			item.style.marginBottom = "15px";
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
	scrollText(title, 300, 2);
	scrollText(img, 300, 2);
	scrollText(text3, 400, 2);
	scrollText(text4, 400, 2.1);
	scrollText(text5, 400, 2.3);
});