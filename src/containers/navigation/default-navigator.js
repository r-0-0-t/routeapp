//typescript support not available on createStackNavigator
import * as React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../../screens/HomeScreen";
import StackNavigationScreen from "../../screens/StackNavigationScreen";
import CustomHeaderScreen from "../../screens/CustomHeaderScreen";
import StackFocusLogsScreen from "../../screens/StackFocusLogsScreen";

const DefaultNavigator = createStackNavigator({
  Home: HomeScreen, //one way
  StackNavigation: { screen: StackNavigationScreen }, //or this
  CustomHeader: {
    screen: CustomHeaderScreen
    // navigationOptions: navigation => ({
    //   title: "Title"
    // })
  },
  StackFocusLogs: StackFocusLogsScreen
});

export default createAppContainer(DefaultNavigator);
