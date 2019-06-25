import { SHOPPING } from '../shared/shoppingItems';
import * as ActionTypes from './ActionTypes';

export const Shopping = (state = SHOPPING, action) => {
    switch(action.type){
        case ActionTypes.ADD_ITEM:
            var item = action.payload;
            item.id = state.length;
            return state.concat(item);
        case ActionTypes.EDIT_ITEM:
            var item = action.payload;
        default:
            return state;
    }
}