import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
// import { Video,ResizeMode } from 'expo-av';
import { VideoSrc } from '../../types';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../utils/utils';
import { Video,ResizeMode } from 'expo-av';
const VideoPlayer = () => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const videoUri:VideoSrc = {uri:'https://mediaglens.s3.amazonaws.com/94d0479c8d07/videos/75260fdc-9a11-4cdb-b5cf-aca0ecde3a0f.mp4'};

  const handlePlaybackStatusUpdate = (playbackStatus) => {
    if (!playbackStatus.isLoaded && !playbackStatus.isPlaying && playbackStatus.error) {
      setIsErrorModalVisible(true);
    } else if (playbackStatus.isBuffering) {
      setIsVideoLoading(true);
    } else {
      setIsVideoLoading(false);
    }
  };

  const handleRetry = () => {
    setIsErrorModalVisible(false);
    // You can implement your retry logic here
  };

  return (
    <View className={`flex-1 h-[${WINDOW_HEIGHT}] w-[${WINDOW_WIDTH}] justify-center items-center bg-black`}>
   {isVideoLoading && (
        <View className='absolute inset-0 justify-center items-center bg-black'>
          <ActivityIndicator size="large" color="white" />
        </View>
      )}
      <Video
        source={require('./../../../assets/video.mp4')}
        style={ {
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      
        resizeMode={ ResizeMode.COVER}
        isLooping
        shouldPlay
        onLoad={() => setIsVideoLoading(false)}
      />
     
   
      
       </View>
  );
};

export default VideoPlayer;
