document.addEventListener('DOMContentLoaded', function (event) {
	const teamContent = document.getElementsByClassName('content')[1];
	const endTabletView = window.matchMedia('(max-width: 767.99px)');

	const $pwsjWhiteColor = '#FFFFFF';
	const $pwsjBlueColor = '#297cf1';

	const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ullam. Itaque assumenda vel repudiandae corporis, eveniet qui facilis maxime consectetur eius non at eum libero quisquam delectus illum nisi dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic, sapiente similique fugiat exercitationem soluta dolorem labore tempora molestiae at a maiores commodi doloribus fugit eligendi debitis quibusdam cum quidem.';

	const teamMember1 = {
		name: 'Arkadiusz Modrzew',
		univ: 'University of Gdansk, Poland',
		descript: description,
		email: 'amodrzew@univ.gd',
		image: 'images/Adam_Asanov.jpg'
	}

	const teamMember2 = {
		name: 'Roma Valentina',
		univ: 'University of Roma, Italy',
		descript: description,
		email: 'rvalentia@univ.it',
		image: 'images/Roma_Valentina.jpg'
	}

	const teamMember3 = {
		name: 'Richie McCaw',
		univ: 'University of Wellington, New Zealand',
		descript: description,
		email: 'rmccaw@univ.nz',
		image: 'images/Richie_McCaw.jpg'
	}

	const teamMember4 = {
		name: 'Ana Poghosian',
		univ: 'University of Tbilisi, Georgia',
		descript: description,
		email: 'apoghosian@univ.ge',
		image: 'images/Ana_Poghosian.jpg'
	}

	const teamArray = [teamMember1, teamMember2, teamMember3, teamMember4];
	const title = teamContent.firstElementChild;
	title.style.marginBottom = '15px';

	const createBox = function () {
		const createElem = document.createElement('div');
		teamContent.appendChild(createElem);
		const boxes = teamContent.getElementsByTagName('div');
		const boxNmbr = boxes.length;
		teamContent.children[boxNmbr].setAttribute('class', 'item__box');
	}

	const addBoxElements = function () {
		const boxes = teamContent.getElementsByClassName('item__box');
		const boxArray = [];

		[].forEach.call(boxes, function (item) {
			boxArray.push(item);
		});

		const boxStyling = function (item) {
			item.style.height = 'auto';
			item.style.overflow = 'hidden';
			//item.style.minHeight = '100px';
			//item.style.maxWidth = '400px';
			item.style.backgroundColor = $pwsjBlueColor;
			item.style.border = 'solid 4px' + $pwsjBlueColor;
			item.style.padding = '15px';
			item.style.borderRadius = '3px';
			item.style.float = 'left';

			const screenTester = function () {
				if (endTabletView.matches) {
					item.style.width = '100%';
					item.style.margin = '0 auto';
					item.style.marginBottom = '25px';
				} else {
					item.style.width = '46%';
					item.style.margin = '0 2% 25px 2%';
				}
			}
			screenTester();
		}

		const createItems = function (item) {
			const createImg = document.createElement('img');
			const createName = document.createElement('p');
			const createUniv = document.createElement('p');
			const createDescript = document.createElement('p');
			const createEmail = document.createElement('p');

			item.appendChild(createImg);
			item.appendChild(createName);
			item.appendChild(createUniv);
			item.appendChild(createDescript);
			item.appendChild(createEmail);

			item.children[0].setAttribute('class', 'article__image');
			const prgrph = item.getElementsByTagName('p');

			[].forEach.call(prgrph, function (item) {
				item.setAttribute('class', 'item__text');
			});
		}

		const fillItems = function (item) {
			const itemIndex = boxArray.indexOf(item);
			const allItems = item.children;

			const image = item.getElementsByClassName('article__image')[0];
			const imageSrc = teamArray[itemIndex].image;
			image.setAttribute('src', imageSrc);

			const prgrph = item.getElementsByClassName('item__text');
			prgrph[0].textContent = teamArray[itemIndex].name;
			prgrph[1].textContent = teamArray[itemIndex].univ;
			prgrph[2].textContent = teamArray[itemIndex].email;
			prgrph[3].textContent = teamArray[itemIndex].descript;

			image.style.height = '100px';
			image.style.borderRadius = '50%';
			image.style.border = 'solid 10px' + $pwsjWhiteColor;
			image.style.display = 'flex';

			//prgrph[0].style.fontWeight = 'bold';
			prgrph[0].style.fontSize = '22px';
			prgrph[1].style.fontSize = '18px';

			[].forEach.call(allItems, function (item) {
				item.style.margin = '10px auto';
				item.style.color = $pwsjWhiteColor;
				item.style.visibility = 'hidden';
			})
		}

		const aboutSectionHeight = document.getElementById('about').offsetHeight;
		const boxHeightArray = [200];
		//console.log(boxHeightArray);

		const checkHeight = (item) => {
			const nmbrBox = boxArray.indexOf(item);

			//choose item
			if (nmbrBox === 0) {
				var x = 1;
			} else {
				var x = 1;
			};

			const correctNmbr = x;
			const earlierBox = nmbrBox + correctNmbr - 1;
			const getEarlierDistance = boxHeightArray[earlierBox];
			//console.log(getEarlierDistance);

			//add distance
			const boxHeight = item.offsetHeight;
			const addedHeight = boxHeight + boxHeightArray[earlierBox];
			//console.log(addedHeight);

			boxHeightArray.push(addedHeight);
			//console.log(boxHeightArray);
			//const getDistance = boxHeightArray
		}

		//Separate scroll for each box
		const scrollBox = (item) => {
			const allItems = item.children;
			const arr = [];

			const nmbr = boxArray.indexOf(item);
			const height = boxHeightArray[nmbr] + aboutSectionHeight;

			window.addEventListener("scroll", function () {

				if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {

					[].forEach.call(allItems, function (item) {
						arr.push(item);
						const time = arr.length * 250;

						setTimeout(function () {
							item.style.animation = 'textSlider .5s ease-in';
							item.style.visibility = 'visible';
							return time;
						}, 200 + time)
					})
				};
			});
		}

		const runBox = () => {
			boxArray.forEach(boxStyling);
			boxArray.forEach(createItems);
			boxArray.forEach(fillItems);
			boxArray.forEach(checkHeight);
			boxArray.forEach(scrollBox);
		}

		runBox();

		//scrollBox();
	}

	teamArray.forEach(createBox);
	addBoxElements();

	const teamItem = teamContent.getElementsByClassName('item__box');

	const teamScreenTester = function (view) {
		if (view.matches) {
			[].forEach.call(teamItem, function (item) {
				item.style.width = '100%';
				item.style.margin = '0 auto';
				item.style.marginBottom = '25px';
			})
		} else {
			[].forEach.call(teamItem, function (item) {
				item.style.width = '46%';
				item.style.margin = '0 2% 25px 2%';
			})
		}
	}

	endTabletView.addListener(teamScreenTester);
});