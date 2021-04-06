import React from "react";
import propTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteButton }) => {
  return (
    <>
      <ul className={styles.listContactList}>
        {contacts.map((contact) => (
          <li className={styles.listStyle} key={contact.id}>
            {contact.name + " : " + contact.number}
            <button
              className={styles.buttonContactList}
              onClick={() => {
                onDeleteButton(contact.id);
              }}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  onDeleteButton: propTypes.func.isRequired,
};

export default ContactList;
