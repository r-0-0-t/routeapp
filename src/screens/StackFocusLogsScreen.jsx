import * as React from "react";
import { Component } from "react";
import { View } from "react-native";

class StackFocusLogsScreen extends React.Component {
  componentDidMount() {
    console.log("Component did mount");
    this.willFocusSubscription = this.props.navigation.addListener(
      "willFocus",
      async () => {
        console.log("willFocus Called");
      }
    );
    this.didFocusSubscription = this.props.navigation.addListener(
      "didFocus",
      async () => {
        console.log("didFocus Called");
      }
    );
    this.willBlurSubscription = this.props.navigation.addListener(
      "willBlur",
      async () => {
        console.log("willBlur Called");
      }
    );
    this.didBlurSubscription = this.props.navigation.addListener(
      "didBlur",
      async () => {
        console.log("didBlur Called");
      }
    );
  }
  componentWillUnmount() {
    console.log("Component will unmount");
    this.willFocusSubscription.remove();
    this.didFocusSubscription.remove();
    this.willBlurSubscription.remove();
    this.didBlurSubscription.remove();
  }

  render() {
    return <View></View>;
  }
}

export default StackFocusLogsScreen;
