// import React, { useState } from 'react';
// import { View, Text, TextInput, Pressable } from 'react-native';

// import SignUp from './SignUp';

// import Gogle from '@/icons/other/google-icon';
// import { useWelcomed } from '@/service/useWelcomed';

// const Login: React.FC = (props) => {
//   const { changeWelcomed } = useWelcomed();
//   const [isClickedSignUp, setIsClickedSignUp] = useState(false);
//   const handleClick1 = (): void => {
//     changeWelcomed(true);
//   };
//   const handleClick = (): void => {
//     setIsClickedSignUp(true);
//   };
//   if (isClickedSignUp) {
//     return <SignUp />;
//   }

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <View
//         style={{
//           width: 350,
//           height: 650,
//           display: 'flex',
//           flexDirection: 'column',

//           justifyContent: 'space-evenly',
//         }}>
//         <View>
//           <Text
//             style={{ fontWeight: 'bold', fontSize: 40, lineHeight: 45, width: 120, height: 50 }}>
//             Hello,
//           </Text>
//           <Text style={{ fontSize: 20, lineHeight: 45 }}>Welcome Back!</Text>
//         </View>

//         <View style={{ width: 380, height: 200, display: 'flex', justifyContent: 'space-between' }}>
//           <View>
//             <Text style={{ height: 30 }}>Email</Text>
//             <TextInput
//               style={{
//                 height: 60,
//                 width: 350,
//                 borderWidth: 1,
//                 padding: 10,
//                 borderRadius: 10,
//                 backgroundColor: 'white',
//                 borderColor: '#D9D9D9',
//               }}
//               placeholder="Enter your email address"
//             />
//           </View>
//           <View>
//             <Text style={{ height: 30 }}>One -Time password</Text>
//             <TextInput
//               style={{
//                 height: 60,
//                 width: 350,
//                 borderWidth: 1,
//                 padding: 10,
//                 borderRadius: 10,
//                 backgroundColor: 'white',
//                 borderColor: '#D9D9D9',
//               }}
//               placeholder="OTP Code"
//             />
//           </View>
//         </View>
//         <Pressable
//           onPress={handleClick1}
//           style={{
//             width: 350,
//             height: 60,
//             backgroundColor: '#129575',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             borderTopLeftRadius: 10,
//             borderTopRightRadius: 10,
//             borderBottomLeftRadius: 10,
//             borderBottomRightRadius: 10,
//           }}>
//           <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Sign In &#10142;</Text>
//         </Pressable>
//         <View style={{ width: 380, display: 'flex', alignItems: 'center' }}>
//           <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
//             <Text
//               style={{
//                 borderWidth: 1,
//                 width: 50,
//                 height: 1,
//                 backgroundColor: '#D9D9D9',
//                 borderColor: '#D9D9D9',
//               }}>
//               -
//             </Text>
//             <Text style={{ color: '#D9D9D9' }}>Or Sign In with</Text>
//             <Text
//               style={{
//                 borderWidth: 1,
//                 width: 50,
//                 height: 1,
//                 backgroundColor: '#D9D9D9',
//                 borderColor: '#D9D9D9',
//               }}>
//               -
//             </Text>
//           </View>

//           <View>
//             <Gogle />
//           </View>
//           <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
//             <Text>Don't have an account?</Text>
//             <Pressable onPress={handleClick}>
//               <Text style={{ color: '#FF9C00' }}>Sign Up</Text>
//             </Pressable>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Login;

import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native';

import SignUp from './SignUp';

import { useWelcomed } from '@/service/useWelcomed';
const Login: React.FC = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef<TextInput[]>([]);
  const { changeWelcomed } = useWelcomed();
  const [isClickedSignUp, setIsClickedSignUp] = useState(false);

  const handleClick = (): void => {
    setIsClickedSignUp(true);
  };
  if (isClickedSignUp) {
    return <SignUp />;
  }

  const handleChange = (text: string, index: number): void => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text.length === 1 && index < 6) {
      inputs.current[index + 1].focus();
    }
  };

  const handleVerify = (): void => {
    changeWelcomed(true);
    console.log('Verify', code);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verification</Text>
      <Text style={styles.description}>
        A verification code has been sent to your email address. Please enter it below to continue.
      </Text>
      <View style={styles.inputContainer}>
        {code.map((item, index) => (
          <TextInput
            key={index}
            ref={(input) => {
              if (input) {
                inputs.current[index] = input;
              }
            }}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChange(text, index)}
            value={item}
          />
        ))}
      </View>
      <Pressable
        onPress={handleVerify}
        style={{
          width: 350,
          height: 60,
          backgroundColor: '#129575',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Sign In &#10142;</Text>
      </Pressable>
      <Text style={styles.resendText}>Didn't receive code?</Text>
      <Pressable>
        <Text style={{ color: '#FF9C00' }}>Resend code</Text>
      </Pressable>
      <Pressable onPress={handleClick}>
        <View
          style={{
            width: 350,
            height: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Image source={require('@/icons/other/asd3.png')} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 200,
    padding: 10,
    display: 'flex',
    width: '100%',
    height: 600,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    borderWidth: 1,
    height: 50,
    borderColor: '#ccc',
    width: 50,
    textAlign: 'center',
    borderRadius: 10,
  },
  resendText: {
    marginTop: 20,
    marginBottom: 10,
  },
});

export default Login;
