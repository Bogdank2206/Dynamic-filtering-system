import filtersReducer from "../../../State manager/FiltersReducer";
import {configureStore} from "@reduxjs/toolkit";
import {describe, expect, test} from "@jest/globals";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {Provider} from "react-redux";
import Brands from "./Brands";

const preloadedState = {
    filters: {
        brands: {
            "Brands A": false, "Brands B": false, "Brands C": false, "Brands D": false,
            "Brands E": false, "Brands F": false, "Brands G": false, "Brands H": false,
            "Brands I": false, "Brands J": false, "Brands K": false, "Brands L": false,
            "Brands M": false, "Brands N": false, "Brands O": false, "Brands P": false,
            "Brands Q": false, "Brands R": false, "Brands S": false, "Brands T": false,
        },
        brandsLength: 20,
    },
}

const store = configureStore({
    reducer: {
        filters: filtersReducer,
    },
    preloadedState,
})

describe("Brands component", () => {
    test("render without content", () => {
        const store = configureStore({
            reducer: {
                filters: filtersReducer,
            },
            preloadedState: {
                filters: {
                    brands: {},
                    brandsLength: 0,
                }
            },
        });
        render(
            <Provider store={store}>
                <Brands/>
            </Provider>
        )
        const text = screen.getByText(/brands/i);
        const showMoreButton = screen.queryByText(/Show more/i);
        const hideButton = screen.queryByText(/Hide/i);
        expect(showMoreButton).toBeNull();
        expect(hideButton).toBeNull();
        expect(text).toBeInTheDocument();
    })
    test("render with content", () => {
        render(
            <Provider store={store}>
                <Brands/>
            </Provider>
        )
        const allTextBrands = screen.getAllByText(/brands/i);
        const text = allTextBrands.find((el) => (el.tagName === "B"))
        const checkBoxes = screen.getAllByRole("checkbox");
        expect(text).toBeInTheDocument();
        expect(checkBoxes).toBeDefined();
    })
    test("Show and hide buttons work correctly", async () => {
        render(
            <Provider store={store}>
                <Brands/>
            </Provider>
        )

        const showMoreButton = screen.getByText(/Show more/i);
        expect(showMoreButton).toBeInTheDocument();
        await waitFor(() => {
            const checkBoxes = screen.getAllByRole('checkbox');
            expect(checkBoxes).toHaveLength(3);
        });
        fireEvent.click(showMoreButton);
        await waitFor(() => {
            const checkBoxes = screen.getAllByRole('checkbox');
            expect(checkBoxes).toHaveLength(6);
        });

        const hideButton = screen.getByText(/Hide/i);
        expect(hideButton).toBeInTheDocument();
        fireEvent.click(hideButton);
        await waitFor(() => {
            const checkBoxes = screen.getAllByRole('checkbox');
            expect(checkBoxes).toHaveLength(3);
        });
    })
})