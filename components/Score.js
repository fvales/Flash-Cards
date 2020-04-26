import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function Score(props) {
  navigateToDeck = () => {
    // Navigate to deck
    // navigation.navigate("Deck", { id: deckId });
  };
  return (
    <View style={}>
      <Text style={}>Correct: {correct}</Text>
      <Text style={}>Incorrect: {incorrect}</Text>
      <Text style={}>
        {Math.round((props.correct / props.totalNumOfCards) * 100)}%
      </Text>

      <TouchableOpacity style={} onPress={this.navigateToDeck}>
        <Text style={}>Back to Deck</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Score;
