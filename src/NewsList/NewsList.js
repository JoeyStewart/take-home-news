import Card from "../Card/Card.js"
import './Movies.css'
import PropTypes from 'prop-types'

export default function Movies({ movies, showDetails }) {
  if (!movies || movies.length === 0) {
    return null;
  } else {
    return (
      <div className="movies-container">
      {movies.map((movie) => (
        <Card 
        title={movie.title} 
        image={movie.poster_path} 
        rating={movie.average_rating.toFixed(1)}
        id={movie.id}
        key={movie.id} 
        showDetails={() => showDetails(movie.id)}
        />
        ))}
    </div>
  );
}
}


Movies.propTypes = {
  movies: PropTypes.arrayOf(
   PropTypes.shape({
     title: PropTypes.string,
     poster_path: PropTypes.string,
     average_rating: PropTypes.number,
     id: PropTypes.number,
   })
  ).isRequired,
  showDetails: PropTypes.func.isRequired,

};