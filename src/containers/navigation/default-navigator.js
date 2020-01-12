//typescript support not available on createStackNavigator
import * as React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import HomeScreen from "../../screens/HomeScreen";
import StackNavigationScreen from "../../screens/StackNavigationScreen";
import CustomHeaderScreen from "../../screens/CustomHeaderScreen";
import StackFocusLogsScreen from "../../screens/StackFocusLogsScreen";
import { createDrawerNavigator } from "react-navigation-drawer";
import DrawerHomeScreen from "../../screens/DrawerHomeScreen";

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen, //one way
  StackNavigation: { screen: StackNavigationScreen } //or this
});

const DefaultStackNavigator = createStackNavigator({
  Home: HomeScreen, //one way
  StackNavigation: { screen: StackNavigationScreen }, //or this
  CustomHeader: {
    screen: CustomHeaderScreen
  },
  StackFocusLogs: StackFocusLogsScreen,
  Tab: TabNavigator
});
const DrawerHomeNavigator = createStackNavigator({
  DrawerHomeScreen
});
const DrawerNavigator = createDrawerNavigator({
  DrawerHomeNavigator,
  DefaultStackNavigator
});

const DefaultNavigator = createSwitchNavigator({
  DrawerNavigator,
  DefaultStackNavigator,
  TabNavigator
});
export default createAppContainer(DrawerNavigator);
