import Dispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/app_constants';
import searchMoviesCall from '../utils/appApi';
import axios from 'axios';



class AppActions {
	searchMovies(movie) {
		console.log('searchMovies action')
		Dispatcher.dispatch({
			actionType: ActionTypes.SEARCH_MOVIES,
			movie: movie
		})


	}

	receiveMovieResults(movies) {
		console.log('receiveMovieResults action')
		Dispatcher.dispatch({
			actionType: ActionTypes.RECEIVE_MOVIE_RESULTS,
			movies: movies
		})
	}
}

export default new AppActions();