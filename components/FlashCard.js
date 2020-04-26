import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { red, white, black, blue } from "../utils/colors";

class FlashCard extends React.Component {
  state = {
    showAnswer: false
  };

  card = this.props.deck[this.prop.currentQuestion];

  toggleShowAnswer() {
    this.setState({
      showAnswer: !this.state.showAnswer
    });
  }

  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.cardText}>
          {this.state.showAnswer ? card.answer : card.question}
        </Text>

        <TouchableOpacity onPress={this.toggleShowAnswer}>
          <Text style={styles.reset}>
            {this.state.showAnswer ? "Show Question" : "Show Answer"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={this.props.answer("correct")}
        >
          <Text style={styles.btnText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: red }]}
          onPress={this.props.answer("incorrect")}
        >
          <Text style={styles.btnText}>Incorrect</Text>
        </TouchableOpacity>
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
  btn: {
    width: 150,
    height: 50,
    backgroundColor: blue,
    borderRadius: 0,
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    color: white,
    fontSize: 16
  },
  cardText: {
    fontSize: 25,
    color: black,
    marginLeft: 15,
    marginRight: 15
  },
  reset: {
    textAlign: "center",
    color: orange,
    marginTop: 20,
    marginBottom: 50,
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default FlashCard;

const styles = StyleSheet.create({});
