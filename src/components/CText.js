import React, { Component } from "react";
import { Text } from "react-native";

class CText extends Component {
  render() {
    return <Text>{this.props.value}</Text>;
  }
}

export default CText;
