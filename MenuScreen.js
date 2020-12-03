import * as React from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Entypo from 'react-native-vector-icons/Entypo'

function check() {
    console.log(this.props.navigation.params.otherParams)
}



export default class MenuScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Entypo
                        name="cross"
                        size={35}
                        onPress={() => this.props.navigation.goBack()}
                    >
                    </Entypo>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        paddingHorizontal: 10
                    }}>
                        <Text style={{
                            color: 'black',
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>
                            {this.props.route.params.name}
                        </Text>
                        <Text>
                            {this.props.route.params.contains}
                        </Text>
                        <Text style={{
                            color: 'green',
                            fontWeight: 'bold'
                        }}>
                            {this.props.route.params.price}
                        </Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            marginBottom: 5,
                            paddingTop: 10
                        }}
                    />
                </ScrollView>
                <View style={{
                    height: 40,
                    backgroundColor: 'white'
                }}>
                    <Button
                        onPress={() =>  this.props.navigation.navigate('Cart', {
                            cartTot: this.props.route.params.price, 
                            name: this.props.route.params.name,
                            hhh: "vad len"
                        })}
                    >
                    </Button>
                    <Button
                        onPress={() =>  this.props.navigation.navigate({name: "Home"}, {params: { hej: "hh"}})}
                    >
                    </Button>
                </View>
            </View>
        )
    };
}