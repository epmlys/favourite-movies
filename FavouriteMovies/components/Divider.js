/**
 * Divider helper Component
 *
 * @format
 */

import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Divider() {
  return (<Text style={styles.divider}> </Text>);
}

const styles = StyleSheet.create({
  divider: {
    paddingBottom: hp('1%'),
  }
});

export default Divider;
