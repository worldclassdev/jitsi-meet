// @flow

import { ReducerRegistry } from '../base/redux';

import {
    CREATE_NEW_POLL,
    TOGGLE_FORM,
    UPDATE_NEW_POLL,
    UPDATE_POLL
} from './actionTypes';

declare var interfaceConfig: Object;

/**
 * Returns initial state for toolbox's part of Redux store.
 *
 * @private
 * @returns {{
 *     polls: Array
 * }}
 */
function _getInitialState() {
    return {
        /**
         * Sample Poll
         *
         *
         * @type {Array}
         */
        polls: [
            {
                question: 'What is your favourite color?',
                value: '',
                options: [
                    {
                        name: 'color2',
                        value: 'red',
                        label: 'Red',
                        voteCount: 1
                    },
                    {
                        name: 'color2',
                        value: 'blue',
                        label: 'Blue',
                        voteCount: 3
                    },
                    {
                        name: 'color2',
                        value: 'yellow',
                        label: 'Yellow',
                        voteCount: 6
                    }
                ]
            }
        ],
        showForm: false
    };
}

ReducerRegistry.register(
    'features/polling',
    (state = _getInitialState(), action) => {
        switch (action.type) {
        case CREATE_NEW_POLL:
            return {
                ...state,
                polls: state.polls.concat(action.poll)
            };
        case TOGGLE_FORM:
            return {
                ...state,
                showForm: action.payload
            };
        case UPDATE_NEW_POLL:
            return {
                ...state,
                polls: state.polls.concat(action.poll)
            };
        case UPDATE_POLL:
            return {
                ...state,
                polls: action.polls
            };
        default:
            return state;
        }
    }
);
