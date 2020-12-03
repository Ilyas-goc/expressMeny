import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, Form, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { productQuantity } from '../actions/productQuantity'
import { StarOutlined, StarFilled, StarTwoTone, LeftCircleOutlined } from '@ant-design/icons';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TextInput } from 'react-native-gesture-handler';
import { useForm, Controller } from "react-hook-form";
import Constants from 'expo-constants';

const Tab = createMaterialTopTabNavigator();

const path = require('path')

const testConfig = {
    payeeAlias: "1236524839",
    host: "https://mss.cpc.getswish.net/swish-cpcapi",
    qrHost: "https://mpc.getswish.net/qrg-swish",

    cert: path.resolve(__dirname, 'ssl/Swish_TechnicalSupplier_TestCertificate_9871065216.pem'),
    key: path.resolve(__dirname, 'ssl/Swish_TechnicalSupplier_TestCertificate_9871065216.key'),
    ca: path.resolve(__dirname, 'ssl/Swish_TLS_RootCA.pem'),
}

function Cart() {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <View>
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="firstName"
                rules={{ required: true }}
                defaultValue=""
            />
            {errors.firstName && <Text>This is required.</Text>}

            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="lastName"
                defaultValue=""
            />
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="Tredje"
                defaultValue=""
            />
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    )
}
const styles = StyleSheet.create({
    label: {
        color: 'white',
        margin: 20,
        marginLeft: 0,
    },
    button: {
        marginTop: 40,
        color: 'white',
        height: 40,
        backgroundColor: '#ec5990',
        borderRadius: 4,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: 8,
        backgroundColor: '#0e101c',
    },
    input: {
        backgroundColor: 'white',
        borderColor: 'none',
        height: 40,
        padding: 10,
        borderRadius: 4,
    },
});
const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps, { productQuantity })(Cart);