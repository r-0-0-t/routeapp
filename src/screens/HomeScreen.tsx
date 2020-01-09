import React, { Component } from "react";
import { View, Button } from "react-native";

interface Props {
  navigation: any;
}

class HomeScreen extends React.Component<Props> {
  render() {
    const { navigation } = this.props;
    console.log("If you are at room you wont get any back action");
    return (
      <View>
        <Button
          title="General Stack"
          onPress={() => {
            navigation.push("StackNavigation");
          }}
        />
      </View>
    );
  }
}

export default HomeScreen;
