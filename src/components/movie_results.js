import React, { Component } from 'react';
import Movie from './movie';

class MovieResults extends Component {
	constructor(props) {
		super();
	}
	
	render() {
		return (
			<div>
				<h3 className="text-center results">Results</h3>
				{
					
					this.props.movies.map(function(movie, i){
						return(
							<Movie movie={movie} key={i} />
						)
					})
				}
			</div>
		)
	}
}

export default MovieResults;