import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    Button,
    TouchableOpacity,
    Image
} from "react-native";
import HomeScreen from '../HomeScreen';
import DetailsScreen from '../DetailsScreen';
import CustomModal from '../CustomModal';
import MenuScreen from '../MenuScreen';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction'

const Tab = createMaterialTopTabNavigator();


class Home extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <ImageBackground
                        style={styles.imageBackground}
                        resizeMode="contain"
                    >
                    </ImageBackground>
                </View>
                <View style={styles.tabbar}>
                    <Tab.Navigator>
                        <Tab.Screen name="Home" exact component={HomeScreen} />
                    </Tab.Navigator>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Cart")}
                    >
                        <View style={{
                            height: 80,
                            backgroundColor: 'green'
                        }}>
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 30,
                                textAlign: 'center',
                                paddingTop: 20
                            }}>
                                Visa order({this.props.basketProps.basketNumbers})
                                    </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };
}
const width = Dimensions.get("screen").width;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        marginTop: 1,
        position: 'absolute',
    },
    tabbar: {
        flex: 1,
        marginTop: width * 0.05,
    },
    imageBackground: {
        width: width * 0.3,
        height: width * 0.3,
        alignItems: 'center',
    },
    title: {
        color: 'white',
        marginTop: 25,
        fontWeight: 'bold',
        fontSize: 25
    }
});

const mapStateToProps = state => ({
    basketProps: state.basketState
})


export default connect(mapStateToProps, { addBasket })(Home);