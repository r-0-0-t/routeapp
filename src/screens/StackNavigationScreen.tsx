import * as React from "react";
import { Component } from "react";
import { View, Button } from "react-native";

interface Props {
  //this may be not valid, just to make this work
  navigation: {
    navigate(T: string): any;
    navigate(T: string, S: object): any;
    replace(T: string): any;
    push(T: string): any;
    push(T: string, S: object): any;
    reset(): any;
    goBack(): any;
    pop(): any;
    popToTop(): any;
  };
}

class StackNavigationScreen extends React.Component<Props> {
  componentDidMount() {
    console.log(this.props.navigation);
    console.log("didmount called");
  }
  componentWillUnmount() {
    console.log("willunmount");
  }
  render() {
    return (
      <View>
        <Button
          title="Push Stack"
          onPress={() => this.props.navigation.push("Home")}
        />
        <Button
          title="Navigate HOME"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Navigate Other Than Home"
          onPress={() => this.props.navigation.navigate("CustomHeader")}
        />
        <Button title="Pop Stack" onPress={() => this.props.navigation.pop()} />
        <Button
          title="Go Back Stack"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Replace Stack"
          onPress={() => this.props.navigation.replace("Home")}
        />
        <Button
          title="Navigate Stack With Custom Header"
          onPress={() =>
            this.props.navigation.navigate("CustomHeader", {
              otherParam: "CustomTitle"
            })
          }
        />
        <Button
          title="Stack Pop to Top"
          onPress={() => this.props.navigation.popToTop()}
        />
        <Button
          title="Focusing and Others"
          onPress={() => this.props.navigation.navigate("StackFocusLogs")}
        />
      </View>
    );
  }
}

export default StackNavigationScreen;
