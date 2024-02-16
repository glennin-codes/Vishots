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
        name="NewVideo"
        component={VideoPlayer}
        options={{
          tabBarLabel: () => null,
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
      {/* <BottomTab.Screen
        name="Inbox"
        component={VideoPlayer}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../../assets/images/message.png')}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      /> */}
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
    width: 25,
    height: 20,
    tintColor: 'grey',
  },
  bottomTabIconFocused: {
    tintColor: 'white',
  },
  newVideoButton: {
    width: 50,
    height: 24,
  },
});