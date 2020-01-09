import * as React from "react";
import { Component } from "react";
import { View } from "react-native";
import CText from "../components/CText";

export interface Props {
  navigation: any;
}

export interface State {}

class CustomHeaderScreen extends React.Component<Props, State> {
  /*
    Pass params to a route by putting them in an object as a second parameter to the navigation.navigate function: this.props.navigation.navigate('RouteName', { params go here  })
Read the params in your screen component: this.props.navigation.getParam(paramName, defaultValue).
    */
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("otherParam", ""),
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };
  render() {
    const { navigation } = this.props;
    console.log(navigation);
    return (
      <View>
        <CText value={navigation.getParam("otherParam", "Param Value")}></CText>
      </View>
    );
  }
}

export default CustomHeaderScreen;
