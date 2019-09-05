import { SHOPPING } from '../shared/shoppingItems';
import * as ActionTypes from './ActionTypes';

export const shopping = (state = SHOPPING, action) => {
    switch(action.type){

        case ActionTypes.ADD_ITEM:
            var item = action.payload;
            item.id = state.length;
            return state.concat(item);

        default:
            return state;
    }
}