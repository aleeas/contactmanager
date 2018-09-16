import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contactList: state.contactList.filter(c => c.id !== action.payload)
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [action.payload, ...state.contactList]
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contactList: state.contactList.map(
          c => (c.id === action.payload.id ? (c = action.payload) : c)
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contactList: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({
      contactList: res.data
    });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
