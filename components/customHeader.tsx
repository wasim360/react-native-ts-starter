// CustomHeader.js
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { images } from '@/constants';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomHeader = () => {
  const router = useRouter(); 

  return (
    <SafeAreaView>

   
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']} // Your gradient colors
      style={{ height: 80, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}
    >
      {/* Left: Logo */}
      <View style={{ flex: 1 }}>
        <Image
          source={images.logoSmall} // Adjust path as per your project structure
          style={{ width: 40, height: 40 }}
        />
      </View>

      {/* Right: Back Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ flex: 1, alignItems: 'flex-end' }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Back</Text>
      </TouchableOpacity>
    </LinearGradient>
    </SafeAreaView>
  );
};

export default CustomHeader;
