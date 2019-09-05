import { createStore, compose} from 'redux';
import { rootReducer } from './root';


export const ConfigureStore = () => {
    const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    return store;
}


