var products = {
    0: {
        "image": "../images/1.jpeg",
        "title": "Jaranga dress",
        "price": "10400.00"
    },
    1: {
        "image": "../images/2.jpg",
        "title": "Pullover",
        "price": "6500.00"
    },
    2: {
        "image": "../images/4.jpg",
        "title": "Suit with a top and pants",
        "price": "3300.00"
    }
};

var cols = document.querySelectorAll('.col-8 .col-12');
cols.forEach(function(col) {
    var c = document.querySelector('template').content.cloneNode(true);
    var item = products[Math.floor(Math.random()*3)];

    var title = c.querySelector('.product-title');
    title.textContent += item['title'];

    var price = c.querySelector('.product-price');
    price.textContent += item['price'];

    var image = c.querySelector('.product-image img');
    image.setAttribute('src', item['image']);
    col.append(c);
});


function  toggleClass(selector) {
    var elements = document.querySelectorAll('ul');
    var thisEl;
    elements.forEach(function(e) {
        if(!e.classList.contains('d-none')) {
            e.classList.add('d-none');
            thisEl = e;
        }
    })

    var element = document.getElementById(selector);
    if(thisEl != undefined && element == thisEl)
        return;
    element.classList.toggle('d-none');
}

function show(value) {
    document.querySelector('label.active').classList.remove('active');
    document.querySelector("label[for='option"+value+"']").classList.add('active');
    
    
    var elements = document.querySelectorAll('.catalog');
    elements.forEach(function(e) {
        if(!e.classList.contains('d-none')) {
            e.classList.add('d-none');
        }
    });

    const selector = ".catalog[value='"+value+"']";
    var element = document.querySelector(selector);
    element.classList.remove('d-none');
}