import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import Flashcard from "./FlashCard";
import Score from "./Score";

class Quiz extends React.Component {
  state = {
    totalNumOfCorrectAns: 0,
    totalNumOfIncorrectAns: 0,
    // showAnswer: false,
    currentQuestion: 0
  };

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  handleAnswer = result => {
    this.setState(state => ({
      index: state.index + 1,
      totalNumOfCorrectAns:
        result === "correct"
          ? this.state.totalNumOfCorrectAns + 1
          : this.state.totalNumOfCorrectAns,
      totalNumOfIncorrectAns:
        result === "incorrect"
          ? this.state.totalNumOfIncorrectAns + 1
          : this.state.totalNumOfIncorrectAns
    }));
  };

  render() {
    const showCard =
      this.state.currentQuestion < this.props.totalNumOfCards ? true : false;

    // Add styling
    return (
      <View style={}>
        <Text style={}>
          {showCard
            ? this.state.currentQuestion + 1
            : this.state.currentQuestion}
          /{this.props.totalNumOfCards}
        </Text>
        {showCard ? (
          <FlashCard
            deck={this.props.deck}
            currentQuestion={this.state.currentQuestion}
            answer={this.handleAnswer}
          />
        ) : (
          <Score
            correct={this.state.totalNumOfCorrectAns}
            incorrect={this.state.totalNumOfIncorrectAns}
            totalNumOfCards={this.props.totalNumOfCards}
          />
        )}
      </View>
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

export default connect(mapStateToProps, null)(Quiz);
