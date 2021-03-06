import React from "react";

import {
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import * as deckActions from "../redux/actions";
import { bindActionCreators } from "redux";
import { saveCard } from "../utils/api";
import { white, black } from "../utils/colors";
import { connect } from "react-redux";
// Add card with question and answer to the deck
class AddCard extends React.Component {
  state = {
    question: "",
    answer: ""
  };

  handleOnSubmit = () => {
    if(this.state.question === '' || this.state.answer === ''){
      alert ('Please fill in both the input fields');
      return 
  }
    const { id } = this.props.route.params;
    this.props.actions.addCard(id, this.state.question, this.state.answer);
    saveCard(this.props.id, this.state.question, this.state.answer);
    this.props.navigation.navigate("Deck", {
      id: id
    });
  };

  render() {
    // Add styling
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Text style={styles.label}>Enter Question!</Text>
        <TextInput
          value={this.state.question}
          style={styles.input}
          onChangeText={question =>
            this.setState({
              question: question
            })
          }
        />
        <Text style={styles.label}>Enter Answer!</Text>
        <TextInput
          value={this.state.answer}
          style={styles.input}
          onChangeText={answer =>
            this.setState({
              answer: answer
            })
          }
        />
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={this.handleOnSubmit}
        >
          <Text style={styles.submitBtnText}>Add card</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 40
  },
  question: {
    fontSize: 18,
    alignSelf: "flex-start",
    color: black
  },
  input: {
    width: 250,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: black,
    marginBottom: 15
  },
  submitBtn: {
    backgroundColor: black,
    padding: 10,
    borderRadius: 0,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 100
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  }
});

// function mapStateToProps({decks}, { route }) {
//   const deckId = route.params.id;
//   return
//   {
//     deckId
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(deckActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(AddCard);
