// @flow

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Dialog } from '../../base/dialog';
import { translate } from '../../base/i18n';
import { getLocalParticipant } from '../../base/participants';

declare var interfaceConfig: Object;

/**
 * React component for displaying a the polling interface.
 *
 * @extends Component
 */
class Polling extends Component<*, *> {
    /**
     * Polling component's property types.
     *
     * @static
     */
    static propTypes = {
        /**
         * The display name for the local participant obtained from the redux
         * store.
         */
        _localDisplayName: PropTypes.string,

        /**
         * The JitsiConference from which stats will be pulled.
         */
        conference: PropTypes.object,

        /**
         * The function to translate human-readable text.
         */
        t: PropTypes.func
    };


    /**
     * Initializes a new SpeakerStats instance.
     *
     * @param {Object} props - The read-only React Component props with which
     * the new instance is to be initialized.
     */
    constructor(props) {
        super(props);

        // Bind event handlers so they are only bound once per instance.
        this._createPoll = this._createPoll.bind(this);
    }


    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {

        return (
            <Dialog
                cancelTitleKey = { 'dialog.close' }
                submitDisabled = { true }
                titleKey = 'polling'>
                <div className = 'speaker-stats'>
                    This is the Modal
                </div>
            </Dialog>
        );
    }

}

/**
 * Maps (parts of) the redux state to the associated Polling props.
 *
 * @param {Object} state - The redux state.
 * @private
 * @returns {{
 *     _localDisplayName: ?string
 * }}
 */
function _mapStateToProps(state) {
    const localParticipant = getLocalParticipant(state);

    return {
        /**
         * The local display name.
         *
         * @private
         * @type {string|undefined}
         */
        _localDisplayName: localParticipant && localParticipant.name
    };
}

export default translate(connect(_mapStateToProps)(Polling));
