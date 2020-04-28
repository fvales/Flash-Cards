import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { black, white } from "../utils/colors";

function Score(props) {
  
  const navigateToDeck = () => {
    // Navigate to deck
    props.navigation.navigate("Deck", { id: deckId });
  };

  const restart = () => {
    props.restart();
    this.navigateToDeck();
  }

  return (
    <View style={styles.center}>
      <Text style={styles.score}>Correct: {props.correct}</Text>
      <Text style={styles.score}>Incorrect: {props.incorrect}</Text>
      <Text style={styles.score}>
        {Math.round((props.correct / props.totalNumOfCards) * 100)}%
      </Text>

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: black, marginTop: 25 }]}
        onPress={() => this.restart}
      >
        <Text style={styles.btnText}>Restart Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: white, marginTop: 25 }]}
        onPress={navigateToDeck}
      >
        <Text style={[styles.btnText, { color: black }]}>Back to Deck</Text>
      </TouchableOpacity>
    </View>
  );
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
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0,
    borderColor: black,
    borderWidth: 1,
    padding: 15,
    marginTop: 17,
    marginLeft: 10,
    marginRight: 10
  },
  btnText: {
    color: white,
    fontSize: 16
  },
  score: {
    color: black,
    fontSize: 25,
    marginBottom: 5
  }
});

export default Score;
