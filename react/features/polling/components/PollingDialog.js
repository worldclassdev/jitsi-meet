// @flow
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Dialog } from '../../base/dialog';
import { translate } from '../../base/i18n';
import Button from '@atlaskit/button';


/**
 * React component for displaying the polling dialog.
 *
 * @extends Component
 */
class PollingDialog extends Component<> {
    static defaultProps: {||};
           
    /**
     * Polling Dialog's component's property types.
     *
     * @static
     */
    static propTypes = {
        /**
         * The JitsiConference from which stats will be pulled.
         */
        conference: PropTypes.object,

        /**
         * The function to translate human-readable text.
         */
        t: PropTypes.func
    };

    state = {
        polls: {}
    };

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
                titleKey = 'polling.polling'>
                <div className = 'polling'>
                    <p>
                       There are currently no existing polls. Start one below.
                    </p>
                    <br />
                    <Button appearance = 'subtle'>
                             Start Poll
                    </Button>
                </div>
            </Dialog>
        );
    }
}

export default translate(PollingDialog);
