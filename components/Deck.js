import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, Animated } from "react-native";
import * as deckActions from "../redux/actions";
import { bindActionCreators } from "redux";
import { saveCard } from "../utils/api";

// Add card with question and answer to the deck
class Deck extends React.Component {
  state = {};

  addCard = () => {
    // Navigate to add card screen
    // this.props.navigation.navigate("AddCard", { id: deckId });
  };

  startQuiz = () => {
    // Navigate to start the quiz
    // this.props.totalNumOfCards.length === 0
    //   ? alert("Get started by adding few cards!")
    //   : this.props.navigation.navigate("Question", { id: deckId });
  };

  componentDidMount() {}

  render() {
    // Add styling
    return (
      <Animated.View style={}>
        <Text style={}>{this.props.deck.title}</Text>
        <Text style={}>{this.props.totalNumOfCards}</Text>
        <TouchableOpacity style={} onPress={this.addCard}>
          <Text style={}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={} onPress={this.startQuiz}>
          <Text style={}>Start Quiz!</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

function mapStateToProps({ decks }, { match }) {
  const deckId = match.params.id;
  return {
    deck: decks[deckId],
    totalNumOfCards: deck.questions.length,
    deckId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(deckActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
