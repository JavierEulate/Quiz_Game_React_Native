import React from "react";
import { Text, View } from "react-native";

export default class Question extends React.Component {
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            paddingTop: 45,
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            paddingBottom: 20
          }}
        >
          {this.props.question}
        </Text>
      </View>
    );
  }
}
