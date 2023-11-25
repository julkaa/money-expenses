// reduxModalLogic.js

import {createStore} from 'redux';

// Action Types
const TOGGLE_MODAL = 'TOGGLE_MODAL';

// Action Creators
const toggleModal = () => ({
    type: TOGGLE_MODAL,
});

// Reducer
const initialState = {
    isModalOpen: false,
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                isModalOpen: !state.isModalOpen,
            };
        default:
            return state;
    }
};

// Store
const store = createStore(modalReducer);

export {store, toggleModal};
