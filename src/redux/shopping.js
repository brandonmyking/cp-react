import { SHOPPING } from '../shared/shoppingItems';
import * as ActionTypes from './ActionTypes';

export const shopping = (state = SHOPPING, action) => {
    switch(action.type){

        case ActionTypes.ADD_ITEM:
            var item = action.payload;
            item.id = state.length;
            return state.concat(item);

        case ActionTypes.EDIT_ITEM:
            var item = action.payload;
            state[item.id] = {
                image: item.image,
                title: item.title,
                price: item.price
            };
            return state;

        default:
            return state;
    }
}