import Filter from '@/icons/other/filter-icon';
import { View, Text, StyleSheet, Image, Pressable, TextInput } from 'react-native';

const SearchScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 380,
          display: 'flex',
          flexDirection: 'column',
        }}>
        <View
          style={{
            height: 90,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextInput style={styles.input} placeholder="Search recipe" keyboardType="numeric" />
          <View
            style={{
              width: 85,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                width: 40,
                height: 40,
                borderColor: 'black',
                borderRadius: 8,
                backgroundColor: '#129575',
              }}>
              <Filter />
            </Text>
          </View>
        </View>
        {/* {Search result} */}
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 23, height: 50 }}>Search result</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
  },

  input: {
    height: 40,
    width: '75%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
export default SearchScreen;
