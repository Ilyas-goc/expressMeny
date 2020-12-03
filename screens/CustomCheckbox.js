import { CheckBox } from 'react-native-elements'
import React, { Component } from "react"
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    Button,
    TouchableOpacity
} from "react-native";

var placehold = false;
var checkedList = [];

export default class CustomCheckbox extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
        };
    }


    toggleChange() {
        this.setState({ checked: !this.state.checked });
        placehold = !this.state.checked
        if (!placehold) {
            {
                this.props.items.contains.map((names, index) => {
                    if (this.props.name == names) {
                        this.props.items.contains.splice(index, 1)
                        console.log(this.props.items.contains)
                    }
                })

                checkedList.map((names, index) => {
                    if (this.props.name == names) {
                        checkedList.splice(index,1)
                        console.log(checkedList)
                    }
                })
            }
        }
        if (placehold) {
            {
                this.props.items.contains.splice(this.props.items.contains.length, 1, this.props.name)
                checkedList.push(this.props.name)
                console.log(this.props.items.contains)
                console.log(checkedList)
            }
        }


    }

    render() {
        return (
            <View>
                <CheckBox
                    onPress={() => this.toggleChange()}
                    checked={this.state.checked}
                    title={this.props.name}
                    checkedList={checkedList}
                />

            </View>
        );
    }
}