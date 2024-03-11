import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import Login from './Login';

import Gogle from '@/icons/other/google-icon';

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
      <View
        style={{
          width: 350,
          height: 740,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{ fontWeight: 'bold', fontSize: 25, lineHeight: 45, width: 300, height: 50 }}>
            Creat an account
          </Text>
          <Text style={{ width: 240 }}>
            Let’s help you set up your account, it won’t take long.
          </Text>
        </View>

        <View style={{ width: 380, height: 400, display: 'flex', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ height: 30 }}>Name</Text>
          </View>
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
              placeholder="Enter your password"
            />
          </View>
          <View>
            <Text style={{ height: 30 }}>Password</Text>
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
          <View>
            <Text style={{ height: 30 }}>Confirm Password</Text>
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
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Sign Up &#10142;</Text>
        </Pressable>
        <View style={{ width: 380, display: 'flex', alignItems: 'center' }}>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <Text
              style={{
                borderWidth: 1,
                width: 50,
                height: 1,
                backgroundColor: '#D9D9D9',
                borderColor: '#D9D9D9',
              }}>
              -
            </Text>
            <Text style={{ color: '#D9D9D9' }}>Or Sign In with</Text>
            <Text
              style={{
                borderWidth: 1,
                width: 50,
                height: 1,
                backgroundColor: '#D9D9D9',
                borderColor: '#D9D9D9',
              }}>
              -
            </Text>
          </View>

          <View>
            <Gogle />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
            <Text>Already a member?</Text>
            <Pressable onPress={handleClick}>
              <Text style={{ color: '#FF9C00' }}>Sign In</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
