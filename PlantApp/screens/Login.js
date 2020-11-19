import React, { Component } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { Button, Block, Text, Input } from "../components";
import { theme } from "../constants";

export default class Login extends Component {
  static navigationOptions = {};
  state = {
    email: "contact@react-ui-kit.com",
    password: "youtube",
  };
  handleLogin() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    this.setState({ loading: true });
    if (email !== "contact@react-ui-kit.com") {
      errors.push("email");
    }
    if (password !== "subscribe") {
      errors.push("password");
    }
    if (errors.length) {
      this.setState({ errors, loading: false });
    } else {
      this.setState({ loading: false });
      navigation.navigate("Browse");
    }
  }
  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);
    return (
      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Login
          </Text>
          <Block middle>
            <Input
              label="Email"
              style={styles.input}
              defaultValue={this.state.email}
              onChangeText={(text) => this.setState({ email: text })}
            />
            <Input
              secure
              label="Password"
              style={styles.input}
              defaultValue={this.state.password}
              onChangeText={(text) => this.setState({ password: text })}
            />
            <Button
              onPress={() => {
                this.handleLogin();
              }}
            />
            <Button
              onPress={() => {
                this.handleLogin();
              }}
            />
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 0,
    borderBottomColor: theme.colors.gray2,
  },
  login: {},
});
