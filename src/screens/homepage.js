import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

import Header from '../components/homapage-header.component';
import Slider from '../components/slider';
import RecommendedHeader from '../components/recommended-header.component';
import Recommended from '../components/recommended';

import data from '../dummy-data'
import recommendedData from '../dummy-recommended-data';

function Homepage() {
  return (
    <View>
      <ScrollView>
        <Header />
        <Slider data={data} />
        <RecommendedHeader />
        <Recommended data={recommendedData} />

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
});

export default Homepage;