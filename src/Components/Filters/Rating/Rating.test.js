import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import filtersReducer from "../../../State manager/FiltersReducer";
import Rating from "./Rating";
import {describe, expect, test} from "@jest/globals";
import {fireEvent, render, screen} from "@testing-library/react";

const preloadedState = {
    filters: {
        minRating: 0,
    }
}

const store = configureStore({
    reducer: {
        filters: filtersReducer,
    },
    preloadedState,
})

describe("Rating component", () => {
    test("Render without crashing", () => {
        render(
            <Provider store={store}>
                <Rating/>
            </Provider>
        )
        const checkBoxes = screen.getAllByRole("radio");
        debugger;
        expect(checkBoxes).toBeDefined();
        expect(checkBoxes).toHaveLength(6);
    })
    test("Select rating buttons work correctly", () => {
        const mockSetMinRating = jest.fn();
        render(
            <Provider store={store}>
                <Rating setMinRating={mockSetMinRating}/>
            </Provider>
        )
        const checkBoxList = screen.getAllByRole("radio");
        checkBoxList.forEach((checkBox, idx) => {
            fireEvent.click(checkBox);
            expect(mockSetMinRating).toHaveBeenCalledTimes(idx + 1);
        });
    });
})