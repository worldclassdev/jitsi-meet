// @flow
import { CREATE_NEW_POLL, UPDATE_POLLS } from './actionTypes';
import { MiddlewareRegistry } from '../base/redux';

import { JitsiConferenceEvents } from '../base/lib-jitsi-meet';
import { playSound } from '../base/sounds';


declare var APP: Object;

/**
 * Middleware that sends updated poll to all users as JSON
 *
 * @param {Store} store - The redux store.
 * @returns {Function}
 */
MiddlewareRegistry.register(store => next => action => {
    switch (action.type) {
    case CREATE_NEW_POLL: {
        const m = {
            'jitsi-meet-muc-msg-topic': 'newPoll',
            'payload': {
                'data': action.poll
            } 
        };

        typeof APP === 'object' && APP.conference._room.sendMessage(m);
        break;
    }
    case UPDATE_POLLS : {
        // const m = {
        //     'jitsi-meet-muc-msg-topic': 'polls',
        //     'payload': {
        //         'data': action.polls
        //     }
        // }

        // typeof APP === 'object' && APP.conference._room.sendMessage(m);
        console.log('middleware ran as planned');
        break;
    }

    }

    return next(action);
});

/**
 * Registers listener for {@link JitsiConferenceEvents.MESSAGE_RECEIVED} which
 * will play a sound on the event, given that the chat is not currently visible.
 *
 * @param {JitsiConference} conference - The conference instance on which the
 * new event listener will be registered.
 * @param {Dispatch} next - The redux dispatch function to dispatch the
 * specified action to the specified store.
 * @private
 * @returns {void}
 */
// function _addChatMsgListener(conference, { dispatch }) {
//     // XXX Currently, there's no need to remove the listener, because the
//     // JitsiConference instance cannot be reused. Hence, the listener will be
//     // gone with the JitsiConference instance.
//     conference.on(
//         JitsiConferenceEvents.MESSAGE_RECEIVED,
//         () => {
//             APP.UI.isChatVisible()
//                 || dispatch(playSound(INCOMING_MSG_SOUND_ID));
//         });
// }
