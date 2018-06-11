// @flow
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Dialog } from '../../base/dialog';
import { translate } from '../../base/i18n';
import Button, { ButtonGroup } from '@atlaskit/button';
import RadioGroup, { AkFieldRadioGroup, AkRadio } from '@atlaskit/field-radio-group';
import Form, {
    Field,
    FieldGroup,
    FormHeader,
    FormSection,
    FormFooter,
  } from '@atlaskit/form';
  import FieldText from '@atlaskit/field-text';
  import PollingForm from './PollingForm'

/**
 * React component for displaying the polling dialog.
 *
 * @extends Component
 */
class PollingDialog extends Component<void, State> {

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
        this._sendPollHandler = this._sendPollHandler.bind(this);
        this._onCancelPoll = this._onCancelPoll.bind(this);
    }

    state = {
        polls: [
            {
                question: "What is your favourite color?",
                value: "",
                options: [
                    { name: "color2", value: "red", label: "Red" },
                    { name: "color2", value: "blue", label: "Blue" },
                    { name: "color2", value: "yellow", label: "Yellow" }
                ]
            }
        ],
        showForm: false
    };

    /**
     * Load state from session storage
     *
     * @inheritdoc
     * @returns {void}
     */
    componentDidMount() {
        const cachedPolls = sessionStorage.getItem('state');
        if (cachedPolls) {
          this.setState({ polls: JSON.parse(cachedPolls) });
          return;
        }
    }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        var existingPolls = this.state.polls.map((poll, i) => {
            return(
               <div key= { i }>
                    <AkFieldRadioGroup  
                            items={ poll.options }
                            label={ poll.question }
                            onRadioChange={ this.setValue }
                     />
                     <br />
               </div>
            );
        });
        return (
            <Dialog
                cancelTitleKey = { 'dialog.close' }
                submitDisabled = { true }
                titleKey = 'polling.polling' >
                <div className = 'polling'>
                    <p>Cast your vote then submit or create a poll</p>
                    <div>
                        { existingPolls }
                         <br />
                         { this.state.showForm ? <PollingForm cancelPoll= {this._onCancelPoll}
                           sendPoll= {this._sendPollHandler} /> : null }
                         <hr />
                         <ButtonGroup>
                            <Button appearance = 'subtle'>
                                Submit
                            </Button>
                            <Button onClick= {this._onCreatePoll} appearance = 'primary'>
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

    _sendPollHandler(newPoll) {
        var newPollList =this.state.polls;
        newPollList.push(newPoll);
        this.setState({ polls: newPollList });
        this.setState({ showForm: false });
        sessionStorage.setItem('state', JSON.stringify(this.state.polls));
    }

    _onCancelPoll() {
        this.setState({ showForm: false });
    }

}

export default translate(PollingDialog);
