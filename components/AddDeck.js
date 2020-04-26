import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform
} from "react-native";
import * as deckActions from "../redux/actions";
import { bindActionCreators } from "redux";
import { generateUID } from "../utils/helpers";
import { saveDeck } from "../utils/api";

// Add a deck with title
class AddCard extends React.Component {
  state = {
    nameOfDeck: ""
  };

  handleOnSubmit = () => {
    let deckId = generateUID();
    this.props.actions.addDeck(deckId, this.state.nameOfDeck);
    saveDeck(deckId, this.state.nameOfDeck);
    // Navigate to the newly created deck i.e Deck.js
  };

  handleOnchange = event => {
    this.setState({
      nameOfDeck: event.target.value
    });
  };

  render() {
    // Add styling
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={}
      >
        <Text style={}>Name your new deck!</Text>
        <TextInput
          value={nameOfDeck}
          style={}
          onChangeText={this.handleOnchange}
        />
        <TouchableOpacity style={} onPress={this.handleOnSubmit}>
          <Text style={}>Create Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(deckActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(AddCard);
