import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import * as deckActions from "../redux/actions";
import { bindActionCreators } from "redux";
import { getDecks } from "../utils/api";
import { AppLoading } from "expo";
import DeckListCard from "./DeckListCard";
// To Show List Of Decks
class DeckList extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    getDecks()
      .then(decks => this.props.actions.receiveDecks(decks))
      .then(
        this.setState({
          loading: false
        })
      );
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }

    return (
      // Add Styling
      <View style={styles.list}>
        <FlatList
          data={Object.keys(this.props.decks).map(id => {
            return { key: id };
          })}
          renderItem={({ item }) => (
            <DeckListCard key={item.key} id={item.key} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignSelf: "stretch"
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(deckActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
