import React from "react";
import { TouchableOpacity, StyleSheet, Text, Animated } from "react-native";
import * as deckActions from "../redux/actions";
import { bindActionCreators } from "redux";
import { Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { black, gray, white } from "../utils/colors";

// Add card with question and answer to the deck
class Deck extends React.Component {
  state = { opacity: new Animated.Value(0) };

  addCard = () => {
    this.props.navigation.navigate("AddCard", {
      id: this.props.deckId
    });
  };

  startQuiz = () => {
    // Navigate to start the quiz
    this.props.totalNumOfCards.length === 0
      ? alert("Get started by adding few cards!")
      : this.props.navigation.navigate("Quiz", { id: this.props.deckId });
  };

  componentDidMount() {
    const { opacity } = this.state;
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start();
  }

  render() {
    // Add styling
    return (
      <Animated.View style={[styles.deck, { opacity }]}>
        <Text style={styles.title}>{this.props.deck.title}</Text>
        <Text style={styles.count}>{this.props.totalNumOfCards}</Text>
        <TouchableOpacity
          style={[styles.btn, { marginTop: 50 }]}
          onPress={this.addCard}
        >
          <Text style={styles.btnText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: black }]}
          onPress={this.startQuiz}
        >
          <Text style={styles.btnText}>Start Quiz!</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    color: black
  },
  count: {
    marginTop: 10,
    fontSize: 25,
    color: gray
  },
  btn: {
    width: 150,
    height: 50,
    backgroundColor: white,
    borderRadius: 0,
    borderColor: black,
    borderWidth: 1,
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    fontSize: 16,
    color: black
  }
});

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
