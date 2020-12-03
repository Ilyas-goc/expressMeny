import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    FlatList,
    Image,
    ScrollView
} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { connect } from 'react-redux';
import { addBasket } from './actions/addAction'
import firebase from 'firebase'

const Tab = createMaterialTopTabNavigator();
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const mapStateToProps = state => ({
    basketProps: state.basketState
})

var test = [];

class DeatilsScreen extends React.Component {
    componentDidMount() {
        if (this.state.data != []) {

        }
    }

    constructor(props) {
        const myItem = firebase.database().ref("Products")
        myItem.once("value", datasnap => {
            test = datasnap.val()
            console.log("hh" + this.state.data)
            this.setState({ data: test })
            console.log(this.state.data)
        })
        super(props);
        this.state = {
            data: []

        }
    }



    renderItem = ({ item,addBasket }) => {
        return (
            <View
                style={styles.item}
            >

                <View style={styles.content}>
                    <Text style={styles.name}>
                        {item.name}
                    </Text>
                    <Text>
                        {item.contains}
                    </Text>
                    <Text style={{
                        color: 'green',
                        fontWeight: 'bold'
                    }}>
                        {item.price}
                        {" kr"}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => console.log(this.props.addBasket("hh"))}>
                    <View style={styles.button}>
                        <MaterialIcons
                            name="navigate-next"
                            size={30}
                        >
                        </MaterialIcons>
                    </View>
                </TouchableOpacity>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginBottom: 5,
                        paddingTop: 10
                    }}
                />
            </View>

        )
    }

    ItemSeparatorComponent = () => {
        return (
            <View style={{
                minHeight: 10
            }}>

            </View>
        )
    }

    render() {
        return (
            <View style={styles.container} >
                <ScrollView style={styles.flatList}>
                    <FlatList

                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={this.ItemSeparatorComponent}
                    >
                    </FlatList>
                </ScrollView>   

            </View >
        )
    };
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eef",
        flexDirection: "column",
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
        flexDirection: 'row',
        borderRadius: 30,
    },
    image_container: {
        width: 90,
        height: 90
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
        paddingHorizontal: 10
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
        width: 30,
        height: 30,
        backgroundColor: 'green',
        borderRadius: 3
    }
});

export default connect(mapStateToProps, { addBasket })(DeatilsScreen);