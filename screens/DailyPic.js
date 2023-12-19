import react, { Component } from "react";
import { Text, View } from "react-native";

export default class DailyPicScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent:"center",
        }}>
          <Text>Tela de Foto Diária!</Text>;
      </View>
    )
  }
}
