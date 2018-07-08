// @flow
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Dialog } from '../../base/dialog';
import { translate } from '../../base/i18n';
import Button, { ButtonGroup } from '@atlaskit/button';
import { AkFieldRadioGroup } from '@atlaskit/field-radio-group';
import PollingForm from './PollingForm';
import { createNewPoll } from '../actions';


/**
 * React component for displaying the polling dialog.
 *
 * @extends Component
 */
class PollingDialog extends Component<> {

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
         * Creates a new poll.
         *
         * @type {Function}
         */
        createNewPoll: PropTypes.func,

        /**
         * Contains list of polls from redux
         */
        polls: PropTypes.array,

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
        this.state = {
            showForm: false
        };

        // Bind event handlers so they are only bound once per instance.
        this._onCreatePoll = this._onCreatePoll.bind(this);
        this._sendPollHandler = this._sendPollHandler.bind(this);
        this._onCancelPoll = this._onCancelPoll.bind(this);
    }

    /**
     * Load state from session storage
     *
     * @inheritdoc
     * @returns {void}
     */
    // componentDidMount() {
    //     const cachedPolls = sessionStorage.getItem('state');
    //     if (cachedPolls) {
    //       this.setState({ polls: JSON.parse(cachedPolls) });
    //       return;
    //     }
    // }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const existingPolls = this.props.polls.map((poll, i) =>
            (<div key= { i }>
                <AkFieldRadioGroup
                    items = { poll.options }
                    label = { `${poll.question}` }
                    onRadioChange = { this.setValue }
                    />
                    <br />
               </div>)
        );


        return (
            <Dialog
                cancelTitleKey = { 'dialog.close' }
                submitDisabled = { true }
                titleKey = 'polling.polling' >
                <div className = 'polling'>
                    <p>Vote then submit or create a poll</p>
                    <div>
                        { existingPolls }
                        <br />
                        { this.state.showForm ? <PollingForm
                            cancelPoll = { this._onCancelPoll }
                            sendPoll = { this.props.createNewPoll } /> : null }
                        <hr />
                        <ButtonGroup>
                            <Button appearance = 'subtle'>
                                Submit
                            </Button>
                            <Button
                                appearance = 'primary'
                                onClick = { this._onCreatePoll }>
                                Create new Poll
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </Dialog>
        );
    }

    _onCreatePoll() {
        this.setState({ showForm: true });
    }

    _onCancelPoll() {
        this.setState({ showForm: false });
    }

}

/**
 * Maps (parts of) the redux state to {@link Toolbox}'s React {@code Component}
 * props.
 *
 * @param {Object} state - The redux store/state.
 * @private
 * @returns {{}}
 */
function _mapStateToProps(state) {
    const pollingState = state['features/polling'];

    return {
        polls: pollingState.polls
    };
}

/**
 * Maps part of redux actions to component's props.
 *
 * @param {Function} dispatch - Redux's {@code dispatch} function.
 * @private
 * @returns {Object}
 */
function _mapDispatchToProps(dispatch: Function): Object {
    return {
        /**
         * Dispatches the redux action to reload the page.
         *
         * @protected
         * @returns {Object} Dispatched action.
         */
        createNewPoll() {
            dispatch(createNewPoll());
        }
    };
}


export default translate(connect(_mapStateToProps, _mapDispatchToProps)(PollingDialog));
