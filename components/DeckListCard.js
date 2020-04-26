import React from "react";
import { connect } from "react-redux";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

// To Show a Deck in a DeckList
class DeckListCard extends React.Component {
  render() {
    // When Clicked, Navigate to Deck
    handleOnClick = () => {
      // navigation.navigate("Deck", {
      //   id: this.props.id
      // });
    };

    // Add Styling
    return (
      <TouchableOpacity style={} onPress={this.handleOnClick}>
        <Text style={}>{this.props.title}</Text>
        <Text style={}>{this.props.totalNumOfCards}</Text>
      </TouchableOpacity>
    );
  }
}

function mapStateToProps(decks, { id }) {
  return {
    title: decks[id].title,
    totalNumOfCards: decks[id].questions.length
  };
}

export default connect(mapStateToProps, null)(DeckListCard);
