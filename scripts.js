function add_product_to_catalog(product) {
    let div = document.createElement("div");
    div.innerHTML = `<div id="${product.name}_div" class="product" >` + `<img src="${product.img}" alt="">` +
        `${product.name}. Цена: ${product.price}` + '<br>' +
        `<button id="${product.name}">Купить</button>` + '</div>'
    var body = document.getElementById("catalog_body");
    body.appendChild(div)

}

function getBasket(basket) {
    var basket_div = document.getElementById("basket_div");
    if (basket.length == 0) {
        basket_div.innerHTML = "Корзина пуста"
    }
    else {
        basket_div.innerHTML = `В корзине: ${countBasketNumber(basket)} товаров на сумму ${countBasketPrice(basket)} рублей`
    }
}

function countBasketPrice(basket) {
    total_price = 0;
    for (var i = 0; i < basket.length; i++) {
        total_price += basket[i].price * basket[i].count;
    }
    return total_price
}

function countBasketNumber(basket) {
    total_number = 0;
    for (var i = 0; i < basket.length; i++) {
        total_number += basket[i].count;
    }
    return total_number
}

function add_button(product) {
    let staf = {
        name: product.name,
        count: 1,
        price: product.price,
    }
    var button = document.getElementById(`${product.name}`);
    button.addEventListener('click', function (product) {
        let flag = false;
        for (var i = 0; i < basket.length; i++) {
            if (basket[i].name == staf.name) {
                flag = true
                break
            }
        }
        if (flag == true) {
            basket[i].count++
            let div = document.getElementById(`${staf.name}`);
            div.innerHTML = `<div id="${staf.name}">` + `${staf.name}. Количество: ${basket[i].count} Цена: ${staf.price * staf.count}` + '</div>'
        } else {
            basket.push(staf)
            var content = document.getElementById("basket_content");
            let div = document.createElement("div");
            div.innerHTML = `<div id="${staf.name}">` + `${staf.name}. Количество: ${staf.count} Цена: ${staf.price * staf.count}` + '</div>'
            content.appendChild(div)
        }
        getBasket(basket);
    })

}


var basket = Array();

var apple = {
    name: 'Яблоко',
    price: 100,
    img: 'apple.png',
}

var pineapple = {
    name: 'Ананас',
    price: 270,
    img: 'pineapple.png',
}

getBasket(basket);
add_product_to_catalog(apple);
add_button(apple);
add_product_to_catalog(pineapple);
add_button(pineapple);
var b_c = document.getElementById("button_basket_content");
b_c.addEventListener('click', function () {
    let adress = document.getElementById("adress")
    adress.style.display = "block"
    let basket_content = document.getElementById("basket_content");
    basket_content.style.display = "none"
})

var adress_button = document.getElementById("button_adress");
adress_button.addEventListener('click', function () {
    let adress = document.getElementById("adress")
    adress.style.display = "none"
    let comment = document.getElementById("comment")
    comment.style.display = "block"
})