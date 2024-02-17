import React, {useState} from 'react';
import {FlatList, Image, StyleSheet} from 'react-native';

import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import VideoDatas from '../../utils/data';
import VideoItem from '../../screens/Video/VideoItem';
import { WINDOW_HEIGHT ,} from '../../utils/utils';
import ProfileScreen from '../../screens/Profile/';


const BottomTab = createBottomTabNavigator();

 const VideoScreen=()=>{
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const bottomTabHeight=useBottomTabBarHeight();

    return(
        <FlatList
        data={VideoDatas}
        className='h-full'
        pagingEnabled
        renderItem={({item,index})=><VideoItem data={item} isActive={activeVideoIndex === index} />}
        onScroll={(e)=>{
          const index=Math.floor(e.nativeEvent.contentOffset.y / (WINDOW_HEIGHT -bottomTabHeight));
          setActiveVideoIndex(index);
        }}
        />
            
        
    )
}


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
        component={VideoScreen}
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
         component={ProfileScreen}
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
         component={ProfileScreen}
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
         component={ProfileScreen}
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
        component={ProfileScreen}
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