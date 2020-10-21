import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function SmallCard(item) {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.temprature}>{item.temprature}</Text>
      <View style={styles.content}>
        <Text style={styles.cityName}>{item.cityName}</Text>
        <Text style={styles.country}>{item.country}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardView: {
    width: 150,
    height: 250,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 170,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  temprature: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: '#fff',
    fontFamily: 'Montserrat-Bold'
  },
  content: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  cityName: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16
  },
  country: {
    fontFamily: 'OpenSans-Regular',
    color: '#C8C8C8'
  }
});

export default SmallCard;