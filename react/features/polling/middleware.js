// @flow
import { NEW_POLL_CREATED } from './actionTypes';
import { MiddlewareRegistry } from '../redux';


/**
 * Middleware that sends updated poll to all users as JSON
 *
 * @param {Store} store - The redux store.
 * @returns {Function}
 */
MiddlewareRegistry.register(() => next => action => {
    switch (action.type) {
        case NEW_POLL_CREATED:

    }
    return next(action);
});

// /**
//  * Syncs the redux state features/base/participants up with the redux state
//  * features/base/conference by ensuring that the former does not contain remote
//  * participants no longer relevant to the latter. Introduced to address an issue
//  * with multiplying thumbnails in the filmstrip.
//  */
// StateListenerRegistry.register(
//     /* selector */ state => {
//         const { conference, joining } = state['features/base/conference'];

//         return conference || joining;
//     },
//     /* listener */ (conference, { dispatch, getState }) => {
//         for (const p of getState()['features/base/participants']) {
//             !p.local
//                 && (!conference || p.conference !== conference)
//                 && dispatch(participantLeft(p.id, p.conference));
//         }
//     });



