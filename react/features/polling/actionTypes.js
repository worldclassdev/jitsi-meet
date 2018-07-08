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
 * The type of (redux) action which updates votes on an
 *  existing poll
 *
 * {
 *     type: UPDATE_POLL,
 *     polls : array
 * }
 */
export const UPDATE_POLL = Symbol('UPDATE_POLL');

/**
 * Create an action for when a new poll is created.
 *
 * {
 *     type: NEW_POLL_CREATED,
 *     polls: array
 * }
 */
export const NEW_POLL_CREATED = Symbol('NEW_POLL_CREATED');
