import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, Dimensions, ImageBackground } from 'react-native';
import { connect } from 'react-redux'
import { takeaway } from '../actions/takeaway'
import { TouchableOpacity } from 'react-native-gesture-handler';


const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
console.log(width)

const Separator = () => (
    <View style={styles.separator} />
);

const mapStateToProps = state => ({
    basketProps: state.basketState
});

function Start({ takeaway, basketProps, navigation }) {

    return (
        <View>
            <ImageBackground
                source={require('../assets/h1.jpg')}
                style={{
                    height: height,
                    width: width
                }}>

            <View style={styles.fixToText}>
                <TouchableOpacity
                    onPress={() => { takeaway(false, "Takeaway"), navigation.navigate("Home") }}>
                    <Image
                        style={{ width: width * 0.16, height: height * 0.16, borderWidth: 1, borderColor: '#000', borderRadius: 40, resizeMode: 'contain', backgroundColor:'white' }}
                        source={require('../assets/ff.png')}

                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { takeaway(true, "Takeaway"), navigation.navigate("Home") }}>
                    <Image
                        style={{ width: width * 0.16, height: height * 0.16, borderWidth: 1, borderColor: '#000', borderRadius: 40, resizeMode: 'contain', backgroundColor:'white' }}
                        source={require('../assets/takeaway_icon1.png')}
                    />
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 60,
        marginBottom: height * 0.3,
        marginTop: height * 0.1

    },
    fixToText: {
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'space-between',
        marginLeft: 60,
        marginRight: 40
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});


export default connect(mapStateToProps, { takeaway })(Start);