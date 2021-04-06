import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import shortid from "shortid";
import styles from "./App.module.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (text) => {
    const searchSameName = this.state.contacts
      .map((cont) => cont.name)
      .includes(text.name);

    if (searchSameName) {
      alert(`${text.name} is already in contacts`);
    } else {
      const contact = {
        id: shortid.generate(),
        ...text,
      };
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  deleteButton = (contactsId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactsId
      ),
    }));
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  componentDidMount() {
    // console.log('App componentDidMount');
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("App componentDidUpdate");

    const nextСontacts = this.state.contacts;
    const prevСontacts = prevState.contacts;

    if (nextСontacts !== prevСontacts) {
      console.log("Обновилось поле Сontacts, записываю сontacts в хранилище");
      localStorage.setItem("сontacts", JSON.stringify(nextСontacts));
    }
  }

  render() {
    const { filter } = this.state;
    const string = this.state.filter.toLowerCase();
    const contactsFilter = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(string)
    );

    return (
      <>
        <div className={styles.appConteiner}>
          <h1 className={styles.text}>Phonebook</h1>
          <ContactForm
            formSubmitHandler={this.formSubmitHandler}
            onAddContact={this.addContact}
          />
          <h2 className={styles.text}>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={contactsFilter}
            onDeleteButton={this.deleteButton}
          />
        </div>
      </>
    );
  }
}

export default App;
