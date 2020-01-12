import React, { Component } from "react";
import { View, Text } from "react-native";
import { DrawerActions } from "react-navigation-drawer";
class DrawerHomeScreen extends Component {
  state = { counter: 0 };
  render() {
    return (
      <View>
        <Text>Heloo </Text>
      </View>
    );
  }
}

export default DrawerHomeScreen;
