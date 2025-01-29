import {configureStore} from "@reduxjs/toolkit";
import filtersReducer from "../../../State manager/FiltersReducer";
import {describe, expect, test} from "@jest/globals";
import {Provider} from "react-redux";
import Categories from "./Categories";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";

const preloadedState = {
    filters: {
        categories: {
            Electronics: false, Footwear: false, Clothing: false,
            Sports: false, Home: false,
        },
        categoriesLength: 9,
    }
}

const store = configureStore({
    reducer: {
        filters: filtersReducer,
    },
    preloadedState,
});

describe("Categories component", () => {
    test("render without content", () => {
        const store = configureStore({
            reducer: {
                filters: filtersReducer,
            },
            preloadedState: {
                filters: {
                    categories: {},
                    categoriesLength: 0,
                }
            },
        });
        render(
            <Provider store={store}>
                <Categories/>
            </Provider>
        )
        const text = screen.getByText(/categories/i);
        const showMoreButton = screen.queryByText(/Show more/i);
        const hideButton = screen.queryByText(/Hide/i);
        debugger;
        expect(showMoreButton).toBeNull();
        expect(hideButton).toBeNull();
        expect(text).toBeInTheDocument();
    })
    test("renders with content", () => {
        render(
            <Provider store={store}>
                <Categories/>
            </Provider>
        )
        const text = screen.getByText(/categories/i);
        const checkBoxes = screen.getAllByRole("checkbox");
        expect(text).toBeInTheDocument();
        expect(checkBoxes).toBeDefined();
    })
    test("Show and hide buttons work correctly", async () => {
        render(
            <Provider store={store}>
                <Categories/>
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