import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';
import UserSessionsScreen from './screens/UserSessionsScreen';

//Screen names
const mapName = "Map";
const userSessionsName = "Sessions";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={mapName}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#3172BA',
          tabBarInactiveTintColor: 'grey',
          tabBarShowLabel: false,
          tabBarStyle:{
            borderRadius: "15px",
            backgroundColor:"#FFFFFF",
            bottom: "5%",
            height: "7%",
            width: "90%",
            marginTop: "10%",
            left: "5%",
            shadowColor: 'black',
            shadowOffset: {
              width: 0,
              height: 5
            },
            shadowRadius: 5,
            shadowOpacity: 0.5
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === mapName) {
              iconName = focused ? 'map' : 'map-outline';
            } else if (rn === userSessionsName) {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (rn === profileName) {
              iconName = focused ? 'person' : 'person-outline';

            } 

            return <Ionicons name={iconName} size={size} color={color} style={{ marginTop: 30 , height: 28 }} />;
          },
        })}>

        <Tab.Screen name={mapName} component={MapScreen} />
        <Tab.Screen name={userSessionsName} component={UserSessionsScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;