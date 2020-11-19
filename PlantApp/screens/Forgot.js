import React, { Component } from 'react'
import { Text, View , ActivityIndicator, Keyboard, StyleSheet, KeyboardAvoidingView} from 'react-native'

import {Button, Block, Input, Text} from '../components'
import {theme} from '../constants'

export class Forgot extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.forgot}>
                <Block>
                <Text> Forgot </Text>
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
            <Butto n
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
            </KeyboardAvoidingView>
        )
    }
}

export default Forgot
styles = StyleSheet.create({
    forgot: {
        flex: 1,
        justifyContent: 'center',

    }
})
