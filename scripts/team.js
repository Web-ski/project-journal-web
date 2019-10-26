document.addEventListener('DOMContentLoaded', function (event) {
    const teamContent = document.getElementsByClassName('content')[1];

    const $pwsjWhiteColor = '#FFFFFF';

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
        const boxArray = [];
        console.log(boxArray);

        [].forEach.call(boxes, function (item) {
            boxArray.push(item); 
        });

        const boxStyling = function(item) {
            item.style.width = '100%';
            item.style.minHeight = '100px';
            item.style.marginTop = '15px';
            item.style.backgroundColor = $pwsjWhiteColor;
            item.style.padding = '10px';
        }

        const createItems = function(item) {
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

        const fillItems = function(item) {
            const itemIndex = boxArray.indexOf(item);

            const image = item.getElementsByClassName('article__image')[0];
            const imageSrc = teamArray[itemIndex].image;
            image.setAttribute('src', imageSrc);
            image.style.height = '100px';
            image.style.display = 'flex';

            const prgrph = item.getElementsByClassName('item__text');
            prgrph[0].textContent = teamArray[itemIndex].name;
            prgrph[1].textContent = teamArray[itemIndex].univ;
            prgrph[2].textContent = teamArray[itemIndex].email;
            prgrph[3].textContent = teamArray[itemIndex].descript;
        }
        
        boxArray.forEach(boxStyling);
        boxArray.forEach(createItems);
        boxArray.forEach(fillItems);
    }
    
    teamArray.forEach(createBox);
    addBoxElements();
});