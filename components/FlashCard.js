import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

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
      <View style={}>
        <Text style={}>
          {this.state.showAnswer ? card.answer : card.question}
        </Text>

        <TouchableOpacity onPress={this.toggleShowAnswer}>
          <Text style={}>
            {this.state.showAnswer ? "Show Question" : "Show Answer"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={} onPress={this.props.answer("correct")}>
          <Text style={}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={} onPress={this.props.answer("incorrect")}>
          <Text style={}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default FlashCard;

const styles = StyleSheet.create({});
