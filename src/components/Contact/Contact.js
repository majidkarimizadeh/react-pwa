import React, { Component } from 'react';
import styles from './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: this.generateRandomPhoneNumber(),
    };
  }

  generateRandomPhoneNumber = () => {
    let newNumber = '+';
    for (let i = 0; i < 12; i++) {
      newNumber += Math.floor(Math.random() * 10);
      if (i === 2 || i === 5 || i === 8) {
        newNumber += ' ';
      }
    }
    return newNumber;
  };

  render() {
    return (
      <div className={styles.contactContainer}>
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us at the following random phone number:</p>
        <p className={styles.phoneNumber}>{this.state.phoneNumber}</p>
      </div>
    );
  }
}

export default Contact;
