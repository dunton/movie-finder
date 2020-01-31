import React, { Component } from 'react';
import SearchForm from './components/search_form';
import AppStore from './stores/app_store';
import MovieResults from './components/movie_results';

import AppActions from './actions/app_actions';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movies: ''
		}

		this._onChange = this._onChange.bind(this);
	}

	_onChange() {
		this.setState({ movies: AppStore.getMovies() })
		//console.log('changed state of app.js')
	}
	
	componentWillMount() {
		AppStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		AppStore.removeChangeListener(this._onChange);
	}

	componentDidUpdate() {
		console.log(this.state.movies);
	}


	render() {
		let movieResults;
		if (this.state.movies == '') {
			movieResults = ''
		} else {
			movieResults = <MovieResults movies={this.state.movies} />
			
		}
		
    	return (
      		<div className="row">
      			<div className="col-md-12">
        			<SearchForm />
        			{movieResults}
        		</div>
      		</div>
    	);
  	}

}

export default App;
