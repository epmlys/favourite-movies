/**
 * Favourite Movies Mobile App
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {getTopMovies, searchMovies} from './api/omdbClient';
import {Button, TextInput} from 'react-native-paper';
import MovieCard from './components/MovieCard';
import Divider from './components/Divider';

const App = () => {
  const [movies, setMovies] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <TextInput
        label="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Button
        icon="selection-search"
        mode="contained"
        onPress={() => {
          searchMovies(searchQuery).then(response =>
            setMovies(response.data.Search));
        }}>
        Search Movies
      </Button>
      <ScrollView>
        <View>
          <Text style={styles.highlight}>Movies:</Text>
          {movies.map(movie => (
            <>
            <MovieCard movie={movie} />
            <Divider />
            </>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
