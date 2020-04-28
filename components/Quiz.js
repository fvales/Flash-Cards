import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { black } from "../utils/colors";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import FlashCard from "./FlashCard";
import Score from "./Score";
import {connect} from "react-redux";
class Quiz extends React.Component {
  state = {
    totalNumOfCorrectAns: 0,
    totalNumOfIncorrectAns: 0,
    currentQuestion: 0
  };

  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }
  
  restart = () => {
    this.setState({
      totalNumOfCorrectAns: 0,
      totalNumOfIncorrectAns: 0,
      currentQuestion: 0
    });
  };

  handleAnswer = result => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      totalNumOfCorrectAns:
        result === "correct"
          ? this.state.totalNumOfCorrectAns + 1
          : this.state.totalNumOfCorrectAns,
      totalNumOfIncorrectAns:
        result === "incorrect"
          ? this.state.totalNumOfIncorrectAns + 1
          : this.state.totalNumOfIncorrectAns
    });
  };

  render() {
    // Add styling
    return (
      <View style={styles.center}>
        <Text style={styles.count}>
          {(this.state.currentQuestion < this.props.totalNumOfCards)
            ? this.state.currentQuestion + 1
            : this.state.currentQuestion}
          /{this.props.totalNumOfCards}
        </Text>
        {(this.state.currentQuestion < this.props.totalNumOfCards) ? (
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
            restart={this.restart}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  count: {
    alignSelf: "flex-start",
    marginTop: 10,
    marginLeft: 10,
    color: black,
    fontWeight: "bold",
    fontSize: 18
  }
});

function mapStateToProps(decks, { route }) {
  const deckId = route.params.id;
  const deck = decks[deckId];
  return {
    deck,
    totalNumOfCards: deck.questions.length,
    deckId
  };
}

export default connect(mapStateToProps, null)(Quiz);
