import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { connect } from 'react-redux'


function hh( {basketProps} ) {
    let productsInCart = [];

    Object.keys(this.props.basketProps.products).forEach(function (item) {
        console.log(item)
    })
}

class Cart extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center'
            }}>
                <Text>
                    {this.props.basketProps.basketNumbers}
                </Text>
                <Button
                    onPress={() => hh()}>
                    hej
                </Button>
            </View>
        )
    };
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps)(Cart);