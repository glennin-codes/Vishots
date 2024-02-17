import React from 'react';
import { View, Text, Image } from 'react-native';

const ProfileScreen: React.FC = () => {
  return (
    <View className='flex-1 items-center justify-center bg-black'>
      <Image
        source={require('../../../assets/images/user.png')}
        className='w-24 h-24 rounded-ful  '
      />
      <Text className='text-3xl font-bold mt-4 text-gray-100'>John Doe</Text>
      <Text className='text-xl text-gray-400'>Software Developer</Text>
      <View className='mt-8'>
        <Text className='text-lg font-bold mb-2 text-white'>Bio</Text>
        <Text className='text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          malesuada ullamcorper purus, quis mattis nisi laoreet vel.
        </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
