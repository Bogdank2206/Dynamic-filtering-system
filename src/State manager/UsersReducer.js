/*
const initialState = [
    {
        "id": 1,
        "name": "Wireless Headphones",
        "category": "Electronics",
        "brand": "Brands A",
        "price": 99.99,
        "rating": 4.5,
        "imageUrl": "https://example.com/images/headphones.jpg"
    },
    {
        "id": 2,
        "name": "Bluetooth Speaker",
        "category": "Electronics",
        "brand": "Brands B",
        "price": 49.99,
        "rating": 4.0,
        "imageUrl": "https://example.com/images/speaker.jpg"
    },
    {
        "id": 3,
        "name": "Running Shoes",
        "category": "Footwear",
        "brand": "Brands C",
        "price": 59.99,
        "rating": 4.2,
        "imageUrl": "https://example.com/images/shoes.jpg"
    },
    {
        "id": 4,
        "name": "Smartphone",
        "category": "Electronics",
        "brand": "Brands D",
        "price": 499.99,
        "rating": 4.8,
        "imageUrl": "https://example.com/images/smartphone.jpg"
    },
    {
        "id": 5,
        "name": "Leather Jacket",
        "category": "Clothing",
        "brand": "Brands E",
        "price": 199.99,
        "rating": 3,
        "imageUrl": "https://example.com/images/jacket.jpg"
    }
]
*/

const initialState = [
    {
        "id": 1,
        "name": "Wireless Headphones",
        "category": "Electronics",
        "brand": "Brands A",
        "price": 99.99,
        "rating": 4.5,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Wireless_Headphones.jpg"
    },
    {
        "id": 2,
        "name": "Bluetooth Speaker",
        "category": "Electronics",
        "brand": "Brands B",
        "price": 49.99,
        "rating": 4.0,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Bluetooth_speaker.jpg"
    },
    {
        "id": 3,
        "name": "Running Shoes",
        "category": "Footwear",
        "brand": "Brands C",
        "price": 59.99,
        "rating": 4.2,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/99/Running_shoes.jpg"
    },
    {
        "id": 4,
        "name": "Smartphone",
        "category": "Electronics",
        "brand": "Brands D",
        "price": 499.99,
        "rating": 4.8,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Smartphone.jpg"
    },
    {
        "id": 5,
        "name": "Leather Jacket",
        "category": "Clothing",
        "brand": "Brands E",
        "price": 199.99,
        "rating": 4.7,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Leather_Jacket.jpg"
    },
    {
        "id": 6,
        "name": "Gaming Mouse",
        "category": "Electronics",
        "brand": "Brands F",
        "price": 39.99,
        "rating": 4.4,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/db/Gaming_mouse.jpg"
    },
    {
        "id": 7,
        "name": "Yoga Mat",
        "category": "Sports",
        "brand": "Brands G",
        "price": 25.99,
        "rating": 4.6,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/88/Yoga_mat.jpg"
    },
    {
        "id": 8,
        "name": "Laptop",
        "category": "Electronics",
        "brand": "Brands H",
        "price": 799.99,
        "rating": 4.7,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/43/Laptop.jpg"
    },
    {
        "id": 9,
        "name": "Desk Lamp",
        "category": "Home",
        "brand": "Brands I",
        "price": 29.99,
        "rating": 4.3,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/60/Desk_lamp.jpg"
    },
    {
        "id": 10,
        "name": "Electric Toothbrush",
        "category": "Health",
        "brand": "Brands J",
        "price": 59.99,
        "rating": 4.7,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Electric_toothbrush.jpg"
    },
    {
        "id": 11,
        "name": "Backpack",
        "category": "Accessories",
        "brand": "Brands K",
        "price": 49.99,
        "rating": 4.6,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Backpack.jpg"
    },
    {
        "id": 12,
        "name": "Coffee Maker",
        "category": "Kitchen",
        "brand": "Brands L",
        "price": 79.99,
        "rating": 4.5,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/41/Coffee_maker.jpg"
    },
    {
        "id": 13,
        "name": "Fitness Tracker",
        "category": "Electronics",
        "brand": "Brands M",
        "price": 149.99,
        "rating": 4.8,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/81/Fitness_tracker.jpg"
    },
    {
        "id": 14,
        "name": "Electric Kettle",
        "category": "Kitchen",
        "brand": "Brands N",
        "price": 39.99,
        "rating": 4.4,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Electric_kettle.jpg"
    },
    {
        "id": 15,
        "name": "Wireless Keyboard",
        "category": "Electronics",
        "brand": "Brands O",
        "price": 49.99,
        "rating": 4.2,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wireless_keyboard.jpg"
    },
    {
        "id": 16,
        "name": "Portable Power Bank",
        "category": "Electronics",
        "brand": "Brands P",
        "price": 29.99,
        "rating": 4.6,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/42/Portable_power_bank.jpg"
    },
    {
        "id": 17,
        "name": "Office Chair",
        "category": "Furniture",
        "brand": "Brands Q",
        "price": 129.99,
        "rating": 4.5,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Office_chair.jpg"
    },
    {
        "id": 18,
        "name": "Tablet",
        "category": "Electronics",
        "brand": "Brands R",
        "price": 349.99,
        "rating": 4.7,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/79/Tablet.jpg"
    },
    {
        "id": 19,
        "name": "Winter Boots",
        "category": "Footwear",
        "brand": "Brands S",
        "price": 99.99,
        "rating": 4.4,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Winter_boots.jpg"
    },
    {
        "id": 20,
        "name": "Blender",
        "category": "Kitchen",
        "brand": "Brands T",
        "price": 69.99,
        "rating": 4.6,
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Blender.jpg"
    }
];


const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default UsersReducer;
