import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import Login from './Login';
import Login1 from '../icons/other/logo-icon';
const SignUp: React.FC = (props) => {
  const [isClickedLog, setIsClickedLog] = useState(false);
  const handleClick = (): void => {
    setIsClickedLog(true);
  };
  if (isClickedLog) {
    return <Login />;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 350, display: 'flex', alignItems: 'center' }}>
        <Login1 />
      </View>
      <View
        style={{
          width: 350,
          height: 400,
          display: 'flex',
          flexDirection: 'column',
        }}>
        <View>
          <Text
            style={{ fontWeight: 'bold', fontSize: 25, lineHeight: 45, width: 300, height: 60 }}>
            Hi Welcome To Recipe App
          </Text>
          <Text style={{ width: 240 }}>
            Let’s help you set up your account, it won’t take long.
          </Text>
        </View>

        <View
          style={{
            width: 380,
            height: 120,
            marginTop: 20,
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{ height: 30 }}>Email</Text>
            <TextInput
              style={{
                height: 60,
                width: 350,
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                backgroundColor: 'white',
                borderColor: '#D9D9D9',
              }}
              placeholder="Enter your email address"
            />
          </View>
        </View>
        <Pressable
          style={{
            width: 350,
            height: 60,
            backgroundColor: '#129575',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
          onPress={handleClick}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Next&#10142;</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;
