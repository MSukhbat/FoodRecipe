import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, Text, ImageBackground, Pressable, Image } from 'react-native';

import LogSign from './SignUp';

const Welcome: React.FC = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = (): void => {
    setIsClicked(true);
  };
  if (isClicked) {
    return <LogSign />;
  }
  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      source={{
        uri: 'https://s3-alpha-sig.figma.com/img/abb8/bc9a/d3d82b4122f5602afeadd620a4c53d15?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VktPmS4bBWRDy8UlIvxrZkimZ5aHdJYCZvWin6x5OaLygOp7qvXVi1F1bBxXADRJnvkm4yO9wiGAvebAsQEcW2aJqHn239sfDhHjyxf7deCYPqoVfCTXB6N4v8GQvLSvT~n27P5x~g7euP4IXRi9lPVtW-a6-3DHn3ttFa602ByCzhf68LFAWLbpy4hByEGJYjgRKARkEewoMJpklWIqhLd-NaDTXEZoEntyVqr2NsA4Fvnj6w8oFJ9nGqKeiTfJ6JAbRtU5FWhV6uJBuQwMiKh2TckLFEcz27kdwXGTrKH9~SRpYow1YQvxHodG8BwFCeI1C4P4QZ0inkL23oJ1YA__',
      }}
      resizeMethod="resize">
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.8)', 'transparent']}
        style={{ width: '100%', height: '100%', position: 'absolute' }}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      />
      <View
        style={{
          top: 10,
          width: 350,
          height: 800,
          borderColor: 'black',

          borderRadius: 8,
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <View style={{ width: 350, display: 'flex', alignItems: 'center' }}>
          <Image source={require('@/icons/other/asd.png')} />
        </View>
        <View
          style={{
            height: 480,
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View style={{ height: 200, display: 'flex', justifyContent: 'space-around' }}>
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 45, width: 200 }}>
              Get Cooking
            </Text>
            <Text style={{ color: '#FFFFFF', fontSize: 20 }}>Simple way to find Tasty Recipe</Text>
          </View>
          <Pressable
            onPress={handleClick}
            style={{
              width: 200,
              height: 50,
              backgroundColor: '#129575',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}>
            <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Start Cooking &#10142;</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;
