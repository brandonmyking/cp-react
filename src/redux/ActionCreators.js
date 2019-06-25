import * as ActionTypes from './ActionTypes';

export const addItem = (itemId, image, title, price) => ({
    type: ActionTypes.ADD_ITEM,
    payload: {
        itemId: itemId,
        image: image,
        title: title,
        price: price
    }
});