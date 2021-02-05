import React from "react";
import { Image } from "react-native";
import logo from "../../assets/error.jpg";

export default class MyImage extends React.Component {
  render() {

    const img = this.props.url !== null ? this.props.url : logo;
    return <Image class="rounded" id="imagenquiz" source={{uri: img}} style={{ width: 300, height: 250, borderRadius: 10, }} />;
  }
}
