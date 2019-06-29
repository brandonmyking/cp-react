import { SHOPPING } from '../shared/shoppingItems';
import * as ActionTypes from './ActionTypes';

export const Shopping = (state = SHOPPING, action) => {
    switch(action.type){
        case ActionTypes.ADD_ITEM:
            console.log(action.payload);
            var item = action.payload;
            item.id = state.length;
            return state.concat(item);
        default:
            return state;
    }
}