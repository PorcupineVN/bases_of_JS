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
        } else {
            basket.push(staf)
        }
        getBasket(basket);
    })

}

var basket = Array();
var apple = {
    name: 'Яблоко',
    price: 100,
    img: 'img/apple.png',
}

getBasket(basket);
add_product_to_catalog(apple);
add_button(apple);