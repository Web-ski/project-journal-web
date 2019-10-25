document.addEventListener('DOMContentLoaded', function (event) {

	const warbonnets = document.getElementsByClassName('warbonnets')[0];
	const $pwsjBlackColor = '#111111';
	const $pwsjBlueColor = '#297cf1';

	const createElements = function () {
		const addTopSeparator = document.createElement('div');
		const addMovingContainer = document.createElement('div');
		const addSectionTitle = document.createElement('h3');

		warbonnets.appendChild(addTopSeparator);
		warbonnets.appendChild(addMovingContainer);

		const topSeparator = warbonnets.firstElementChild;
		const movingContainer = warbonnets.lastElementChild;
		movingContainer.setAttribute('class', 'title-container');
		movingContainer.appendChild(addSectionTitle);

		topSeparator.style.width = '100%';
		topSeparator.style.height = '20px';
		topSeparator.style.backgroundColor = $pwsjBlackColor;

		const sectionTitle = movingContainer.firstElementChild;
		sectionTitle.setAttribute('class', 'section__title');
	}

	const moveTitle = function () {
		const titleContainer = document.getElementsByClassName('title-container')[0];
		const title = document.getElementsByClassName('section__title')[0];
		//titleContainer.style.borderRadius = '0 0 3px 3px';
		titleContainer.style.padding = '15px 25px 0';
		titleContainer.style.color = $pwsjBlueColor;
		titleContainer.style.overflow = 'hidden';
		titleContainer.style.textAlign = 'left';
		title.style.lineHeight = '60px';

		const runContainer = function () {
			setTimeout(function () {
				titleContainer.style.animation = 'elemSlider .5s ease-out';
				titleContainer.style.height = '60px';
				titleContainer.style.width = '100%';
				//titleContainer.style.backgroundColor = $pwsjBlackColor;
				title.textContent = 'About';
			}, 300)
		}

		runContainer(titleContainer);
	}

	const scrollSite = function () {
		window.addEventListener("scroll", function () {
			if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
				moveTitle();
			};
		});
	};

	createElements();
	scrollSite();
});