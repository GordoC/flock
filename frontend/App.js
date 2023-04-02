import { StyleSheet, Text, TextInput, View } from 'react-native';
import LoginCloud from './assets/LoginCloud.svg';
import FlockLogin from './assets/FlockLogin.svg';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { LoginPage } from './Components/LoginPage';

export default function App() {
  return (
    <View>
      <View style={styles.loginTitle}>
        <Text style={styles.title}>Log In</Text>
        <FlockLogin style={styles.flockLogin}/>
      </View>
      <TextInput placeholder='Email' placeholderTextColor={Colors.darkText} style={styles.emailInput}/>
      <LoginCloud style={styles.loginCloud}/>
    </View>
  );
}

const styles = StyleSheet.create({
  flockLogin: {
    left: 0
  },
  emailInput: {
    backgroundColor: '#f6f6f6',
    borderRadius: 50
  },
  loginTitle: {
    flexDirection: 'column',
  },
  loginCloud: {
    alignSelf: 'flex-end',
    marginBottom: 0
  }
})