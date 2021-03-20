// {
//     type: 'ADD_MOVIES',
// }

// {
//     type: 'DECREASE_COUNT'
// }

//action types;
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';

//action creators
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}

//action creators
export function addFavourite(movie) {
    return {
        type: ADD_FAVOURITE,
        movie
    }
}