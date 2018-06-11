// @flow
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { translate } from '../../base/i18n';
import Button, { ButtonGroup } from '@atlaskit/button';
import Form, {
    Field,
    FieldGroup,
    FormHeader,
    FormSection,
    FormFooter,
  } from '@atlaskit/form';
  import FieldText from '@atlaskit/field-text';

/**
 * React component for displaying the polling dialog.
 *
 * @extends Component
 */
class PollingForm extends Component<*, *> {
    /**
     * Initializes a new SpeakerStats instance.
     *
     * @param {Object} props - The read-only React Component props with which
     * the new instance is to be initialized.
     */
    constructor(props) {
        super(props);

        // Bind event handlers so they are only bound once per instance.
        this._onChangeHandler = this._onChangeHandler.bind(this);
        this._createOptionObject = this._createOptionObject.bind(this);
        this._sendPollHandler = this._sendPollHandler.bind(this);
    }

    state = {
        question: '',
        optionA: '',
        optionB: '',
        optionC: ''
    };

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Form
                name="newPollForm"
                onSubmit={ this._sendPollHandler }
                >
                <FormHeader
                    description="Add your question and options in the fields below"
                />

                <FormSection name="newPoll" >
                    <Field label="Question:" required >
                        <FieldText name="question" value={this.state.question} onChange={this._onChangeHandler} placeholder="Enter the question here" />
                    </Field>
                    <Field label="Option A:" required >
                        <FieldText name="optionA"  value={this.state.optionA} onChange={this._onChangeHandler}  placeholder="Enter the first option" />
                    </Field>
                    <Field label="Option B:" required >
                        <FieldText name="optionB"  value={this.state.optionB} onChange={this._onChangeHandler}  placeholder="Enter the second option" />
                    </Field>
                    <Field label="Option C:" >
                        <FieldText name="optionC"  value={this.state.optionC} onChange={this._onChangeHandler}  placeholder="Enter the third option" />
                    </Field>
                </FormSection>

                <FormFooter>
                    <ButtonGroup>
                    <Button onClick={this._sendPollHandler} appearance="primary">
                        Send
                    </Button>
                    <Button onClick={this.props.cancelPoll}  appearance="danger">
                        Cancel
                    </Button>
                    </ButtonGroup>
                </FormFooter>
                </Form>
            </div>
        );
    }
    _onChangeHandler(e) {
        this.setState({
         [e.target.name] : e.target.value
        });
    }

    _createOptionObject(option) {
        return(
            {
                name: option,
                value: option,
                label: option
            }
        );
    }

    _sendPollHandler() {
        var options = [];
        console.log(this.state.optionA, this.state.optionB, this.state.optionC);
        options.push(this._createOptionObject(this.state.optionA));
        options.push(this._createOptionObject(this.state.optionB));
        options.push(this._createOptionObject(this.state.optionC));
        
        this.props.sendPoll(
            {
                question: this.state.question,
                value: '',
                options: options
            }
        );
        this.setState(
            {
                question: '',
                optionA: '',
                optionB: '',
                optionC: ''
            }
        );
    }

}

export default translate(PollingForm);
