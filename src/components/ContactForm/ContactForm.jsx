import React, { Component } from 'react';
import { FormUser, LabelForm, InputUser } from './ContactForm.styled';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  submitForm = evt => {
    evt.preventDefault();

    this.props.submitForm({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });
    this.resetForm();
  };

  render() {
    const { submitForm } = this;
    const { name, number } = this.state;
    return (
      <FormUser onSubmit={submitForm}>
        <LabelForm>
          Name
          <InputUser
            type="text"
            value={name}
            name="name"
            placeholder="Name"
            onChange={this.onChange}
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </LabelForm>
        <LabelForm>
          Number
          <InputUser
            type="tel"
            name="number"
            value={number}
            onChange={this.onChange}
            placeholder="Phone number"
            required
          />
        </LabelForm>
        <button type="submit">Add contact</button>
      </FormUser>
    );
  }
}
