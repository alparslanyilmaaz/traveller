import React from 'react';
import { View, Text, FlatList } from 'react-native';

import SmallCard from './small-card';

const Recommended = ({ data }) => {
  if (data && data.length) {
    return (
      <View style={{ marginTop: 10 }}>
        <FlatList
          contentContainerStyle={{ paddingStart: 20, paddingEnd: 20 }}
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return SmallCard(item)
          }}
        />
      </View>
    )
  } else {
    return (
      <View>
        <Text>Hobaaa</Text>
      </View>
    )
  }
}

export default Recommended;