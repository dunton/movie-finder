import Dispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import { assign } from 'object-assign';
import searchMoviesCall from '../utils/appApi';
import util from 'util';
import ActionTypes from '../constants/app_constants';

const CHANGE_EVENT = 'change';

let _movies = [];
let _selected = '';

class AppStore extends EventEmitter {
	constructor() {
		super();
		this.dispatchToken = Dispatcher.register(this._registerToActions.bind(this));

	}

	setMovieResults(movies) {
		_movies=movies;

	}

	_registerToActions(payload) {
		let action = payload;
		//console.log(action.actionType)


		switch(action.actionType) {
			case ActionTypes.SEARCH_MOVIES:
				
				searchMoviesCall(action.movie.title);
				this.emit(CHANGE_EVENT);
				break;
			case ActionTypes.RECEIVE_MOVIE_RESULTS:
				this.setMovieResults(action.movies);
				
				this.emit(CHANGE_EVENT);
				break;
			default:
				break;
		}
	}
	
	emitChange(CHANGE_EVENT) {
		this.emit(CHANGE_EVENT);
	}

	getMovies() {
		return _movies;
	}

	// HOOK BACK TO CHANGED EVENT
	addChangeListener(callback) {
		this.on('change', callback);

	}

	// REMOVES LISTENER FROM CHANGED EVENT
	removeChangeListener(callback) {
		this.removeChangeListener(CHANGE_EVENT, callback);
	}

}



export default new AppStore();