import React from 'react';

class MoviesCard extends React.Component {
    render() {
        const { movie } = this.props;
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
                        <button className="favourite-btn">Favorite</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MoviesCard;