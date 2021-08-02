'use strict';
/* 1.1 */

function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 0.75);
};

const my_product = new Product('Шкаф', 4320);
my_product.make25PercentDiscount();
console.log(my_product);

/* 1.1 */

class Product2 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price - (this.price * 0.75);
    }
}

const my_product2 = new Product2('Шкаф', 4320);
my_product2.make25PercentDiscount();
console.log(my_product2);

/* */

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

const my_post = new Post('zara', 'zara1', new Date());
console.log(my_post);
my_post.edit('text');
console.log(my_post);


class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const attached1 = new AttachedPost('zara2', 'zara2', new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit('texttext');
console.log(attached1);