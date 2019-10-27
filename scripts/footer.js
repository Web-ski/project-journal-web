document.addEventListener('DOMContentLoaded', function (event) {

	const footer = document.getElementsByClassName('footer')[0];

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