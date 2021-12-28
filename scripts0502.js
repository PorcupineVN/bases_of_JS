function add_to_basket(name, count, price) {
    let product = {
        name: name,
        count: Number(count),
        price: Number(price),
    }
    basket.push(product)
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

var basket = Array();
//add_to_basket('Apple', 3, 100);
//add_to_basket('Orange', 2, 145)

var basket_div = document.getElementById("basket_div");
basket_div.innerHTML = `kuia-kuia! ${basket.length}`;
if (basket.length == 0) {
    basket_div.innerHTML = "Корзина пуста"
}
else {
    basket_div.innerHTML = `В корзине: ${countBasketNumber(basket)} товаров на сумму ${countBasketPrice(basket)} рублей`
}

