import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { productQuantity } from '../actions/productQuantity'
import { NavigationContainer } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements'
import CustomCheckbox from './CustomCheckbox'
import { addBasket } from '../actions/addAction'



function Edit({ basketProps, route, addBasket, navigation, props }) {
    return (
        <View>
            {route.params.items.contains.map((name, key) => (
                <View key={key}>
                    <CustomCheckbox name={name} items={route.params.items}></CustomCheckbox>
                </View>
            ))}
            <Text>
                {console.log(route)}
                {route.params.items.name}
                {route.params.items.price}
            </Text>
            <Button
                onPress={() => {console.log(CustomCheckbox.checkList)}}
                title = "hh">
            </Button>
        </View>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { addBasket })(Edit);