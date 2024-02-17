import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { Animated, View, Text } from 'react-native';

const HomeScreen: React.FC = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false, // Set useNativeDriver to false
    });

    animation.start(({ finished }) => {
      if (finished) {
        rotateAnim.setValue(1); // Set the value to 1 to keep it at the center
      }
    });

    return () => {
      animation.stop(); // Stop the animation when the component unmounts
    };
  }, []);

  return (
    <Animated.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <Animated.Text
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          color: 'red',
          transform: [
            {
              translateX: rotateAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-150, 0], // Center the text horizontally
              }),
            },
          ],
        }}
      >
        VINTOSH
      </Animated.Text>
      <Animated.View
        style={{
         
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          transform: [
            {
              translateX: rotateAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [150, 0], // Center the view horizontally
              }),
            },
          ],
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 'bold',color:'aqua' }}>Welcome!</Text>
      </Animated.View>
      <StatusBar style="light" />
    </Animated.View>
  );
};

export default HomeScreen;
