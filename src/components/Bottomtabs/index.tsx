import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';

import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import VideoPlayer from '../../screens/Video';

const BottomTab = createBottomTabNavigator();



export default () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: 'black'},
        headerShown: false,
        tabBarActiveTintColor: 'white',
      }}>
      <BottomTab.Screen
        name="Home"
        component={VideoPlayer}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../../assets/images/home.png')}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Discover"
        component={VideoPlayer}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../../assets/images/search.png')}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
        <BottomTab.Screen
        name="Predict"
        component={VideoPlayer}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../../assets/images/message.png')}
              style={[
                styles.predictMatches,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="UploadVideo"
        component={VideoPlayer}
        options={{
          // tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../../assets/images/new-video.png')}
              style={[
                styles.newVideoButton,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
    
      <BottomTab.Screen
        name="Profile"
        component={VideoPlayer}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../../assets/images/user.png')}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 20,
    height: 20,
    tintColor: 'grey',
  },
  bottomTabIconFocused: {
    tintColor: 'white',
  },
  predictMatches:{
    width: 42,
    height: 22,
  
  },
  newVideoButton: {
   
    width: 32,
    height: 25,
  },
});