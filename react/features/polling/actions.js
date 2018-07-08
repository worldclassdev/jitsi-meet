/* @flow */

import {
    CREATE_NEW_POLL,
    NEW_POLL_CREATED,
    UPDATE_POLL
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
export function createNewPoll(pollItem: object) {
    return {
        type: CREATE_NEW_POLL,
        pollItem
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
        type: UPDATE_POLL,
        polls: polls
    };
}

/**
 * Create an action for when dominant speaker changes.
 *
 * @param {string} id - Participant's ID.
 * @param {JitsiConference} conference - The {@code JitsiConference} associated
 * with the participant identified by the specified {@code id}. Only the local
 * participant is allowed to not specify an associated {@code JitsiConference}
 * instance.
 * @returns {{
 *     type: DOMINANT_SPEAKER_CHANGED,
 *     participant: {
 *         conference: JitsiConference,
 *         id: string
 *     }
 * }}
 */
export function newPollCreated(id, conference) {
    return {
        type: DOMINANT_SPEAKER_CHANGED,
        participant: {
            conference,
            id
        }
    };
}