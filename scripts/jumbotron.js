document.addEventListener('DOMContentLoaded', function (event) {

	const jumbotron = document.getElementsByClassName('jumbotron')[0];
	const $pwsjBlackColor = '#111111';
	const titlePartsArray = ['Project', 'Website', 'of', 'Science', 'Journal'];

	const createElementsJumbotron = function () {

		const addMapContainer = document.createElement('div');
		jumbotron.appendChild(addMapContainer);
		
		const pageTitleArray = [];
		const pageTitleTextsArray = [];

		titlePartsArray.forEach(function () {
			const addPageTitle = document.createElement('h1');
			pageTitleArray.push(addPageTitle);
			const addTitleText = document.createTextNode(" ");
			pageTitleTextsArray.push(addTitleText);
			jumbotron.appendChild(addPageTitle);
		})
		
		const styleJumbotronMap = function () {
			
			jumbotron.firstElementChild.setAttribute('class', 'map-container');
	
			const mapContainer = document.getElementsByClassName('map-container')[0];
			mapContainer.style.position = 'absolute';
			mapContainer.style.zIndex = '0';
			mapContainer.style.width = '100%';
			mapContainer.style.height = '100%';
			mapContainer.style.top = '0';
			mapContainer.style.backgroundImage = 'url(../images/map-of-europe-equidistant-hi.png)';
			mapContainer.style.backgroundPosition = 'right bottom';
			mapContainer.style.backgroundRepeat = 'no-repeat';
			mapContainer.style.backgroundSize = '95%';
		}

		const jumbotronTitleAddClass = function () {

			console.log(pageTitleArray);

			pageTitleArray.forEach(function (item) {
				const nmbr = pageTitleArray.indexOf(item);
				item.setAttribute('class', 'page-title');
				item.appendChild(pageTitleTextsArray[nmbr]);
				item.style.zIndex = '1';
				item.style.marginLeft = '30px';
				item.style.width = '200px';
				item.style.textShadow = '0px 0px 15px' + $pwsjBlackColor;
			})
			pageTitleArray[2].style.textTransform = 'lowercase';
		}

		styleJumbotronMap();
		jumbotronTitleAddClass();
		//console.log(jumbotronArray);
	}

	const pulsePageTitle = function () {
		const pageTitleAll = document.getElementsByClassName('page-title');
		const pageTitlePlace1 = pageTitleAll[0].childNodes[0];
		const pageTitlePlace2 = pageTitleAll[1].childNodes[0];
		const pageTitlePlace3 = pageTitleAll[2].childNodes[0];
		const pageTitlePlace4 = pageTitleAll[3].childNodes[0];
		const pageTitlePlace5 = pageTitleAll[4].childNodes[0];
		const pageTitlePart1 = 'Project';
		const pageTitlePart2 = 'Website';
		const pageTitlePart3 = 'of';
		const pageTitlePart4 = 'Science';
		const pageTitlePart5 = 'Journal';

		//console.log(pageTitleAll);
		const time = [pageTitlePart1.length, pageTitlePart2.length, pageTitlePart3.length, pageTitlePart4.length];

		const pulse = function () {
			const time = [pageTitlePart1.length, pageTitlePart2.length, pageTitlePart3.length, pageTitlePart4.length];
			const time1 = time[0];
			const time2 = time1 + time[1];
			const time3 = time2 + time[2];
			const time4 = time3 + time[3];

			for (let i = 0; i < pageTitlePart1.length; i++) {
				setTimeout(function () {
					pageTitlePlace1.textContent += pageTitlePart1[i];
				}, i * 50);
			}

			setTimeout(function () {
				for (let i = 0; i < pageTitlePart2.length; i++) {
					setTimeout(function () {
						pageTitlePlace2.textContent += pageTitlePart2[i];
					}, i * 50);
				}
			}, 50 * time1);

			setTimeout(function () {
				for (let i = 0; i < pageTitlePart3.length; i++) {
					setTimeout(function () {
						pageTitlePlace3.textContent += pageTitlePart3[i];
					}, i * 50);
				}
				const time = pageTitlePart1.length + pageTitlePart2.length;
			}, 50 * time2);

			setTimeout(function () {
				for (let i = 0; i < pageTitlePart4.length; i++) {
					setTimeout(function () {
						pageTitlePlace4.textContent += pageTitlePart4[i];
					}, i * 50);
				}

			}, 50 * time3);

			setTimeout(function () {
				for (let i = 0; i < pageTitlePart5.length; i++) {
					setTimeout(function () {
						pageTitlePlace5.textContent += pageTitlePart5[i];
					}, i * 50);
				}
			}, 50 * time4);
		};

		pulse();
	}

	createElementsJumbotron();
	pulsePageTitle();
})