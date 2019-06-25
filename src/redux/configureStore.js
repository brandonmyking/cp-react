import { createStore, combineReducers} from 'redux';
import { Shopping } from './shopping';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            shopping: Shopping 
        })
    );

    return store;
}


