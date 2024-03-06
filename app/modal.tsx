import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const ModalScreen: React.FC = () => {
  return (
    <View style={styles.container}>
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
          <Image
            width={180}
            height={150}
            style={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
            source={{
              uri: 'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*',
            }}
          />

          <View style={{ position: 'absolute', bottom: 8, left: 16 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Food name</Text>
            <Text style={{ color: '#DEDEDE' }}>By Christopper</Text>
          </View>
        </Pressable>
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
export default ModalScreen;
