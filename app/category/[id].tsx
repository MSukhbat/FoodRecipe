import { useGetRecipesQuery } from '@/graphql/generated';
import { LinearGradient } from 'expo-linear-gradient';
import { useGlobalSearchParams } from 'expo-router';

import { View, Text, StyleSheet, Pressable, FlatList, ImageBackground } from 'react-native';

const CategoryScreen: React.FC = () => {
  const { id } = useGlobalSearchParams();
  const { data } = useGetRecipesQuery();
  console.log(id);

  const realData = data?.getRecipes?.filter((e) => e?.category === id);
  console.log(realData);
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 390,
          height: 710,
          display: 'flex',
          flexDirection: 'column',
        }}>
        <FlatList
          // style={{ margin: 5, gap: 10, width: '100%' }}
          numColumns={2}
          data={realData}
          renderItem={({ item: data }) => (
            <View style={{ width: 200, display: 'flex', paddingBottom: 20 }}>
              <Pressable
                style={{
                  position: 'relative',
                }}>
                <ImageBackground
                  style={{
                    width: 180,
                    height: 200,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                  source={{
                    uri: `${data?.image}`,
                  }}>
                  <LinearGradient
                    colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.2)', 'transparent']}
                    style={{ width: '100%', height: '100%', position: 'absolute' }}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                  />

                  <View style={{ position: 'absolute', bottom: 8, left: 16 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white', width: 100 }}>
                      {data?.title}
                    </Text>
                    {/* <Text style={{ color: '#DEDEDE' }}>By Christopper</Text> */}
                  </View>
                </ImageBackground>
              </Pressable>
            </View>
          )}
        />
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
export default CategoryScreen;
