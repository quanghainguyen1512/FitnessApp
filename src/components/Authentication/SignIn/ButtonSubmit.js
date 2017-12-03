import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

export default class ButtonSubmit extends Component {
    render() {
        const { container, buttonSubmit, text } = styles;
        return (
            <View style={container}>    
                <TouchableOpacity activeOpacity={0.7} >
                    <View style={buttonSubmit}>
                        <Text style={text}>Get Started</Text>
                    </View>     
                </TouchableOpacity>  
            </View>      
        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    buttonSubmit: {
        width: DEVICE_WIDTH - 200,
        height: DEVICE_HEIGHT / 14,
        borderRadius: 100,
        backgroundColor: '#F66D6A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFF',
        fontWeight: '300',
        fontSize: 30,
    },
});
