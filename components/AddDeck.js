import React, { Component } from "react";
import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import * as deckActions from "../redux/actions";
import { bindActionCreators } from "redux";
import { generateUID } from "../utils/helpers";
import { saveDeck } from "../utils/api";
import { white, black } from "../utils/colors";
import {connect} from "react-redux";
// Add a deck with title
class AddCard extends React.Component {
  state = {
    nameOfDeck: ""
  };

  handleOnSubmit = () => {
    let deckId = generateUID();
    this.props.actions.addDeck(deckId, this.state.nameOfDeck);
    saveDeck(deckId, this.state.nameOfDeck);
    this.props.navigation.navigate("Deck", {
      id: deckId
    });
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
        style={styles.container}
      >
        <Text style={styles.question}>Name your new deck!</Text>
        <TextInput
          value={nameOfDeck}
          style={styles.input}
          onChangeText={this.handleOnchange}
        />
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={this.handleOnSubmit}
        >
          <Text style={styles.submitBtnText}>Create Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  question: {
    fontSize: 30,
    marginLeft: 20,
    marginRight: 20,
    color: black
  },
  input: {
    width: 250,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: black,
    margin: 20
  },
  submitBtn: {
    backgroundColor: black,
    padding: 10,
    borderRadius: 0,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 60
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  }
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(deckActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(AddCard);
