import React, { useCallback, useEffect, useRef, useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  Image,
  StyleSheet,
  Animated,
  Easing,
  StatusBar,
} from "react-native";

import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../utils/utils";
import { Video, ResizeMode } from "expo-av";
import { VideoModel } from "../../utils/data";
import { getMusicNote } from "../../utils/getMusicNote";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
const VideoItem = ({data,isActive}:{data:VideoModel ,isActive:boolean}) => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const {
   id,
    caption,
    channelName,
    uri,
    musicName,
    likes,
    comments,
    avatarUri,
  } = data;
  const discAnimatedValue=useRef(new Animated.Value(0)).current;
  const musicNoteAnimatedValue1=useRef(new Animated.Value(0)).current;
  const musicNoteAnimatedValue2=useRef(new Animated.Value(0)).current;
 const discAnimation={
  transform:[
    {
      rotate:discAnimatedValue.interpolate({
        inputRange:[0,1],
        outputRange:['0deg','360deg'],
         

      })
    }
  ]
 }
 const musicNoteAnimation1=getMusicNote(musicNoteAnimatedValue1,true);
 const musicNoteAnimation2=getMusicNote(musicNoteAnimatedValue2,false);

const  discAnimLoopRef =useRef<any>();
const musicAnimLoopRef=useRef<any>();
const triggerAnimation=useCallback(()=>{
  discAnimLoopRef.current=Animated.loop(
    Animated.timing(discAnimatedValue,{
      toValue:1,
      duration:3000,
      easing:Easing.linear,
      useNativeDriver:false
    }),
  );
  discAnimLoopRef.current.start();
  musicAnimLoopRef.current=Animated.loop(
    Animated.sequence([
      Animated.timing(musicNoteAnimatedValue1,{
        toValue:1,
        duration:2000,
        easing:Easing.linear,
        useNativeDriver:false
      }),
      Animated.timing(musicNoteAnimatedValue2,{
        toValue:1,
        duration:2000,
        easing:Easing.linear,
        useNativeDriver:false
      }),
    
     ])
   );
   musicAnimLoopRef.current.start();

},[discAnimatedValue, musicNoteAnimatedValue1, musicNoteAnimatedValue2])




 useEffect(()=>{
 if(isActive){
  triggerAnimation();
 }else{
  discAnimLoopRef.current?.stop();
  musicAnimLoopRef.current?.stop();
  discAnimatedValue.setValue(0);
  musicNoteAnimatedValue1.setValue(0);
  musicNoteAnimatedValue2.setValue(0);
 }

 }
 ,[discAnimatedValue,musicNoteAnimatedValue1,musicNoteAnimatedValue2,isActive,triggerAnimation]);

 const videoRef = useRef(null); 


 useEffect(() => {
   if (isActive) {
     // Play the video if isActive is true
     videoRef.current?.playAsync();
   } else {
     // Pause the video if isActive is false
     videoRef.current?.pauseAsync();
   }
 }, [isActive]); // This effect runs whenever isActive changes


 //getting the  height difference
 const bottomTabHeight = useBottomTabBarHeight();
 const statusBarHeight = StatusBar.currentHeight || 0;
  return (
    <View
    className={` justify-center items-center bg-black`}
style={[styles.container,     {height: WINDOW_HEIGHT - (bottomTabHeight - statusBarHeight)}]}
    >
      {isVideoLoading && (
        <View className="absolute inset-0 justify-center items-center bg-black">
          <ActivityIndicator size="large" color="white" />
        </View>
      )}
      <Video
      ref={videoRef}
        source={{uri}}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        resizeMode={ResizeMode.COVER}
        
        isLooping
        shouldPlay
        onLoad={() => setIsVideoLoading(false)}
      />
      <View style={styles.bottomSection}>
        <View style={styles.bottomLeftSection}>
          <Text style={styles.channelName}>{channelName}</Text>
          <Text style={styles.caption}>{caption}</Text>
          <View style={styles.musicNameContainer}>
            <Image
              source={require("../../../assets/images/music-note.png")}
              style={styles.musicNameIcon}
            />
            <Text style={styles.musicName}>{musicName}</Text>
          </View>
        </View>
        <View style={styles.bottomRightSection}>
          <Animated.Image
            source={require("../../../assets/images/floating-music-note.png")}
            style={[styles.floatingMusicNote,musicNoteAnimation1]}
          />
          <Animated.Image
            source={require("../../../assets/images/floating-music-note.png")}
            style={[styles.floatingMusicNote,musicNoteAnimation2]}
          />
          <Animated.Image
            source={require("../../../assets/images/disc.png")}
            style={[styles.musicDisc,discAnimation]}
          />
        </View>
      </View>

      <View style={styles.verticalBar}>
        {/* avatar */}
        <View style={[styles.verticalBarItem, styles.avatarContainer]}>
          <Image style={styles.avatar} source={{ uri: avatarUri }} />
          
          <View style={styles.followButton}>
            <Image
              source={require("../../../assets/images/plus-button.png")}
              style={styles.followIcon}
            />
          </View>
        </View>
        {/* likes */}
        <View style={styles.verticalBarItem}>
          <Image
            style={styles.verticalBarIcon}
            source={require("../../../assets/images/heart.png")}
          />
          <Text style={styles.verticalBarText}>{likes}</Text>
        </View>
        {/* comments */}
        <View style={styles.verticalBarItem}>
          <Image
            style={styles.verticalBarIcon}
            source={require("../../../assets/images/message-circle.png")}
          />
          <Text style={styles.verticalBarText}>{comments}</Text>
        </View>
        {/* share */}
        <View style={styles.verticalBarItem}>
          <Image
            style={styles.verticalBarIcon}
            source={require("../../../assets/images/reply.png")}
          />
          <Text style={styles.verticalBarText}>Share</Text>
        </View>
      </View>
    </View>
  );
};

export default VideoItem;
const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,

  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  bottomSection: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  bottomLeftSection: {
    flex: 4,
  },
  bottomRightSection: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  channelName: {
    color: "white",
    fontWeight: "bold",
  },
  caption: {
    color: "white",
    marginVertical: 8,
  },
  musicNameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  musicNameIcon: {
    width: 12,
    height: 12,
    marginRight: 8,
  },
  musicName: {
    color: "white",
  },
  musicDisc: {
    width: 40,
    height: 40,
  },
  verticalBar: {
    position: "absolute",
    right: 8,
    bottom: 72,
  },
  verticalBarItem: {
    marginBottom: 24,
    alignItems: "center",
  },
  verticalBarIcon: {
    width: 32,
    height: 32,
  },
  verticalBarText: {
    color: "white",
    marginTop: 4,
  },
  avatarContainer: {
    marginBottom: 48,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  followButton: {
    position: "absolute",
    bottom: -8,
  },
  followIcon: {
    width: 21,
    height: 21,
  },
  floatingMusicNote: {
    position: "absolute",
    right: 40,
    bottom: 16,
    width: 16,
    height: 16,
    tintColor: "white",
  },
});
