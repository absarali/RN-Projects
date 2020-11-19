import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { AppLoading, Asset } from "expo";

import Navigation from "./navigation";
import { Block } from "./components";


const images = [
  require("./assets/images/plants_1.png"),
  require("./assets/images/plants_2.png"),
  require("./assets/images/plants_3.png"),
  require("./assets/images/explore_1.png"),
  require("./assets/images/explore_2.png"),
  require("./assets/images/explore_3.png"),
  require("./assets/images/explore_4.png"),
  require("./assets/images/explore_5.png"),
  require("./assets/images/explore_6.png"),
  require("./assets/images/avatar.png"),
  require("./assets/images/plants.png"),
  require("./assets/images/seeds.png"),
  require("./assets/images/flowers.png"),
  require("./assets/images/sprayers.png"),
  require("./assets/images/fertilizers.png"),
  require("./assets/images/back.png"),
  require("./assets/images/pots.png"),
];

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  handleResourcesAsync = async () => {
  
  
  
    const cacheImages = images.map((img) => {
      return Asset.fromModule(image).downloadAsync();
    });
  
    return Promise.all(cacheImages);
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={(error) => console.warn(error)}
          onFinish={() => {
            this.setState({ isLoadingComplete: true });
          }}
        />
      );
    }
    return (
      <Block>
        <Navigation />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  
});
