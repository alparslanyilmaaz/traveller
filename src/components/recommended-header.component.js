import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecommendedHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended</Text>
      <Text style={styles.more}>More</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 20,
    marginStart: 30,
    marginEnd: 30
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: '#000'
  },
  more: {
    alignSelf: 'flex-end',
    fontFamily: 'OpenSans-Light'
  }
});

export default RecommendedHeader;