import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

import { Button, Block, Text } from '../components'
import { theme, mocks} from '../constants'

export class Browse extends Component {
    renderTab(tab){
        const { active } = this.state
        const isActive = active === tab
        return(
            <TouchableOpacity key={`${tab}`}
            onPress = { () => {
                this.setState({active: tab})
            }}
            >
                <Text>{tab}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        const { Profile} = this.props
        const tabs = ['Products','Inspirations', 'Shop']
        return (
            <Block>
                <Text> Browse </Text>
                <Button>
                    <Image
                    source={profile.avatar}
                    style={style.avatar}
                     />
                </Button>
                <Block flex={false} row style = { styles.tabs} >
                    {tabs.map(tab => this.renderTab(tab))}
                </Block>
                <ScrollView>
                </ScrollView>
            </Block>
        )
    }
}

Browse.defaultProps = {
    Profile: mocks.profile,
}
export default Browse

const styles = StyleSheet.create({
    active: {
        borderBottomColor: theme.colors.secondary,
        borderBottomWidth: 3,
    },
    tab: {
        marginRight: theme.sizes.base * 2,
        paddingBottom: theme.sizes.base
    },
     avatar: {
         height: theme.sizes.base * 2.2,
         width: theme.sizes.base * 2.2
     },
     tabs: {
         borderBottomColor: theme.colors.gray2,
         borderBottomWidth: StyleSheet.hairlineWidth,
         marginVertical: theme.sizes.base,
         marginHorizontal: theme.sizes.base * 2
     },
     header: {
         paddingHorizontal: theme.sizes.base * 2
     }
})