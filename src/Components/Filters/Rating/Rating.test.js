import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import filtersReducer from "../../../State manager/FiltersReducer";
import Rating from "./Rating";
import {describe, expect, test} from "@jest/globals";
import {fireEvent, render, screen} from "@testing-library/react";

const store = configureStore({
    reducer: {
        filters: filtersReducer,
    },
})

describe("Rating component", () => {
    test("Render without crashing", () => {
        render(
            <Provider store={store}>
                <Rating/>
            </Provider>
        )
        const checkBoxes = screen.getAllByRole("checkbox");
        expect(checkBoxes).toBeDefined();
        expect(checkBoxes).toHaveLength(4);
    })
    test("Select rating buttons work correctly", () => {
        const mockSetMinRating = jest.fn();
        render(
            <Provider store={store}>
                <Rating setMinRating={mockSetMinRating}/>
            </Provider>
        )

        const checkBoxList = screen.getAllByRole("checkbox");
        checkBoxList.forEach((checkBox, idx) => {
            fireEvent.click(checkBox);
            expect(mockSetMinRating).toBeCalledWith(idx + 1);
        });
    });
    test("Select rating work correctly", async () => {
        render(
            <Provider store={store}>
                <Rating/>
            </Provider>
        )

        const checkBoxes = screen.getAllByRole("checkbox");
        checkBoxes.forEach(checkBox => {
            fireEvent.click(checkBox);
            expect(checkBox.checked).toBeTruthy();
            fireEvent.click(checkBox);
            expect(checkBox.checked).toBeFalsy();
        })
    })
})