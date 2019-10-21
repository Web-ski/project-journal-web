document.addEventListener('DOMContentLoaded', function (event) {
	const navbar = document.getElementsByClassName('navbar')[0];
	const $pwsjBlueColor = '#297cf1';

	const createElementsNavbar = function () {
		const addBrandContainer = document.createElement('div');
		const addHmbrContainer = document.createElement('div');

		const addLineToBrand = document.createElement('div');
		const addBrandFrame = document.createElement('div');
		const addBrandImg = document.createElement('div');

		//const addLineToHmbr = document.createElement('div');
		const addHmbrFrame = document.createElement('div');
		const addHmbrElem1 = document.createElement('div');
		const addHmbrElem2 = document.createElement('div');
		const addHmbrElem3 = document.createElement('div');

		navbar.appendChild(addBrandContainer);
		navbar.appendChild(addHmbrContainer);

		navbar.firstElementChild.setAttribute('class', 'brand-container');
		navbar.lastElementChild.setAttribute('class', 'hmbr-container');

		navbar.firstElementChild.appendChild(addLineToBrand);
		navbar.firstElementChild.appendChild(addBrandFrame);
		navbar.lastElementChild.appendChild(addHmbrFrame);

		navbar.firstElementChild.children[1].appendChild(addBrandImg);
		navbar.lastElementChild.children[0].appendChild(addHmbrElem1);
		navbar.lastElementChild.children[0].appendChild(addHmbrElem2);
		navbar.lastElementChild.children[0].appendChild(addHmbrElem3);
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
			frame.style.borderRadius = '50%';
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
				img.style.backgroundImage = 'url("images/group.svg")';
				img.style.backgroundRepeat = 'no-repeat';
				img.style.backgroundSize = 'cover';
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

		const hmbrFrame = document.getElementsByClassName('hmbr-frame')[0];
		hmbrFrame.children[0].setAttribute('class', 'hmbr-elem1');
		hmbrFrame.children[1].setAttribute('class', 'hmbr-elem2');
		hmbrFrame.children[2].setAttribute('class', 'hmbr-elem3');
		const hmbrElem1 = document.getElementsByClassName('hmbr-elem1')[0];
		const hmbrElem2 = document.getElementsByClassName('hmbr-elem2')[0];
		const hmbrElem3 = document.getElementsByClassName('hmbr-elem3')[0];

		const runElems = function (elem1, elem2, elem3, frame) {
			frame.style.height = '40px';
			frame.style.marginTop = '29px';

			setTimeout(function () {
				console.log(elem3);
				elem3.style.backgroundColor = $pwsjBlueColor;
				elem3.style.height = '4px';
				elem3.style.width = '100%';
				elem3.style.top = '0';
				elem3.style.left = '0';

				for (let i = 0; i < 34; i++) {
					setTimeout(function () {
						elem3.style.top = i + 'px';
					}, i * 8);
				};

				setTimeout(function () {
					console.log(elem2);
					elem2.style.backgroundColor = $pwsjBlueColor;
					elem2.style.height = '4px';
					elem2.style.width = '100%';
					elem2.style.top = '0';
					elem2.style.left = '0';

					for (let i = 0; i < 18; i++) {
						setTimeout(function () {
							elem2.style.top = i + 'px';
						}, i * 8);
					};

					setTimeout(function () {
						console.log(elem1);
						elem1.style.backgroundColor = $pwsjBlueColor;
						elem1.style.height = '4px';
						elem1.style.width = '100%';
						elem1.style.top = '0';
						elem1.style.left = '0';
	
						for (let i = 0; i < 2; i++) {
							setTimeout(function () {
								elem1.style.top = i + 'px';
							}, i * 8);
						};
	
					}, 300);

				}, 300);

			}, 300);
		}

		runElems(hmbrElem1, hmbrElem2, hmbrElem3, hmbrFrame);
	}

	createElementsNavbar();
	setTimeout(movingBrand, 50 * 60);
	setTimeout(movingHmbr, 60 * 60);
});