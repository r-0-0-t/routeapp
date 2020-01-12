import React, { Component } from "react";
import { View, Button } from "react-native";

interface Props {
  navigation: any;
}

class HomeScreen extends React.Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Button
          title="General Stack"
          onPress={() => {
            navigation.navigate("StackNavigation");
          }}
        />
        <Button
          title="General Tab"
          onPress={() => {
            navigation.navigate("Tab");
          }}
        />
        <Button
          title="General Drawer"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </View>
    );
  }
}

export default HomeScreen;
