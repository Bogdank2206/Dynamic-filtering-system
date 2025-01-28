const SET_MIN_COST = 'filters/SET_MIN_COST';
const SET_MAX_COST = 'filters/SET_MAX_COST';
const GET_USERS_DATA = 'filters/GET_USERS_DATA';
const TOGGLE_BRANDS_CHECKED = 'filters/TOGGLE_BRANDS_CHECKED';
const TOGGLE_CATEGORY_CHECKED = 'filters/TOGGLE_CATEGORY_CHECKED';
const SET_MIN_RATING = 'filters/SET_MIN_RATING';

const initialState = {
    cost: {
        minCost: 0,
        maxCost: -1,
        maxPrice: -1,
    },
    brands: {},
    brandsLength: 0,
    categories: {},
    categoriesLength: 0,
    minRating: 0,
}

const FiltersReducer = (state = initialState, action) => {
    console.log('filters reducer', action);
    switch (action.type) {
        case SET_MIN_COST:
            return {
                ...state,
                cost: {
                    ...state.cost,
                    minCost: action.minCost,
                },
            }
        case SET_MAX_COST:
            return {
                ...state,
                cost: {
                    ...state.cost,
                    maxCost: action.maxCost,
                },
            }
        case GET_USERS_DATA:
            if (action.users) {
                let maxPrice = 0;
                const brands = {};
                const categories = {};
                for (let i = 0; i < action.users.length; i++) {
                    maxPrice = Math.max(maxPrice, Number(action.users[i].price));
                    brands[action.users[i].brand] = false;
                    categories[action.users[i].category] = false;
                }
                return {
                    ...state,
                    cost: {
                        ...state.cost,
                        maxCost: state.cost.maxCost === -1 ? maxPrice : state.cost.maxCost,
                        maxPrice,
                    },
                    brands,
                    brandsLength: Object.keys(brands).length,
                    categories,
                    categoriesLength: Object.keys(categories).length,
                }
            } else {
                return state;
            }
        case TOGGLE_BRANDS_CHECKED:
            return {
                ...state,
                brands: {
                    ...state.brands,
                    [action.brand]: !state.brands[action.brand],
                },
            }
        case TOGGLE_CATEGORY_CHECKED:
            return {
                ...state,
                categories: {
                    ...state.categories,
                    [action.category]: !state.categories[action.category],
                },
            }
        case SET_MIN_RATING:
            return {
                ...state,
                minRating: action.minRating,
            }
        default:
            return state;
    }
}

export const setMinCost = (minCost) => ({
    type: SET_MIN_COST,
    minCost,
})

export const setMaxCost = (maxCost) => ({
    type: SET_MAX_COST,
    maxCost,
})

export const getUsersData = (users) => ({
    type: GET_USERS_DATA,
    users,
})

export const toggleBrandChecked = (brand) => ({
    type: TOGGLE_BRANDS_CHECKED,
    brand,
})

export const toggleCategoryChecked = (category) => ({
    type: TOGGLE_CATEGORY_CHECKED,
    category,
})

export const setMinRating = (minRating) => ({
    type: SET_MIN_RATING,
    minRating,
})


export default FiltersReducer;