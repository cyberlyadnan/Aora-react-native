import React from 'react';
import { Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1"> {/* Wrap your app with GestureHandlerRootView */}
      <SafeAreaProvider>
        <SafeAreaView className="flex-1 bg-primary">
          <ScrollView contentContainerStyle={{ height: '100%' }}>
            <View className="w-full justify-center items-center h-[85vh] px-4">
              <Image
                source={images.logo}
                className="w-[130px] h-[84px]"
                resizeMode="contain"
              />
              <Image
                source={images.cards}
                className="max-w-[300px] w-full h-[300px]"
                resizeMode="contain"
              />
              <View className="relative mt-5">
                <Text className="text-3xl text-white font-bold text-center">
                  Discover Endless Possibilities With
                  <Text className="text-secondary-200"> Aora</Text>
                </Text>
                <Image
                  source={images.path}
                  className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                  resizeMode="contain"
                />
                <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                  Where creativity meets innovation: embark on a journey of limitless exploration with Aora
                </Text>
                <CustomButton 
                title="Continue With Email"
                handlePress={()=> router.push("/sign-in")}
                containerStyle="w-full mt-7"/>
              </View>
            </View>
          </ScrollView>


          <StatusBar backgroundColor='#161622' style='light'/>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
