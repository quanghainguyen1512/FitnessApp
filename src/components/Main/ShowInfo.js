import React, { Component } from 'react';
import { Image, View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';

export default class ShowInfo extends Component {
    render() {
        const { container, litleContainer, imgProfile, profile, textName,
                textSub, icRightArrow, buttonUpgrade, textBtnUpgrade,
                tapinWrap,
        } = styles;
        return (
            <View style={container}>
                <View style={litleContainer}>
                    <Image 
                        source={require('../../Media/appicon/ic_profile.png')} 
                        style={imgProfile}
                    />
                    <TouchableOpacity activeOpacity={0.5} >
                        <View style={profile}>
                            <View style={tapinWrap}>
                                <Text style={textName}>Tap to View Profile</Text>
                                <Text style={textSub}>Profile, Training Plan</Text>
                            </View>
                            <Icon2 name='chevron-thin-right' size={40} color='#9C9494' />
                        </View>  
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.5}>
                    <View style={buttonUpgrade}>
                        <Icon1 name="star" size={30} color='#FFF' />
                        <Text style={textBtnUpgrade}>Upgrade to Premium</Text>
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
    },
    litleContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginVertical: 25,
        marginHorizontal: 20,
        
    },
    imgProfile: {
        width: 150,
        height: 150,
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    buttonUpgrade: {
        
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: DEVICE_HEIGHT / 20,
        borderRadius: 50,
        backgroundColor: '#FFBF57',
        marginHorizontal: 20,
        paddingHorizontal: 10,
    },
    icStar: {
        color: '#FFF',
    },
    tapinWrap: {
        paddingVertical: 10,
    },
    textName: {
        fontSize: 30,
        color: '#000',
        fontWeight: '200',
    },
    textSub: {
        fontSize: 25,
        color: '#9c9494',
        fontWeight: '100',
    },
    textBtnUpgrade: {
        fontSize: 25,
        color: '#FFF',
        fontWeight: '400',
    },
});

