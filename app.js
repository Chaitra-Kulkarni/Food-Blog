var foodItemDetails = [
    {
        name: 'Waffles',
        price: 100,
        img: `https://i.pinimg.com/474x/17/f0/9b/17f09b986e82cd956580125c60c5e3c9.jpg`,
        description: `The stiff batter for the waffles is made from flour, butter, brown sugar, yeast, milk, and eggs.`
    },
    {
        name: 'Idli',
        price: 50,
        img: `https://static-s.aa-cdn.net/img/amazon/30600000298380/e3f334426ec8cd0894fea866cc4fee19?v=1`,
        description: `Idli is made from ground rice or rice flour mixed with ground urad dal, salt, methi (fenugreek seeds) and water.`
    },
    {
        name: 'Aloo Paratha',
        price: 150,
        img: `https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/aloo-paratha-recipe-easy-stuffed-aloo-paratha-how-to-make-aloo-paratha-2328397.jpg`,
        description: `Aloo parathas consist of unleavened dough rolled with a mixture of mashed potato and spices, which is cooked on a hot tawa with butter or ghee.`
    }
];



// document.body.appendChild(foodContainer);
// console.log(foodContainer);
let elements = '';
// Iterating through each element of the Array
for (let i = 0; i < foodItemDetails.length; i++) {
    // Creating the Elements
    const foodItem = document.createElement('div');
    const itemImage = document.createElement('img');
    const itemName = document.createElement('h3');
    const itemCart = document.createElement('div');
    const itemPrice = document.createElement('p');
    const buyButton = document.createElement('button');

    // Adding Classes to the Elements
    foodItem.classList.add('product');
    itemCart.classList.add('cart-section');

    // Appending Child Elements to the Parent Elements
    foodItem.appendChild(itemImage);
    foodItem.appendChild(itemName);
    foodItem.appendChild(itemCart);
    itemCart.appendChild(itemPrice);
    itemCart.appendChild(buyButton);

    itemImage.setAttribute('src', foodItemDetails[i].img);
    itemName.textContent = foodItemDetails[i].name;
    itemPrice.textContent = `Price: ${foodItemDetails[i].price}$`;
    buyButton.textContent = 'Buy';
    elements += foodItem.outerHTML;
}
const foodContainer = document.createElement('div');
foodContainer.classList.add('product-container');
foodContainer.innerHTML = elements;

document.body.appendChild(foodContainer);
console.log(elements);

// foodItemDetails.forEach(foodItem => {
//     console.log(foodItem.description);
// })


