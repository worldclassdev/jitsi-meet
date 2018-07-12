/* @flow */

import {
    CREATE_NEW_POLL,
    TOGGLE_VIEW,
    UPDATE_NEW_POLL,
    UPDATE_POLLS
} from './actionTypes';


/**
 * Docks/undocks the Toolbox.
 *
 * @param {boolean} dock - True if dock, false otherwise.
 * @returns {Function}
 */

/**
 * Signals that a new poll should be created
 *
 *
 * @returns {{
 *     type: CREATE_NEW_POLL
 *     pollItem : object
 * }}
 */
export function createNewPoll(pollItem) {
    return {
        type: CREATE_NEW_POLL,
        poll: pollItem
    };
}

/**
 * Signals that a vote has been cast and updates the polls accordingly
 *
 * @returns {{
 *     type: UPDATE_POLL,
 *     polls: array
 * }}
 */
export function updatePolls(polls: Array) {
    return {
        type: UPDATE_POLLS,
        polls
    };
}

/**
 * Shows or hides the create poll form.
 *
 * @returns {{
 *     type: TOGGLE_FORM
 * }}
 */
export function toggleView(view: string) {
    return {
        type: TOGGLE_VIEW,
        view
    };
}

/**
 * Signals that a new poll was created and should
 * be added to state
 *
 *
 * @returns {{
 *     type: UPDATE_NEW_POLL
 *     poll : object
 * }}
 */
export function updateNewPoll(poll) {
    return {
        type: UPDATE_NEW_POLL,
        poll
    };
}
