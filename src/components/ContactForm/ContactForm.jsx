import React, { Component } from 'react';
import css from 'components/ContactForm/ContactForm.module.css';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  // onChange = event => {
  //   console.log(
  //     'this.props.handelInputChange:>> ',
  //     this.props.handelInputChange
  //   );
  //   return this.props.handelInputChange(event).call(this);
  // };
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
    //console.log(this.props);
    const { submitForm } = this;
    const { name, number } = this.state;
    return (
      <form className={css.frmUser} onSubmit={submitForm}>
        <label className={css.labelFrm}>
          Name
          <input
            className={css.inpUser}
            type="text"
            value={name}
            name="name"
            placeholder="Name"
            onChange={this.onChange}
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </label>
        <label className={css.labelFrm}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            className={css.inpUser}
            onChange={this.onChange}
            placeholder="Phone number"
            required
          />
        </label>
        <button type="submit" className={css.btnSubmit}>
          Add contact
        </button>
      </form>
    );
  }
}
