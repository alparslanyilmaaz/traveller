import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';

import SliderItem from './slider-item';

const Slider = ({ data }) => {
  if (data && data.length) {
    return (
      <View style={{ marginTop: 20 }}>
        <FlatList
          contentContainerStyle={{ paddingStart: 20, paddingEnd: 20 }}
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return SliderItem(item)
          }}
        />
      </View>
    );
  } else {
    return (
      <View>
        <Text>Hoba</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default Slider;