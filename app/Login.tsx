import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import SignUp from './SignUp';

import Gogle from '@/icons/other/google-icon';
import { useWelcomed } from '@/service/useWelcomed';

const Login: React.FC = (props) => {
  const { changeWelcomed } = useWelcomed();
  const [isClickedSignUp, setIsClickedSignUp] = useState(false);
  const handleClick1 = (): void => {
    changeWelcomed(true);
  };
  const handleClick = (): void => {
    setIsClickedSignUp(true);
  };
  if (isClickedSignUp) {
    return <SignUp />;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          width: 350,
          height: 650,
          display: 'flex',
          flexDirection: 'column',

          justifyContent: 'space-evenly',
        }}>
        <View>
          <Text
            style={{ fontWeight: 'bold', fontSize: 40, lineHeight: 45, width: 120, height: 50 }}>
            Hello,
          </Text>
          <Text style={{ fontSize: 20, lineHeight: 45 }}>Welcome Back!</Text>
        </View>

        <View style={{ width: 380, height: 230, display: 'flex', justifyContent: 'space-between' }}>
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
          <View>
            <Text style={{ height: 30 }}>Enter Password</Text>
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
            <Text style={{ color: '#FF9C00' }}>Forgot Password?</Text>
          </View>
        </View>
        <Pressable
          onPress={handleClick1}
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
          }}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Sign In &#10142;</Text>
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
            <Text>Don't have an account?</Text>
            <Pressable onPress={handleClick}>
              <Text style={{ color: '#FF9C00' }}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
