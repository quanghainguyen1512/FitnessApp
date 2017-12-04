import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar
} from 'react-native';
import icApp from '../../Media/appicon/ic_app.png';
import { APP_THEME } from '../Constants/Color';
import { DEVICE_WIDTH } from '../Constants/AppConstants';

StatusBar.setHidden(true);

export default class StepOne extends Component {
    render() {
        const {
            container, one, two, three,
            iconStyle, btnStyle, textBtnStyle
        } = styles;
        return (
            <View style={container}>
                <View style={{ flex: 1, marginVertical: 10 }}>
                    <Text style={one}>Hello</Text>
                </View>
                <View style={{ flex: 5, justifyContent: 'center' }}>
                    <Image source={icApp} style={iconStyle} />
                </View>
                <View style={{ flex: 3, justifyContent: 'center' }}>
                    <Text style={two} >Welcome to Fitness{'\n'} for Weight Loss!</Text>
                </View>
                <View style={{ flex: 3, justifyContent: 'center' }}>
                    <Text style={three} >(*) Please, read program details in the{'\n'} appropriate section
                    of the Menu before {'\n'} starting any plan. We strongly advise {'\n'}
                    you to consult a doctor before starting {'\n'} any fitness program.
                    </Text>
                </View>
                <View style={{ flex: 1.5, justifyContent: 'center' }}>
                    <TouchableOpacity
                      onPress={() => { this.props.navigation.navigate('ManHinh_Fitness'); }}
                      style={btnStyle}
                    >
                        <Text style={textBtnStyle}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: APP_THEME
    },
    one: {
        fontSize: 30,
        textAlign: 'center',
        color: '#FFF'
    },
    two: {
        fontSize: 40,
        textAlign: 'center',
        color: '#FFF'
    },
    three: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFF',
        fontStyle: 'italic'
    },
    iconStyle: {
        width: DEVICE_WIDTH / 2,
        height: DEVICE_WIDTH / 2,
    },
    btnStyle: {
        backgroundColor: '#FFF',
        width: DEVICE_WIDTH / 1.5,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBtnStyle: {
        fontSize: 35,
        color: APP_THEME
    }
});
