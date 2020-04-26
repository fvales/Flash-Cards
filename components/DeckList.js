import React from "react";
import { FlatList, View } from 'react-native'
import { connect } from "react-redux";
import * as deckActions from "../redux/actions";
import { bindActionCreators } from "redux";
import { getDecks } from '../utils/api'
import { AppLoading } from 'expo';
import DeckListCard from "./DeckListCard";

// To Show List Of Decks
class DeckList extends React.Component {

    state = {
        loading: false
    };

    componentWillMount() {
        getDecks()
        .then((decks) => this.props.actions.receiveDecks(decks))
        .then(
            this.setState({
            loading: false
        }));
    }

    render() {

        if (loading) {
            return <AppLoading/>
        }

        return (
            // Add Styling
            <View>
                <FlatList
                 data={Object.keys(decks).map((id) => { return { key: id } })}
                 renderItem={({item}) => (
                    <DeckListCard key={item.key} id={item.key}/>
                 )}
                />
            </View>
        );
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps) (DeckList);