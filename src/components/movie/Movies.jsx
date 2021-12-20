import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import '../../css/movies.css';
import {Spinner} from 'react-bootstrap';

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
          <div style={{ marginTop: '50px' }}>  
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="info" />
            <Spinner animation="border" variant="light" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
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