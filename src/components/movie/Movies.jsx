import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import '../../css/movies.css';

class Movies extends React.Component {

	state = {
		isLoading: true,
		movies: []
	};
	getMovies = async () => {
		const { 
      data: { 
        data: { movies } 
      } 
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    
		this.setState({ movies, isLoading: false });
	};
	componentDidMount() {
		this.getMovies();
	}

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="container">
        {" "}
        {isLoading ?  
          <div>
            <span className="loader__text">Loading...</span>
          </div>
          : 
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        }
        {" "}
      </div>
    );
  }

}

export default Movies;