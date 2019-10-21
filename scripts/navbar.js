document.addEventListener('DOMContentLoaded', function (event) {
	const navbar = document.getElementsByClassName('navbar')[0];
	const $pwsjBlueColor = '#297cf1';

	const createElementsNavbar = function () {
		const addBrandContainer = document.createElement('div');
		const addHmbrContainer = document.createElement('div');

		const addLineToBrand = document.createElement('div');
		const addBrandFrame = document.createElement('div');
		const addBrandImg = document.createElement('img');

		//const addLineToHmbr = document.createElement('div');
		const addHmbrFrame = document.createElement('div');

		navbar.appendChild(addBrandContainer);
		navbar.appendChild(addHmbrContainer);

		navbar.firstElementChild.setAttribute('class', 'brand-container');
		navbar.lastElementChild.setAttribute('class', 'hmbr-container');

		navbar.firstElementChild.appendChild(addLineToBrand);
		navbar.firstElementChild.appendChild(addBrandFrame);
		navbar.lastElementChild.appendChild(addHmbrFrame);

		navbar.firstElementChild.children[1].appendChild(addBrandImg);
	}

	const movingBrand = function () {
		const brandContainer = document.getElementsByClassName('brand-container')[0];

		brandContainer.firstChild.setAttribute('class', 'brand-line');
		brandContainer.lastChild.setAttribute('class', 'brand-frame');

		const brandLine = document.getElementsByClassName('brand-line')[0];
		const brandFrame = document.getElementsByClassName('brand-frame')[0];
		brandFrame.firstChild.setAttribute('class', 'brand-img');
		const brandImg = document.getElementsByClassName('brand-img')[0];

		const runLine = function (line, frame) {
			line.style.width = '4px';
			line.style.height = '0';

			setTimeout(function () {
				line.style.backgroundColor = $pwsjBlueColor;

				for (let i = 0; i < 30; i++) {

					setTimeout(function () {
						line.style.height = i + 'px';
					}, i * 10);
				};

				setTimeout(function () {

					for (i = 0; i < 30; i++) {
						setTimeout(function () {
							i = i - 1;
							let x = 28 - i;
							line.style.height = i + 'px';
							x = x + 1;
							frame.style.marginTop = x + 'px';
							line.style.top = x + 'px';
						}, i * 10);
					};

				}, 400);

			}, 300);
		};

		const runFrame = function (frame) {
			frame.style.width = '0';
			frame.style.height = '40px';
			//frame.style.margin = '30px auto';

			setTimeout(function () {
				frame.style.border = 'solid 4px' + $pwsjBlueColor;

				for (let i = 0; i < 41; i++) {
					setTimeout(function () {
						frame.style.width = i + 'px';
						//frame.style.height = i + 'px';
					}, i * 10);
				};
			}, 400);
		};

		const runImg = function (img) {
			setTimeout(function () {
				img.setAttribute('src', '../images/group.svg');
				img.style.opacity = '0';
				img.style.width = '40px';
				img.style.height = '40px';
				img.style.marginTop = '-4px';
				img.style.marginLeft = '-4px';

				for (let i = 0; i < 20; i++) {
					setTimeout(function () {
						img.style.opacity = i * 0.05;
						//img.style.height = i + 'px';
					}, i * 10);
				};
			}, 300 + 400 + 300);
		};

		runLine(brandLine, brandFrame);
		runFrame(brandFrame);
		runImg(brandImg);
	}

	const movingHmbr = function () {
		const hmbrContainer = document.getElementsByClassName('hmbr-container')[0];

		//hmbrContainer.firstChild.setAttribute('class', 'hmbr-line');
		console.log(hmbrContainer);
		hmbrContainer.firstChild.setAttribute('class', 'hmbr-frame');

	}

	createElementsNavbar();
	setTimeout(movingBrand, 50 * 60);
	setTimeout(movingHmbr, 60 * 60);
});