import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';

import icMenu from '../../../Media/appicon/ic_menu_white.png';
import icCalendar from '../../../Media/appicon/icon-calendar-white.png';
import { APP_THEME } from '../../Constants/Color';
import { DEVICE_HEIGHT } from '../../Constants/AppConstants';

export default class Header extends Component {
  render() {
    const {
      wrapper,
      rowHeader,
      iconStyle,
      titleHeader,
      titleContainer,
      iconContainer
    } = styles;
    return (
      <View style={wrapper}>
        <View style={rowHeader}>
          <View style={iconContainer}>
            <TouchableOpacity
              onPress={this.props.onOpen}
            >
              <Image source={icMenu} style={iconStyle} />
            </TouchableOpacity>
          </View>

          <View style={titleContainer}>
            <Text style={titleHeader} >Weight Loss Fitness</Text>
          </View>

          <View style={iconContainer}>
            <TouchableOpacity>
              <Image source={icCalendar} style={iconStyle} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      height: 54,
      backgroundColor: APP_THEME,
      padding: 8
    },
    rowHeader: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    iconStyle: {
      width: DEVICE_HEIGHT / 16,
      height: DEVICE_HEIGHT / 16
    },
    titleHeader: {
      color: '#FFF',
      fontSize: 25,
    },
    titleContainer: {
      alignItems: 'flex-start',
      flex: 5,
      paddingLeft: 20,
    },
    iconContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

