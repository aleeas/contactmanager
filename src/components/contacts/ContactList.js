import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../Context";

class ContactList extends Component {
  deleteContact = id => {
    const { contactList } = this.state;

    const newContactList = contactList.filter(c => c.id !== id);

    this.setState({
      contactList: newContactList
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contactList } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {contactList.map(c => (
                <Contact
                  key={c.id}
                  contact={c}
                  deleteClickHandler={this.deleteContact.bind(this, c.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default ContactList;
