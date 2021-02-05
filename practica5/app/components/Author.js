import React from "react";
import { View, Text, Image } from "react-native";
import logo from "../../assets/error.jpg";

export default class Author extends React.Component {
  render() {
    const author_username =
      this.props.author.profileName !== null
        ? this.props.author.profileName
        : "Admin";

    const author_photo =
      this.props.author.photo.url !== null ? this.props.author.photo.url : logo;

    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          class="rounded-circle"
          source={{ uri: author_photo }}
          style={{ width: 50, height: 50, borderRadius: 30, marginTop:10 }}
        />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            marginTop: 10
          }}
        >
          {author_username}
        </Text>
      </View>
    );
  }
}
