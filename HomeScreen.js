import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    ImageBackground,

    Button
} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { connect } from 'react-redux';
import { addBasket } from './actions/addAction'
import faker from 'faker';
import SectionList from 'react-native-tabs-section-list';
import firebase from 'firebase'
import { Block } from './components/Block'
import { Divider } from 'react-native-elements';


const Tab = createMaterialTopTabNavigator();
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const mapStateToProps = state => ({
    basketProps: state.basketState
})
var test = [];
let productsInCart = [];


class HomeScreen extends React.Component {
    componentDidMount() {
        console.log(this.props.basketProps)

    }

    constructor(props) {
        const myItem = firebase.database().ref("categories")
        myItem.once("value", datasnap => {
            test = datasnap.val()
            console.log("hh" + this.state.data)
            this.setState({ data: test })
            console.log(this.props)
        })
        super(props)
        this.state = {
            data: []

        }
    }
    ItemSeparatorComponent = () => {
        return (
            <Divider style={{ backgroundColor: 'black' }} />

        )
    }


    render() {
        return (
            <View style={styles.container} >
                <SectionList
                    contentContainerStyle={{
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignContent: 'flex-start'
                    }}
                    sections={this.state.data}
                    scrollToLocationOffset={height * 0.2}
                    tabBarStyle={styles.tabBar}
                    horizontal={true}
                    renderTab={({ title, isActive }) => (
                        <View
                            style={[

                                {
                                    borderBottomWidth: isActive ? 1 : 0,
                                    marginLeft: height * 0.03
                                }
                            ]}
                        >
                            <ImageBackground
                                source={require('./assets/ff.png')}
                                style={{
                                    height: height * 0.15,
                                    width: height * 0.15,
                                    borderWidth: 1, borderColor: '#000', borderRadius: 30,
                                }}
                            >
                                <Text
                                    style={[
                                        styles.tabText,
                                        { color: isActive ? '#090909' : '#9e9e9e' }
                                    ]}
                                >
                                    {title}
                                </Text>
                            </ImageBackground>


                        </View>
                    )}
                    renderSectionHeader={({ section }) => (
                        <View style={{
                            marginBottom: height * 0.8
                        }}><ImageBackground
                            source={require('./assets/header.png')}
                            style={{
                                height: height * 0.2,
                                width: height * 0.2,
                            }}>
                                <Text
                                    style={{
                                        fontSize: height * 0.0277,
                                        marginLeft: height * 0.01,
                                        marginTop: height * 0.01
                                    }}>
                                    {section.title}</Text>
                            </ImageBackground>
                        </View>
                    )}

                    renderItem={({ item, section }) => (
                        <TouchableOpacity
                            onPress={() => { this.props.addBasket(item.title, section.title), console.log(this.props) }}>
                            <View
                                style={styles.item}
                            >
                                <ImageBackground
                                    source={require('./assets/ff.png')}
                                    style={{
                                        height: height * 0.2,
                                        width: height * 0.2
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: height * 0.0177,
                                        }}>
                                        {item.title}
                                    </Text>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                    )
                    }
                >
                </SectionList>
                <View
                    style={{
                        height: height * 0.7,
                        width: height * 0.4,
                        right: 0,
                        bottom: height * -0.15,
                        backgroundColor: '#F6F6F6'

                    }}>
                    <Text
                        style={{
                            fontSize: height * 0.03,
                            textAlign: 'center',
                            marginTop: 10
                        }}>
                        Order ({this.props.basketProps.basketNumbers})
                    </Text>
                    <ScrollView style={styles.flatList}>
                        <FlatList
                            data={this.props.basketProps.newcat}
                            keyExtractor={(item, index) => index.toString()}
                            ItemSeparatorComponent={this.ItemSeparatorComponent}
                            renderItem={({ item, section }) => (
                                <View
                                    style={styles.item1}
                                >
                                    {console.log(this.state.data)}
                                    <View style={styles.content}>
                                        <Text
                                            style={{
                                                fontWeight: 'bold'
                                            }}>
                                            {item.title}
                                        </Text>
                                        <Text>
                                            Antal: {item.numbers}
                                        </Text>
                                        <Text style={{
                                            color: 'green',
                                            fontWeight: 'bold'
                                        }}>
                                            {item.price * item.numbers}
                                            {" kr"}
                                        </Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => console.log(this.props.addBasket("hh"))}>
                                        <View style={styles.button}>
                                            <Text
                                                style={{
                                                    color: 'white',
                                                    alignContent: 'center'
                                                }}>
                                                Ändra
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                            }
                        >
                        </FlatList>
                    </ScrollView>
                    <TouchableOpacity
                        onPress={() => console.log(this.props.navigation.navigate("Cart"))}>
                        <View
                            style={{
                                backgroundColor: '#228B22',
                                height: height * 0.11
                            }}>

                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 30,
                                textAlign: 'center',
                                paddingTop: 27

                            }}>
                                Till Betalning
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        )
    };
}

var styles = StyleSheet.create({
    container: {
        flex: 2,
        height: height * 0.8,
        backgroundColor: "#eef",
        flexDirection: "row",
    },
    item1: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 30,
    },
    tabText: {
        color: '#9e9e9e',
        fontWeight: '500',
        textAlign: 'center'
    },
    tabBar: {
        backgroundColor: '#fff',
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 1
    },
    flatList: {
        flex: 1,
        paddingTop: height * 0.02,
        paddingLeft: height * 0.02,
        paddingRight: height * 0.02,
        backgroundColor: 'white'
    },
    item: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: height * 0.23,
        width: height * 0.23,
        flexDirection: 'row',
        borderWidth: 1
    },
    image_container: {
        width: 90,
        height: 90
    },
    tabText: {
        padding: 15,
        color: '#9e9e9e',
        fontSize: height * 0.0166,
        fontWeight: '500',
        textAlign: 'center',
    },
    image: {
        width: "100%",
        height: "100%",
        borderWidth: 5,
        borderColor: "black",
        borderRadius: 10
    },
    name: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'

    },
    diff: {
        height: 10
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        fontWeight: 'bold'
    },
    price: {
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 50,
        marginTop: 10
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
    },
    button: {
        width: 70,
        height: 30,
        backgroundColor: 'green',
        borderRadius: 3,

    }
});

export default connect(mapStateToProps, { addBasket })(HomeScreen);