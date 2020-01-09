import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DefaultNavigator from "./src/containers/navigation/default-navigator";

export default function App() {
  return <DefaultNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
