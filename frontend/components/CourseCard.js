import * as React from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CourseCard = ({ date, startTime, endTime, courseName, location, currentSize, capacity, sessionMode }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.times}>
          <Text style={styles.startTime}>{startTime} - </Text>
          <Text style={styles.endTime}>{endTime}</Text>
          {sessionMode ? <Pressable onPress={() => leaveFlock()}>
            <Text style={styles.cancel}>  x</Text>
          </Pressable> : null}
        </View>
      </View>
      <Text style={styles.courseName}>{courseName}</Text>
      <View style={styles.footer}>
        <Text style={styles.location}>{location}</Text>
        <View style={styles.size}>
          <Ionicons name="person" size="15" color="#3172BA"/>
          <Text style={styles.currentSize}>{currentSize} / </Text>
          <Text style={styles.capacity}>{capacity}</Text>
        </View>
      </View>
    </View>
  );
};

const leaveFlock = () => {
  return (
    Alert.alert('button pressed')
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#B6CFED',
    padding: 17,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: 'space-between',
    fontSize: 12,
    marginBottom: 5,
    marginBottom: 5,
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 12,
    display: "flex",
    alignItems: "flex-end",
  },
  times: {
    flexDirection: "row",
  },
  startTime: {
    color: "#3172BA"
  },
  endTime: {
    color: "#3172BA"
  },
  date: {
    color: "#3172BA"
  },
  courseName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Alata',
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 30,
    display: "flex",
    alignItems: "flex-end",
    color: "#FFFFFF",
    marginTop: 5
  },
  footer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    fontFamily: 'Alata',
    fontStyle: "normal",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 17,
    display: "flex",
    alignItems: "flex-end"
  },
  size: {
    flexDirection: "row",
  },
  location: {
    color: "#6899CF",
    marginRight: "10%"
  },
  currentSize: {
    color: "#6899CF",
    paddingLeft: "2%"
  },
  capacity: {
    color: "#6899CF"
  },
  cancel: {
    color: "#FCFCFE",
    bottom: 3
  }
});

export default CourseCard;
