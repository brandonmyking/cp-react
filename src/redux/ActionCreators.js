import * as ActionTypes from './ActionTypes';

export const addItem = (values) => ({
    type: ActionTypes.ADD_ITEM,
    payload: {
        image: '/photos/' + values.image[0].name,
        title: values.title,
        price: values.price
    }
});

export const editItem = (values) => ({
    type: ActionTypes.EDIT_ITEM,
    payload: {
        image: '/photos/' + values.image[0].name,
        title: values.title,
        price: values.price
    }
});
