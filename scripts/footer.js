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
		icons: 'Icons from freepik.com'
	}

	const createElementsFooter = function () {

		const addInfoSection = document.createElement('section');
		const addWebmasterSection = document.createElement('section');

		footer.appendChild(addInfoSection);
		footer.appendChild(addWebmasterSection);

		footer.firstElementChild.setAttribute('class', 'info');
		footer.lastElementChild.setAttribute('class', 'webmaster');

	}

	createElementsFooter();

});