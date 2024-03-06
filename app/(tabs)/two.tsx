import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native';
import Clock from '@/icons/other/clock-icon';
import Icon from '@/icons/other/saved-icon';

export default function TabTwoScreen(): React.ReactNode {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 380,
          height: 60,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Saved recipes</Text>
      </View>
      <View
        style={{
          width: 380,
          height: 710,

          display: 'flex',
          flexDirection: 'column',
        }}>
        <Pressable
          style={{
            position: 'relative',
          }}>
          <ImageBackground
            style={{
              width: 380,
              height: 200,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
            source={{
              uri: 'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*',
            }}>
            <LinearGradient
              colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.2)', 'transparent']}
              style={{ width: '100%', height: '100%', position: 'absolute' }}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
            />

            <View style={{ position: 'absolute', bottom: 8, left: 16 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Food name</Text>
              <Text style={{ color: '#DEDEDE' }}>By Christopper</Text>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 8,
                right: 16,
                display: 'flex',
                flexDirection: 'row',
                width: 110,
                height: 30,
                justifyContent: 'space-between',
                alignContent: 'center',
              }}>
              <View>
                <Clock />
              </View>
              <Text style={{ color: '#D9D9D9' }}>20min</Text>
              <View
                style={{
                  borderColor: 'none',
                  borderRadius: 100,
                  width: 25,
                  height: 25,
                  backgroundColor: '#ECECEC',
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                <View>
                  <Icon />
                </View>
              </View>
            </View>
          </ImageBackground>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
