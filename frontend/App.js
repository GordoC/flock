//import { io } from 'socket.io-client'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import React, { useState } from 'react';
import MainContainer from './components/MainContainer';

export default function App() {
  // const [msg, setMsg] = useState("blah");
  // const socket = io("http://localhost:1337")
  // socket.on("connect", () => {
  //   setMsg("OKOK")
  // })

  // fetch("http://localhost:1337/api/accounts/2")
  //   .then((resp) => resp.json())
  //   .then((data) => setMsg(data.data.id))

  return (
    <MainContainer/>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});