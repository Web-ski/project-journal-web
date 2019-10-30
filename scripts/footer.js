document.addEventListener('DOMContentLoaded', function (event) {

	const footer = document.getElementsByClassName('footer')[0];

	const infoContent = {
		name: 'Science Journal Publishing House',
		address: 'Address:',
		street: 'ul. Redakcyjna 150',
		city: '80-808 Gdańsk, Poland',
		phone: '+48 500 800 500',
		email: 'office@pwsj.eu'
	}

	const webmasterContent = {
		name: 'Created by Web-ski, 2019',
		email: 'pawel.nieczuja@onet.eu',
		github: 'https://github.com/Web-ski',
		codepen: 'https://codepen.io/Web-ski',
		icons: 'Icons made by:',
		iconsHref: 'https://www.flaticon.com/authors/freepik'
	}

	const infoElemsArray = Object.values(infoContent);
	const webmasterElemsArray = Object.values(webmasterContent);

	const createElementsFooter = function () {

		const addInfoSection = document.createElement('section');
		const addWebmasterSection = document.createElement('section');
		const addInfoList = document.createElement('ul');
		const addWebmasterList = document.createElement('ul');

		footer.appendChild(addInfoSection);
		footer.appendChild(addWebmasterSection);

		footer.firstElementChild.setAttribute('class', 'info');
		footer.firstElementChild.appendChild(addInfoList);

		footer.lastElementChild.setAttribute('class', 'web');
		footer.lastElementChild.appendChild(addWebmasterList);
	}

	const addElementsFooter = function (arr, nmbr) {
		const parent = footer.getElementsByTagName('section')[nmbr];
		const ulist = parent.firstElementChild;

		arr.forEach(function () {
			const addElem = document.createElement('li');
			ulist.appendChild(addElem);
		})
	};

	const addContentFooter = function (arr, nmbr) {
		const parent = footer.getElementsByTagName('section')[nmbr];
		const listElems = parent.getElementsByTagName('li');

		for(let i = 0; i < listElems.length; i++) {
			listElems[i].textContent = arr[i];
			listElems[i].setAttribute('class', 'item__text');
		}
	}

	createElementsFooter();
	addElementsFooter(infoElemsArray, 0);
	addElementsFooter(webmasterElemsArray, 1);
	addContentFooter(infoElemsArray, 0)
	addContentFooter(webmasterElemsArray, 1);
});