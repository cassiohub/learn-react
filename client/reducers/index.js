import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import selecionadosStore from './selecionados';

const rootReducer = combineReducers({
	posts, 
	comments, 
	selecionadosStore,
	routing: routerReducer,
});

export default rootReducer;