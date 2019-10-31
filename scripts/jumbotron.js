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
	}

	const pulsePageTitle = function () {
		const pageTitleAll = document.getElementsByClassName('page-title');

		const pageTitlePlaceArray = [];

		[].forEach.call(pageTitleAll, function (item) {
			const place = item.childNodes[0];
			pageTitlePlaceArray.push(place);
		})

		const text1 = titlePartsArray[0];
		const text2 = titlePartsArray[1];
		const text3 = titlePartsArray[2];
		const text4 = titlePartsArray[3];
		const text5 = titlePartsArray[4];

		const pulse = function () {
			const time = [titlePartsArray[0].length, titlePartsArray[1].length, titlePartsArray[2].length, titlePartsArray[3].length];
			const time1 = time[0];
			const time2 = time1 + time[1];
			const time3 = time2 + time[2];
			const time4 = time3 + time[3];

			for (let i = 0; i < time[0]; i++) {
				setTimeout(function () {
					pageTitlePlaceArray[0].textContent += text1[i];
				}, i * 50);
			}

			setTimeout(function () {
				for (let i = 0; i < time[1]; i++) {
					setTimeout(function () {
						pageTitlePlaceArray[1].textContent += text2[i];
					}, i * 50);
				}
			}, 50 * time1);

			setTimeout(function () {
				for (let i = 0; i < time[2]; i++) {
					setTimeout(function () {
						pageTitlePlaceArray[2].textContent += text3[i];
					}, i * 50);
				}
			}, 50 * time2);

			setTimeout(function () {
				for (let i = 0; i < time[3]; i++) {
					setTimeout(function () {
						pageTitlePlaceArray[3].textContent += text4[i];
					}, i * 50);
				}
			}, 50 * time3);

			setTimeout(function () {
				for (let i = 0; i < titlePartsArray[4].length; i++) {
					setTimeout(function () {
						pageTitlePlaceArray[4].textContent += text5[i];
					}, i * 50);
				}
			}, 50 * time4);
		};

		pulse();
	}

	createElementsJumbotron();
	pulsePageTitle();
})