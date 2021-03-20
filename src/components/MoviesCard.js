import React from 'react';
import { addFavourite } from '../actions';

class MoviesCard extends React.Component {

    handleFavouriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(addFavourite(movie))
    }

    handleUnFavouriteClick = () => { }

    render() {
        const { movie, isFavourite } = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img alt="#" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title"> {movie.Title} </div>
                    <div className="plot"> {movie.plot} </div>
                    <div className="footer">
                        <div className="rating"> {movie.imdbRating} </div>
                        {
                            isFavourite
                                ? <button className="favourite-btn" onClick={this.handleUnFavouriteClick}>UnFavorite</button>
                                : <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favorite</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default MoviesCard;