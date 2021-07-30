'use strict';

/* 1 С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10
включительно */

for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 == 0) {
        console.log(`${i} - это четное число`);
    } else {
        console.log(`${i} - это нечетное число`);
    }
}


/* 2 */

const post = {
    author : 'John',
    postId : 23,
    comments : [
        {
            userId: 10,
            userName: 'Alex',
            text: 'Lorem ipsum',
            rating: {
                likes: 10,
                dislikes: 2
            }
        },
        {
            userId: 5,
            userName: 'Jane',
            text: 'Lorem ipsum 2',
            rating: {
                likes: 3,
                dislikes: 1
            }
        },

    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);


/* 3 */

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

for  (let i = 0; i < products.length; i++ ) {
    console.log(products[i].price * 0.85);
};

/* 4 */

const product = [
    {
        id: 3,
        price: 127,
        photos: [
            '1.jpg',
            '2.jpg'
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            '3.jpg'
        ]
    },
    {
        id: 8,
        price: 78
    }
];

for (let i = 0; i < product.length; i ++) {
    if (product[i].photos > Array(0)) {
    console.log(product[i])
    };
};

let my_arr = []

for (let i = 0; i <product.length; i ++) {
    my_arr.push(product[i].price)
}

console.log(my_arr.sort((a,b) => a - b))


/* 6 */

for (let i = 1; i <= 5; i++) {
    console.log('*'.repeat(i));
};
