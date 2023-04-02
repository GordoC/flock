//import { io } from 'socket.io-client'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import React, { useState } from 'react';
import MainContainer from './components/MainContainer';
import NewSessions from './components/NewSessions';

export default function App() {

  return (
      <NewSessions/>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});