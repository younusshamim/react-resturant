import DISHES from '../data/dishes';
import COMMENTS from '../data/comments';
import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';

// const initialState = {
//     dishes: DISHES,
//     comments: COMMENTS,
//     // sample: "Hello World"
// }

const dishReducer = (dishState = DISHES, action) => {
    switch (action.type) {
        default:
            return dishState;
    }
}

const commentReducer = (commentState = COMMENTS, action) => {
    switch (action.type) {
        // case 'ADD_COMMENT':
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            return commentState.concat(comment);

        default:
            return commentState;
    }

    // if (action.type === 'ADD_COMMENT') {
    //     let comment = action.payload;
    //     comment.id = commentState.length;
    //     comment.date = new Date().toDateString();
    //     return commentState.concat(comment);
    // }

    // return commentState;
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
})



// export const Reducer = (state = initialState, action) => {
    // if (action.type === 'TEST') {
    //     return {
    //         ...state,
    //         sample: action.str
    //     }
    // }

    // if (action.type === 'ADD_COMMENT') {
    //     let comment = action.payload;
    //     comment.id = state.comments.length;
    //     comment.date = new Date().toDateString();
    //     return {
    //         ...state,
    //         comments: state.comments.concat(comment)
    //     }
    // }

//     return state;
// }