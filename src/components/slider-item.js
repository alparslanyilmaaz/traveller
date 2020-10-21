import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

function SliderItem(item) {
  return (
    <View style={{ paddingBottom: 5 }}>
      <View style={styles.cardView}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>

      <View style={styles.profileSection}>
        <Image style={styles.profilePic} source={{ uri: item.profilePic }} />
        <View style={styles.textSection}>
          <Text style={styles.profileName}>{item.profileName}</Text>
          <Text style={styles.content}>{item.location}</Text>
        </View>
      </View>
      <View style={styles.bottomTab}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.explanation}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardView: {
    width: 350,
    height: 300,
    margin: 10,
    paddingBottom: 10,
  },
  image: {
    width: 350,
    height: 300,
    borderRadius: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3
  },
  profileSection: {
    position: 'absolute',
    backgroundColor: '#01010195',
    flexDirection: 'row',
    width: 350,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    top: 10,
    padding: 20,
    alignSelf: "center"
  },
  textSection: {
    marginLeft: 20,
  },
  profileName: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: '#fff'
  },
  content: {
    fontFamily: 'OpenSans-Bold',
    color: 'white',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    color: 'white',
    fontSize: 15
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 40,
    resizeMode: 'cover',
    marginTop: 5
  },
  bottomTab: {
    alignSelf: 'center',
    width: 280,
    marginTop: -60,
    height: 90,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 9
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20
  }
});

export default SliderItem;