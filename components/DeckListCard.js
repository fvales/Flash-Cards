import React from "react";
import { connect } from "react-redux";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { black, white, gray } from "../utils/colors";

// To Show a Deck in a DeckList
class DeckListCard extends React.Component {
  render() {
    // When Clicked, Navigate to Deck
    handleOnClick = () => {
      this.props.navigation.navigate("Deck", {
        id: this.props.id
      });
    };

    // Add Styling
    return (
      <TouchableOpacity style={styles.item} onPress={this.handleOnClick}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.count}>{this.props.totalNumOfCards}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: black
  },
  count: {
    marginTop: 10,
    fontSize: 22,
    color: gray
  },
  item: {
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
  }
});

function mapStateToProps(decks, { id }) {
  return {
    title: decks[id].title,
    totalNumOfCards: decks[id].questions.length
  };
}

export default connect(mapStateToProps, null)(DeckListCard);
