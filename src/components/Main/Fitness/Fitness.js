import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import StartComponentOne from './StartComponentOne';
import FunctionBar from './FunctionBar';
import StartComponentTwo from './StartComponentTwo';
import { APP_THEME } from '../../Constants/Color';

export default class Fitness extends Component {
    render() {
        const { wrapper, container } = styles;
        return (
            <View style={container}>
                {/* dat props onOpen */}
                <Header onOpen={() => { this.props.navigation.navigate('DrawerOpen'); }} />
                <FunctionBar />
                <View style={wrapper}>
                    <StartComponentOne onPress={() => this.props.navigation.navigate('ManHinh_VideoTraining')} />                      
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: APP_THEME,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    wrapper: {
        flex: 8,
        paddingHorizontal: 5,
        backgroundColor: '#F00'
    }
});
