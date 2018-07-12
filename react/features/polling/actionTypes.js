/**
 * The type of the action which creates a new polling item
 *
 * {
 *     type: CREATE_NEW_POLL
 *     pollItem : object
 * }
 */
export const CREATE_NEW_POLL = Symbol('CREATE_NEW_POLL');

/**
 * The type of (redux) action which updates all users on
 * creation of new polls.
 *
 * {
 *     type: UPDATE_POLLS,
 *     polls : object
 * }
 */
export const UPDATE_NEW_POLL = Symbol('UPDATE_NEW_POLL');

/**
 * The type of (redux) action which updates votes on an
 *  existing poll
 *
 * {
 *     type: UPDATE_POLLS,
 *     polls : array
 * }
 */
export const UPDATE_POLLS = Symbol('UPDATE_POLLS');

/**
 * Create an action for when a new poll is created.
 *
 * {
 *     type: TOGGLE_FORM,
 *     polls: boolean
 * }
 */
export const TOGGLE_FORM = Symbol('TOGGLE_FORM');

/**
 * Manages the manipulation of the views.
 *
 * {
 *     type: TOGGLE_VIEW,
 *     view: string
 * }
 */
export const TOGGLE_VIEW = Symbol('TOGGLE_VIEW');
