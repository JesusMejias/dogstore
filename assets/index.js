document.addEventListener("touchstart", function(){}, true);
const imageBtns = Array.from(document.querySelectorAll('.main__featured-items__container__images__img'));
const showHrsBtns = Array.from(document.querySelectorAll('.main__location button'));
const pinBtns = Array.from(document.querySelectorAll('.main__location__map__pin > i'));
const closeBtns = Array.from(document.querySelectorAll('.main__location__map__pin__bubble__address__close'));
const items = [{
    title: 'Toy Elephant',
    content: `This elephant toy can be your dog's new companion. Dogs seem to love it when it makes noises but it can also annoy the owners.`,
    price: 18.24,
    image: './assets/featured-item-1.jpg'
}, {
    title: 'Leather Wheel',
    content: 'The chewable wheel made out of leather can be used in many different situations to play with your dog. It is also water resistant.',
    price: 192.32,
    image: './assets/featured-item-2.jpg'
}, {
    title: 'Urban Outfit',
    content: 'Sedulo, inquam, faciam. Egone non intellego, quid sit don Graece, Latine voluptas? Nullus est igitur cuiusquam dies natalis.',
    price: 85.23,
    image: './assets/featured-item-3.jpg'
}];

imageBtns.map((img, index) => {
    img.addEventListener('click', () => changeInfo(index));
});

showHrsBtns.map(button => {
    button.addEventListener('click', showHours);
});

pinBtns.map(button => {
    button.addEventListener('click', showAddress);
});

closeBtns.map(button => {
    button.addEventListener('click', closeAddress);
});

function changeInfo(index) {
    document.querySelector('.main__featured-items__container__info > h3').innerText = items[index].title;
    document.querySelector('.main__featured-items__container__info > p').innerText = items[index].content;
    document.querySelector('.main__featured-items__container__full-image__price').innerText = `$${items[index].price}`;
    document.querySelector('.main__featured-items__container__full-image').style.backgroundImage = `url(${items[index].image})`;
    imageBtns.map((img, i) => {
        img.classList.remove('main__featured-items__container__images__img--selected');
        if (index == i) {
            img.classList.add('main__featured-items__container__images__img--selected');
        }
    });
}

function showHours(button) {
    const box = button.target.closest('.main__location').querySelector('.main__location__map__hours-more');
    const pin = button.target.closest('.main__location').querySelector('.main__location__map__pin');
    if (box.classList.contains('main__location__map__hours-more--gone')) {
        pin.classList.add('main__location__map__pin--hours-shown');
        box.classList.remove('main__location__map__hours-more--gone');
        button.target.innerText = 'Show Map';
    } else {
        pin.classList.remove('main__location__map__pin--hours-shown');
        box.classList.add('main__location__map__hours-more--gone');
        button.target.innerText = 'Show Hours';
    }
}

function showAddress(button) {
    const parentElement = button.target.closest('.main__location__map').querySelector('.main__location__map__pin');
    if (!parentElement.classList.contains('sticky')) {
        parentElement.classList.add('sticky');
    }
}

function closeAddress(button) {
    const parentElement = button.target.closest('.main__location__map').querySelector('.main__location__map__pin');
    if (parentElement.classList.contains('sticky')) parentElement.classList.remove('sticky');
}