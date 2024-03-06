import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { View, Text, ImageBackground, Pressable, StyleSheet } from 'react-native';
import Arrow from '@/icons/left-arrow';
import Menu from '../PopupMenu/popup';
import Clock from '@/icons/other/clock-icon';
import Icon from '@/icons/other/saved-icon';

const Page: React.FC = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 380,
          height: 60,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Link href="../" style={{ fontSize: 20, fontWeight: 'bold' }}>
          <Arrow />
        </Link>
        <Text style={{ display: 'flex', alignItems: 'center' }}>
          <Menu />
        </Text>
      </View>
      <View
        style={{
          width: 380,
          height: 700,
          display: 'flex',
          flexDirection: 'column',
        }}>
        <ImageBackground
          style={{
            position: 'relative',
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
        <View style={{ height: 90, display: 'flex', justifyContent: 'center' }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
              width: 250,
            }}>
            Spicy chicken burger with French fries
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: 380,
            justifyContent: 'space-between',
          }}>
          <Pressable
            style={{
              width: 185,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              backgroundColor: '#129575',
            }}>
            <Text style={{ color: '#FFFFFF' }}> ingredient</Text>
          </Pressable>
          <Pressable
            style={{
              width: 185,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              backgroundColor: '#129575',
            }}>
            <Text style={{ color: '#FFFFFF' }}> Process</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
export default Page;
