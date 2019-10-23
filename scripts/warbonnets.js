document.addEventListener('DOMContentLoaded', function (event) {

    const warbonnets = document.getElementsByClassName('warbonnets')[0];
    const $pwsjBlackColor = '#111111';
    const $pwsjBlueColor = '#297cf1';

    const createElements = function() {
        const addTopSeparator = document.createElement('div');
        const addMovingContainer = document.createElement('div');

        warbonnets.appendChild(addTopSeparator);
        warbonnets.appendChild(addMovingContainer);

        const topSeparator = warbonnets.firstElementChild;
        const movingContainer = warbonnets.lastElementChild;
        movingContainer.setAttribute('class', 'title-container');

        topSeparator.style.width = '100%';
        topSeparator.style.height = '20px';
        topSeparator.style.backgroundColor = $pwsjBlackColor;

        console.log(topSeparator);

        movingContainer.style.height = '60px';
        movingContainer.style.width = '0';
        movingContainer.style.backgroundColor = $pwsjBlackColor;
    }

    const moveTitle = function () {
        const titleContainer = document.getElementsByClassName('title-container')[0];
        titleContainer.style.borderRadius = '0 0 10px 0';
        //titleContainer.style.borderBottom = 'solid 3px' + $pwsjBlueColor;

        const runContainer = function(container) {
            setTimeout(function () {

                for (let i = 0; i < 160; i++) {

					setTimeout(function () {
                        container.style.width = i + 'px';
					}, i * 5);
				};
            }, 300)
        }

        runContainer(titleContainer);
    }

    createElements();
    moveTitle();
});