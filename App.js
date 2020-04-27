import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import { StatusBar, View } from "react-native";
import { setLocalNotification } from "./utils/helpers";
import reducer from "./redux/reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Constants from 'expo-constants';
import { white, black } from "./utils/colors";

import AddDeck from "./components/AddDeck";
import AddCard from "./components/AddCard";
import DeckList from "./components/DeckList";
import Deck from "./components/Deck";
import Quiz from "./components/Quiz";
import DeckListCard from "./components/DeckListCard";

const store = createStore(reducer);

// Function to add status bar
const FlashCardStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

// React Bottom Tab Navigator
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#000",
        labelStyle: {
          fontSize: 20,
          paddingBottom: 10,
          fontWeight: "bold"
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={DeckList}
        options={{
          tabBarLabel: "Home"
        }}
      />
      <Tab.Screen
        name="AddDecks"
        component={AddDeck}
        options={{
          tabBarLabel: "Add Deck"
        }}
      />
    </Tab.Navigator>
  );
}

// React Stack Navigation
const Stack = createStackNavigator();

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <View style={{ flex: 1 }}>
            {/* Status Bar */}
            <FlashCardStatusBar
              backgroundColor={black}
              barStyle="light-content"
            />
            {/* Navigation */}
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#000"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold"
                }
              }}
            >
            <Stack.Screen
                name="Home"
                component={MyTabs}
                options={{ title: "Home" }}
              />
              <Stack.Screen
                name="DeckListCard"
                component={DeckListCard}
                options={{ title: "Card" }}
              />
              <Stack.Screen
                name="DeckList"
                component={DeckList}
                options={{ title: "Decks" }}
              />
              <Stack.Screen
                name="AddCard"
                component={AddCard}
                options={{ title: "Add card" }}
              />
              <Stack.Screen
                name="AddDeck"
                component={AddDeck}
                options={{ title: "Add Deck" }}
              />
              <Stack.Screen
                name="Quiz"
                component={Quiz}
                options={{ title: "Quiz" }}
              />
              <Stack.Screen
                name="Deck"
                component={Deck}
                options={{ title: "Deck" }}
              />
            </Stack.Navigator>
          </View>
        </Provider>
      </NavigationContainer>
    );
  }
}
