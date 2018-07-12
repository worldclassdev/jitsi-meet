// @flow

import { ReducerRegistry } from '../base/redux';

import {
    CREATE_NEW_POLL,
    TOGGLE_VIEW,
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
                question: 'What is your favourite javscript framework?',
                value: '',
                options: [
                    {
                        name: 'color2',
                        value: 'react',
                        label: 'React',
                        voteCount: 1
                    },
                    {
                        name: 'color2',
                        value: 'angular',
                        label: `Angular`,
                        voteCount: 3
                    },
                    {
                        name: 'color2',
                        value: 'vue',
                        label: 'Vue',
                        voteCount: 6
                    }
                ]
            }
        ],
        activeView: 'polls'
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
        case TOGGLE_VIEW:
            return {
                ...state,
                activeView: action.view
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
