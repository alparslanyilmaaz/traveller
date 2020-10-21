import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function HomepageHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.smallHeader}>Search for a place</Text>
        <Text style={styles.bigHeader}>Destination</Text>
      </View>
      <View style={styles.image}>
        <Image style={styles.image} source={{ uri: 'https://i.pinimg.com/564x/a7/30/ca/a730ca204dc4135af7a6d53a4c4540dc.jpg' }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  smallHeader: {
    fontFamily: 'OpenSans-Light',
    fontSize: 14,
    color: '#a8b3ab'
  },
  bigHeader: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 30
  },
  image: {
    alignSelf: 'flex-end',
    width: 32,
    height: 32,
    borderRadius: 64
  }
})