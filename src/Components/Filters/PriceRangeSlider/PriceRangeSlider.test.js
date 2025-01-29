import {configureStore} from "@reduxjs/toolkit";
import filtersReducer from "../../../State manager/FiltersReducer";
import {describe, expect, test} from "@jest/globals";
import {Provider} from "react-redux";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import PriceRangeSlider from "./PriceRangeSlider";

const preloadedState = {
    filters: {
        cost: {
            minCost: 0,
            maxCost: 800,
            maxPrice: 800,
        },
    },
}

const store = configureStore({
    reducer: {
        filters: filtersReducer,
    },
    preloadedState,
});

describe("Price Range Slider component", () => {
    test("Render without crashing", () => {
        render(
            <Provider store={store}>
                <PriceRangeSlider/>
            </Provider>
        )
        const text = screen.getByText(/Price Slider/i);
        expect(text).toBeInTheDocument();
    })
    test("Numbers input work correctly", async () => {
        render(
            <Provider store={store}>
                <PriceRangeSlider/>
            </Provider>
        )
        const numbers = screen.getAllByRole('spinbutton');
        const setMinNumber = numbers.find((el) => (el.name === 'setMinCostNumber'));
        const setMaxNumber = numbers.find((el) => (el.name === 'setMaxCostNumber'));
        const sliders = screen.getAllByRole('slider');
        const setMinSlider = sliders.find((el) => (el.name === 'setMinCostSlider'));
        const setMaxSlider = sliders.find((el) => (el.name === 'setMaxCostSlider'));

        fireEvent.change(setMinNumber, {target: {value: "80"}});
        await waitFor(() => {
            expect(setMinSlider.value).toBe("10");
        });
        fireEvent.change(setMinSlider, {target: {value: "25"}});
        await waitFor(() => {
            expect(setMinNumber.value).toBe("200");
        });

        fireEvent.change(setMaxNumber, {target: {value: "720"}});
        await waitFor(() => {
            expect(setMaxSlider.value).toBe("90");
        });
        fireEvent.change(setMaxSlider, {target: {value: "75"}});
        await waitFor(() => {
            expect(setMaxNumber.value).toBe("600");
        });

        fireEvent.change(setMinSlider, {target: {value: "80"}});
        await waitFor(() => {
            expect(setMinNumber.value).toBe("640");
        });
        await waitFor(() => {
            expect(setMaxNumber.value).toBe("640");
        });

        fireEvent.change(setMaxSlider, {target: {value: "50"}});
        await waitFor(() => {
            expect(setMinNumber.value).toBe("400");
        });
        await waitFor(() => {
            expect(setMaxNumber.value).toBe("400");
        });
    })
})