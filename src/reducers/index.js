import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from '../actions'


const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false,
};

export function movies(state = initialMoviesState, action) {
    console.log('MOVIES REDUCERS');
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return {
                ...state,
                favourites: filteredArray
            };
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            };

        default:
            return state;
    }
}

const initalSearchState = {
    results: {}
};

export function search(state = initalSearchState, action) {
    console.log('SEARCH REDUCERS');
    return state;
}

const initialRootState = {
    movies: initialMoviesState,
    search: initalSearchState
};

export default function rootReducer(state = initialRootState, action) {
    return {
        movies: movies(state.movies, action),
        search: search(state.search, action)
    }
}