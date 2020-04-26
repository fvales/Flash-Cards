import React from "react";
import { StatusBar, View } from "react-native";
import { setLocalNotification } from "./utils/helpers";
import reducer from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer);

// Function to add status bar

// React Bottom Tab Navigator

// React Stack Navigation

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          {/* Status Bar */}

          {/* Navigation */}
        </View>
      </Provider>
    );
  }
}
