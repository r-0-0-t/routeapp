import * as React from "react";
import { Component } from "react";
import { View } from "react-native";

export interface Props {}

class StackFocusLogsScreen extends React.Component<Props> {
  componentDidMount() {
    console.log("Component did mount");
    const focusSubscription = this.props.navigation.addListener(
      "didFocus",
      async () => {
        console.log("didFocus Called");
      }
    );
  }
  render() {
    return <View></View>;
  }
}

export default StackFocusLogsScreen;
