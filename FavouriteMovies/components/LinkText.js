import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Text} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function LinkText() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Show more</Text>
      <Avatar.Icon
        color="#1E4181"
        size={45}
        style={styles.icon}
        icon="chevron-right"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: 'transparent',
    paddingLeft: wp('3%'),
    paddingBottom: hp('2%'),
  },
  text: {
    fontSize: wp('4.5%'),
    color: '#1E4181',
  },
});
