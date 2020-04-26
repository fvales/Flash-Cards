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
import { saveCard } from "../utils/api";

// Add card with question and answer to the deck
class AddCard extends React.Component {
  state = {
    question: "",
    answer: ""
  };

  handleOnSubmit = () => {
    this.props.actions.addCard(
      this.props.deckId,
      this.state.question,
      this.state.answer
    );
    saveCard(this.props.deckId, this.state.question, this.state.answer);
    // Navigate to the newly created deck i.e Deck.js
  };

  handleOnchangeQuestion = event => {
    this.setState({
      question: event.target.value
    });
  };

  handleOnchangeAnswer = event => {
    this.setState({
      answer: event.target.value
    });
  };

  render() {
    // Add styling
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={}
      >
        <Text style={}>Enter Question!</Text>
        <TextInput
          value={question}
          style={}
          onChangeText={this.handleOnchangeQuestion}
        />
        <Text style={}>Enter Answer!</Text>
        <TextInput
          value={answer}
          style={}
          onChangeText={this.handleOnchangeAnswer}
        />
        <TouchableOpacity style={} onPress={this.handleOnSubmit}>
          <Text style={}>Add card</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps({}, { match }) {
  const deckId = match.params.id;
  return deckId;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(deckActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
