// @flow
import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { translate } from '../../base/i18n';


/**
 * React component for displaying the polling dialog.
 *
 * @extends Component
 */
class PollingResults extends Component<*, *> {
    /**
     * Initializes a new Polling Results instance.
     *
     * @param {Object} props - The read-only React Component props with which
     * the new instance is to be initialized.
     */
    constructor(props) {
        super(props);
    }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (
            <div
                style = {{ display: 'flex',
                    flexDirection: 'column' }}>
                    <h4>Results</h4>
                    <hr/>
                    <p> what is your favourite javascript framework? </p>
                    <Doughnut style={
                        {backgroundColor: 'white' }
                    } data={this.props.data} />
            </div>
        );
    }

}

export default translate(PollingResults);
