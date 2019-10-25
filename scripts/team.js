document.addEventListener('DOMContentLoaded', function (event) {
    const teamContent = document.getElementsByClassName('content')[1];

    const $pwsjWhiteColor = '#FFFFFF';

    const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ullam. Itaque assumenda vel repudiandae corporis, eveniet qui facilis maxime consectetur eius non at eum libero quisquam delectus illum nisi dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic, sapiente similique fugiat exercitationem soluta dolorem labore tempora molestiae at a maiores commodi doloribus fugit eligendi debitis quibusdam cum quidem.';

    const teamMember1 = {
        name: 'Arkadiusz Modrzew',
        univ: 'University of Gdansk, Poland',
        descript: description,
        email: 'amodrzew@univ.gd',
        image: 'images/Richie_McCaw.jpg'
    }

    const teamMember2 = {
        name: 'Roma Valentina',
        univ: 'University of Roma, Italy',
        descript: description,
        email: 'rvalentia@univ.it'
    }

    const teamMember3 = {
        name: 'Richie McCaw',
        univ: 'University of Wellington, New Zealand',
        descript: description,
        email: 'rvalentia@univ.it'
    }

    const teamArray = [teamMember1, teamMember2, teamMember3];

    const createBox = function() {
        const createElem = document.createElement('div');
        teamContent.appendChild(createElem);
        const boxes = teamContent.getElementsByTagName('div');
        const boxNmbr = boxes.length;
        teamContent.children[boxNmbr].setAttribute('class', 'item__box');
    }

    const addBoxElements = function() {
        const boxes = teamContent.getElementsByClassName('item__box');
        console.log(boxes);

        [].forEach.call(boxes, function (item) {
            item.style.width = '100%';
            item.style.minHeight = '100px';
            item.style.marginTop = '15px';
            item.style.backgroundColor = $pwsjWhiteColor;
            console.log(item);
		});
    }
    
    teamArray.forEach(createBox);
    addBoxElements();
});