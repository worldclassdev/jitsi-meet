// @flow

import { ReducerRegistry, set } from '../base/redux';

import {
    CREATE_NEW_POLL,
    NEW_POLL_CREATED,
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
        ]
    };
}

ReducerRegistry.register(
    'features/polling',
    (state: Object = _getInitialState(), action: Object) => {
        switch (action.type) {
        case CREATE_NEW_POLL:
        let newState = Object.assign({}, state)
            return {
                ...state,
                polls: newState.polls.push(action.poll)
            };
            break;

        case UPDATE_POLL:
            return {
                ...state,
                polls: action.polls
            };
            break;
        case NEW_POLL_CREATED:
            return {
                ...state,
                polls: action.polls
            }
        default:
            return state;
        }
    }
);
