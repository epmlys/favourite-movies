/**
 * Movie Card component
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {Badge, Surface} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinkText from './LinkText';

function MovieCard(props) {
  const {movie} = props;

  return (
    <Surface style={styles.cardSurfaceSmall}>
      <View style={styles.photoView}>
        <TouchableOpacity onPress={() => {
          // navigation.navigate('ResultDetails', { images: displayImages, disease });
        }}>
          <View style={styles.headerView}>
            <View>
              <Badge
                size={23}
                style={styles.badge}>
                {movie.Type}
              </Badge>
            </View>
            <Text style={styles.capitalText}>{movie.Title}</Text>
            <Text style={styles.subText}>{movie.Year}</Text>
          </View>
          <View style={styles.linkView}>
            <LinkText />
          </View>
        </TouchableOpacity>
        <Surface style={styles.surfacePhoto}>
          <Image style={styles.surfacePhoto} source={{uri: movie.Poster}} />
        </Surface>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  capitalText: {
    fontSize: wp('4.8%'),
    color: '#313C42',
    paddingTop: hp('2%'),
    paddingLeft: wp('4%'),
    paddingRight: wp('1%'),
    fontWeight: '500',
  },
  badge: {
    backgroundColor: 'yellow',
    color: '#848484',
    fontSize: wp('3.5%'),
  },
  subText: {
    fontSize: wp('4%'),
    color: '#848484',
    paddingTop: hp('1%'),
    paddingLeft: wp('4%'),
  },
  photoView: {
    height: hp('20%'),
    flexDirection: 'row',
    paddingBottom: 10,
  },
  headerView: {
    width: wp('50%'),
    alignItems: 'flex-start',
  },
  linkView: {
    top: hp('14%'),
    paddingLeft: wp('4%'),
    position: 'absolute',
  },
  cardSurfaceSmall: {
    backgroundColor: '#EAEAEA',
    flex: 1,
    alignItems: 'center',
    bottom: hp('2%'),
    width: wp('97%'),
    height: hp('20%'),
    elevation: 3,
    borderRadius: 12,
    paddingBottom: hp('2%'),
  },
  surfacePhoto: {
    elevation: 2,
    borderRadius: 8,
    width: wp('30%'),
    height: hp('20%'),
  },
});

export default MovieCard;
