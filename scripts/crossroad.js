document.addEventListener('DOMContentLoaded', function (event) {

	const crossroad = document.getElementsByClassName('crossroad')[0];
	const $pwsjBlueColor = '#297cf1';

	const createElementsCrossroad = function () {
		const addButtonContainer1 = document.createElement('div');
		const addButtonContainer2 = document.createElement('div');
		const addButtonContainer3 = document.createElement('div');

		const addLineToButton1 = document.createElement('div');
		const addButtonFrame1 = document.createElement('a');

		const addLineToButton2 = document.createElement('div');
		const addButtonFrame2 = document.createElement('a');

		const addLineToButton3 = document.createElement('div');
		const addButtonFrame3 = document.createElement('a');

		crossroad.appendChild(addButtonContainer1);
		crossroad.appendChild(addButtonContainer2);
		crossroad.appendChild(addButtonContainer3);

		crossroad.firstElementChild.setAttribute('class', 'button-container');
		crossroad.children[1].setAttribute('class', 'button-container');
		crossroad.lastElementChild.setAttribute('class', 'button-container');

		const buttonContainerIssues = document.getElementsByClassName('button-container')[0];
		const buttonContainerForAuthors = document.getElementsByClassName('button-container')[1];
		const buttonContainerAbout = document.getElementsByClassName('button-container')[2];

		buttonContainerIssues.appendChild(addLineToButton1);
		buttonContainerIssues.appendChild(addButtonFrame1);
		buttonContainerIssues.firstElementChild.setAttribute('class', 'button-line');
		buttonContainerIssues.lastElementChild.setAttribute('class', 'button-frame');

		buttonContainerForAuthors.appendChild(addLineToButton2);
		buttonContainerForAuthors.appendChild(addButtonFrame2);
		buttonContainerForAuthors.firstElementChild.setAttribute('class', 'button-line');
		buttonContainerForAuthors.lastElementChild.setAttribute('class', 'button-frame');

		buttonContainerAbout.appendChild(addLineToButton3);
		buttonContainerAbout.appendChild(addButtonFrame3);
		buttonContainerAbout.firstElementChild.setAttribute('class', 'button-line');
		buttonContainerAbout.lastElementChild.setAttribute('class', 'button-frame');
	};

	const movingButtons = function () {
		const buttonLine = document.getElementsByClassName('button-line');
		const buttonFrame = document.getElementsByClassName('button-frame');

		const runLine = function (line, time, frame) {
			line.style.width = '0';

			setTimeout(function () {
				for (let i = 0; i < 30; i++) {
					setTimeout(function () {
						line.style.width = i + '%';
					}, i * 10);
				};
				runFrame(frame);
			}, time);
		};

		const runFrame = function (frame) {
			frame.style.width = '0';
			frame.style.height = '0';

			setTimeout(function () {
				frame.style.border = 'solid 4px' + $pwsjBlueColor;

				for (let i = 0; i < 40; i++) {
					setTimeout(function () {
						frame.style.width = i + '%';
						frame.style.height = i * 2.5 + '%';
					}, i * 10);

				};
			}, 300);
		};

		const createButtons = function () {
			
			[].forEach.call(buttonFrame, function(item) {
				const button = document.createElement('button');
				item.appendChild(button);
				item.firstChild.setAttribute('class', 'button-go');
				item.setAttribute('href', '#');				
			})
		};

		const addButtons = function () {
			const buttonGo = document.getElementsByClassName('button-go');

			const runBtn = function (btn, number) {
				if (number === 1) {
					btn.textContent = 'ISSUES';
					setTimeout(function () {
						btn.style.display = 'block';
					}, 200 + 1000);

				} else if (number === 2) {
					btn.textContent = 'FOR AUTHORS';
					setTimeout(function () {
						btn.style.display = 'block';
					}, 400 + 1000);
				} else {
					btn.textContent = 'ABOUT';
					setTimeout(function () {
						btn.style.display = 'block';
					}, 600 + 1000);
				};
			};

			runBtn(buttonGo[0], 1);
			runBtn(buttonGo[1], 2);
			runBtn(buttonGo[2], 3);
		};

		runLine(buttonLine[0], 200, buttonFrame[0]);
		runLine(buttonLine[1], 400, buttonFrame[1]);
		runLine(buttonLine[2], 600, buttonFrame[2]);
		createButtons();
		addButtons();
	}

	createElementsCrossroad();
	setTimeout(movingButtons, 50 * 40);
});