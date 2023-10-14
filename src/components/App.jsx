import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  //перевірка чи є контакт в списку
  contactByNameSearch = (nameContact, contacts) => {
    return contacts.find(item => {
      return item.name === nameContact;
    });
  };
  //відправка форми з перевіркою існування контаку в списку
  onSubmit = newCont => {
    if (this.contactByNameSearch(newCont.name, this.state.contacts)) {
      alert(`${newCont.name} is alredy in conacts`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newCont],
      };
    });
  };

  handelInputChange = e => {
    const { name, value } = e.currentTarget;
    console.log('name', name);
    console.log('value :>> ', value);
    console.log('this :>> ', this);
    this.setState({
      [name]: value,
    });
  };
  //отримуэмо контакти відфільтровані по данним в інпуті
  getFilteredContacts = filtr => {
    const { contacts } = this.state;
    if (filtr === '') {
      return contacts;
    } else {
      return contacts.filter(el => {
        return el.name.toLowerCase().includes(filtr.toLowerCase());
      });
    }
  };
  getNewListContacts = (conacts, idForRemove) => {
    return conacts.filter(el => {
      return el.id !== idForRemove;
    });
  };
  onRemoveContact = idForRem => {
    //отримуємо список контактів без контакту З ID = idForRem, що треба видалити
    const withOutDel = this.getNewListContacts(this.state.contacts, idForRem);

    this.setState({
      contacts: [...withOutDel],
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <h1 style={{ marginLeft: '20px' }}>Phonebook</h1>
        <ContactForm
          handelInputChange={this.handelInputChange}
          submitForm={this.onSubmit}
        />
        <h2 style={{ marginLeft: '20px' }}>Contacts</h2>
        <Filter
          style={{ marginLeft: '20px' }}
          handleFilter={this.handelInputChange}
          filter={filter}
        />
        <ContactList
          contacts={this.getFilteredContacts(filter)}
          onRemoveContact={this.onRemoveContact}
        />
      </>
    );
  }
}
