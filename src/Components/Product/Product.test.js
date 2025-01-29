import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "../../State manager/UsersReducer";
import filtersReducer from "../../State manager/FiltersReducer";
import {Provider} from "react-redux";
import {describe, expect, test} from "@jest/globals";
import {fireEvent, render, screen} from "@testing-library/react";
import Product from "./Product";

describe("Product component", () => {
    test("Show all users if filters are empty", () => {
        const store = configureStore({
            reducer: {
                users: usersReducer,
                filters: filtersReducer,
            },
            preloadedState: {
                filters: {
                    brands: {
                        "Brands A": false, "Brands B": false, "Brands C": false, "Brands D": false,
                        "Brands E": false, "Brands F": false, "Brands G": false, "Brands H": false,
                        "Brands I": false, "Brands J": false, "Brands K": false, "Brands L": false,
                        "Brands M": false, "Brands N": false, "Brands O": false, "Brands P": false,
                        "Brands Q": false, "Brands R": false, "Brands S": false, "Brands T": false,
                    },
                    brandsLength: 20,
                    cost: {
                        minCost: 0,
                        maxCost: 800,
                        maxPrice: 800,
                    },
                    categories: {
                        Electronics: false, Footwear: false, Clothing: false,
                        Sports: false, Home: false,
                    },
                    categoriesLength: 9,
                    minRating: 0,
                },
                users: [
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
                ],
            },
        });
        render(
            <Provider store={store}>
                <Product/>
            </Provider>
        )
        let showMoreButton, products, length = 5;
        products = screen.getAllByRole('img');
        expect(products).toHaveLength(length);
        while ((showMoreButton = screen.queryByText(/Show more/)) != null) {
            fireEvent.click(showMoreButton);
            length += 5;
            products = screen.getAllByRole('img');
            expect(products).toHaveLength(length);
        }
    })
    test("Show users with filters", () => {
        const preloadedState = {
            filters: {
                brands: {
                    "Brands A": false, "Brands B": false, "Brands C": false, "Brands D": false,
                    "Brands E": false, "Brands F": false, "Brands G": false, "Brands H": true,
                    "Brands I": false, "Brands J": false, "Brands K": false, "Brands L": false,
                    "Brands M": false, "Brands N": false, "Brands O": false, "Brands P": false,
                    "Brands Q": false, "Brands R": false, "Brands S": false, "Brands T": false,
                },
                brandsLength: 20,
                cost: {
                    minCost: 500,
                    maxCost: 799.99,
                    maxPrice: 799.99,
                },
                categories: {
                    Electronics: true, Footwear: false, Clothing: false,
                    Sports: false, Home: false,
                },
                categoriesLength: 9,
                minRating: 4,
            },
            users: [
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
            ],
        }
        const store = configureStore({
            reducer: {
                users: usersReducer,
                filters: filtersReducer,
            },
            preloadedState,
        });
        render(
            <Provider store={store}>
                <Product/>
            </Provider>
        )
        const products = screen.getAllByRole('img');
        expect(products.length).toBe(1);
    })
    test("Show products not found", () => {
        const preloadedState = {
            filters: {
                brands: {
                    "Brands A": false, "Brands B": true, "Brands C": false, "Brands D": false,
                    "Brands E": false, "Brands F": false, "Brands G": false, "Brands H": false,
                    "Brands I": false, "Brands J": false, "Brands K": false, "Brands L": false,
                    "Brands M": false, "Brands N": false, "Brands O": false, "Brands P": false,
                    "Brands Q": false, "Brands R": false, "Brands S": false, "Brands T": false,
                },
                brandsLength: 20,
                cost: {
                    minCost: 500,
                    maxCost: 799.99,
                    maxPrice: 799.99,
                },
                categories: {
                    Electronics: true, Footwear: false, Clothing: false,
                    Sports: false, Home: false,
                },
                categoriesLength: 9,
                minRating: 4,
            },
            users: [
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
            ],
        }
        const store = configureStore({
            reducer: {
                users: usersReducer,
                filters: filtersReducer,
            },
            preloadedState,
        })
        render(
            <Provider store={store}>
                <Product/>
            </Provider>
        )
        const products = screen.queryByRole('img');
        expect(products).toBeNull();
        const text = screen.queryByText(/Products not found/i);
        expect(text).toBeInTheDocument();
    })
})
