import React, { Component } from 'react'
import { Text, View, Component, Keyboard, KeyboardAvoidingView, Alert } from 'react-native'
import { theme } from '../constants'

export class SignUp extends Component {
    state = {
        email: '',
        username: '',
        password: '',
        errorss: [],
        loading: false
    }
    handleSignup(){
        const { navigation} = this.props
        const {email, username, password} = this.state
        const errors = []
        Keyboard.dismiss()
        this.setState({loading: true})
        if( email !== VALID_EMAIL){
            errors.push('email')
        }
        this.setState({errors, loading: false})
        if(!errors.length) {
            Alert.alert(
                'Password Sent!',
                'Please check your email',
                [
                    {
                        text: 'OK', onPress = () => {
                            navigation.navigate('Login')
                        }
                    }
                ]
            )
        }
    }
    
    render() {
        return (
            <KeyboardAvoidingView>
                <Text> SignUp </Text>
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
                this.handleSignup();
              }}
            />
          </Block>
            </KeyboardAvoidingView>
        )
    }
}

export default SignUp
styles = StyleSheet.create({
    Signup: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    hassErrors: {
        borderBottomColor: theme.colors.accent,
    }
})