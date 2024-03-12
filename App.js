import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navigation from "./src/navigation";


const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }} >
      <Navigation />
    </View>

  );
};

export default App;

const styles = StyleSheet.create({});
