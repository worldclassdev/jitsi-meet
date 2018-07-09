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
    FormFooter
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
            <div
                style = {{ display: 'flex',
                    flexDirection: 'column' }}>
                <Form
                    name = 'newPollForm'
                    onSubmit = { this._sendPollHandler }>
                    <FormHeader
                        description = 'Add your question and options in the fields below' />

                    <FormSection name = 'newPoll' >
                        <Field
                            label = 'Question:'
                            required = { true } >
                            <FieldText
                                                                name = 'question'
                                onChange = { this._onChangeHandler }
                                placeholder = 'Enter the question here'
                                value = { this.state.question } />
                        </Field>
                        <Field
                            label = 'Option A:'
                            required = { true } >
                            <FieldText
                                                                name = 'optionA'
                                onChange = { this._onChangeHandler }
                                placeholder = 'Enter the first option'
                                value = { this.state.optionA } />
                        </Field>
                        <Field
                            label = 'Option B:'
                            required = { true } >
                            <FieldText
                                                                name = 'optionB'
                                onChange = { this._onChangeHandler }
                                placeholder = 'Enter the second option'
                                value = { this.state.optionB } />
                        </Field>
                        <Field label = 'Option C:' >
                            <FieldText
                                name = 'optionC'
                                onChange = { this._onChangeHandler }
                                placeholder = 'Enter the third option'
                                value = { this.state.optionC } />
                        </Field>
                    </FormSection>

                    <FormFooter>
                        <ButtonGroup>
                            <Button
                                appearance = 'primary'
                                onClick = { this._sendPollHandler }>
                        Send
                            </Button>
                            <Button
                                                                appearance = 'danger'
                                onClick = { this.props.cancelPoll }>
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
            [e.target.name]: e.target.value
        });
    }

    _createOptionObject(option) {
        return (
            {
                name: option,
                value: option,
                label: option
            }
        );
    }

    _sendPollHandler() {
        const options = [];

        console.log(this.state.optionA, this.state.optionB, this.state.optionC);
        options.push(this._createOptionObject(this.state.optionA));
        options.push(this._createOptionObject(this.state.optionB));
        options.push(this._createOptionObject(this.state.optionC));

        console.log(
            {
                question: this.state.question,
                value: '',
                options
            });

        this.props.sendPoll(
            {
                question: this.state.question,
                value: '',
                options
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
