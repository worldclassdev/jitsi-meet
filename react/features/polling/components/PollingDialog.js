// @flow
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Dialog } from '../../base/dialog';
import { translate } from '../../base/i18n';
import Button, { ButtonGroup } from '@atlaskit/button';
import { AkFieldRadioGroup } from '@atlaskit/field-radio-group';
import PollingForm from './PollingForm';
import PollingResults from './PollingResults';
import { createNewPoll, toggleView } from '../actions';


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
         * Returns the current active view
         */
        activeView: PropTypes.string,

        /**
         * The function to translate human-readable text.
         */
        t: PropTypes.func,

        /**
         * Toggles the create new form visibility state
         */
        toggleView: PropTypes.func


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
        this._onCreatePoll = this._onCreatePoll.bind(this);
        this._onCancelPoll = this._onCancelPoll.bind(this);
        this._onViewResults = this._onViewResults.bind(this);
        this._renderView = this._renderView.bind(this);
    }

    // componentDidMount(){
    //     let chartLabels, data = []
    //     this.props.polls.map((poll) => {
    //         chartLabels.push(poll.)
    //     });
    // }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const data = {
            labels: [
                'Angular',
                'React',
                'Vue'
            ],
            datasets: [ {
                data: [ 30, 50, 20 ],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            } ]
        };
        let existingPolls = this.props.polls
            && this.props.polls.map((poll, i) =>
                (<AkFieldRadioGroup
                    items = { poll.options }
                    key = { i }
                    label = { `${poll.question}` }
                    onRadioChange = { this.setValue }
                    value ={ poll.question } />)
            );

        if (this.props.polls.length < 1) {
            existingPolls = <p>Ooops!!! There are no polls at this time. Check again later or create one below :)
            </p>;
        }

        return (
            <Dialog
                cancelTitleKey = { 'dialog.close' }
                submitDisabled = { true }
                titleKey = 'polling.polling' >
                <div className = 'polling'>
                    <div>
                        { this._renderView(this.props.activeView, existingPolls, data)}
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
                    <Button
                        appearance = 'primary'
                        onClick = { this._onViewResults }>
                                View Results
                    </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </Dialog>
        );
    }

    _onCreatePoll() {
        this.props.toggleView('form');
    }

    _onCancelPoll() {
        this.props.toggleView('polls');
    }

    _onViewResults(){
        this.props.toggleView('results');
    }

    _renderView(activeView, existingPolls,data) {
        switch (activeView) {
        case 'polls':
            return existingPolls;
            break;
        case 'form': {
            return <PollingForm
                    cancelPoll = { this._onCancelPoll }
                    sendPoll = { this.props.createNewPoll } />;
            break;
        }
        case 'results': {
            return <PollingResults data={data} />;
            break;
        }
        default:
            break;
        }
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

    console.log(pollingState.polls);

    return {
        polls: pollingState.polls,
        activeView: pollingState.activeView
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
        createNewPoll(poll: object) {
            dispatch(createNewPoll(poll));
        },
        toggleView(view: string) {
            dispatch(toggleView(view));
        }
    };
}


export default translate(connect(_mapStateToProps, _mapDispatchToProps)(PollingDialog));
