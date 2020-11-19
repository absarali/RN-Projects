import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import { Button, Block, Text } from "../components";
const { width, height } = Dimensions.get("window");
import { theme } from "../constants";

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    showTerms: false
  };
  scrollX = new Animated.Value(0)
  handleLogin() {
    navigation.navigate('Login')
  }
  renderIllustrations() {
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        extraData={this.state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => {
          <Image
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 2, overflow: "visible" }}
          />;
        }}
        onScroll={
          Animated.event([
            {
              nativeEvent: { contentOffset: { x: this.scrollX}}
            }
          ])
        }
      />
    );
  }
  renderSteps() {
    const { illustrations } = this.props;
    return (

      <Block>
        <Text>***</Text>
      </Block>
    );
  }

  render({navigation}) {
    return (
      
      <Block center middle>
        <Block center middle flex={0.5}>
          <Text h1 center bold>
            Your Home.
            <Text h1 primary>
              Greener
            </Text>
          </Text>
          <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
            Enjoy the experience.
          </Text>
        </Block>
        <Block>
          {this.renderIllustrations()}
          {this.renderSteps()}
        </Block>
        <Block middle flex={0.5} margin={(0, theme.sizes.padding * 2)}>
          <Button gradient onPress={() => {this.handleLogin()}}>
            <Text center semibold white>
              Login
            </Text>
          </Button>
          <Button shadow onPress={() => {
            navigation.navigate('Signup')
          }}>
            <Text center semibold>
              Signup
            </Text>
          </Button>
          <Button onPress={() => {this.setState({ showTerms: true})}}>
            <Text center caption gray>
              Terms of Service
            </Text>
          </Button>
        </Block>
      </Block>
    );
  }
}
Welcome.defaultProps = {
  illustrations: [
    {id: 1, source: require('../assets/images/illustrations_1.png')},
    {id: 2, source: require('../assets/images/illustrations_2.png')},
    {id: 3, source: require('../assets/images/illustrations_3.png')}
  ]
}
styles = StyleSheet.create({
  stepsContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  steps: {
    width: 5,
    height: 5,
  },
});
