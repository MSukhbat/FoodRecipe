import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  SafeAreaView,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  FlatList,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

import Filter from '@/icons/other/filter-icon';
import { Recipe, useGetRecipesByLetterLazyQuery } from '@/graphql/generated';

export default function SearchScreen(): React.ReactNode {
  const [result, setResult] = useState('');
  // const [data, setData] = useState('');
  const [items, setItems] = useState<Recipe[]>([]);
  const pageInfo = useRef({ page: 1, pageSize: 16 });
  const [getRecipesByLetter, { data, error, loading }] = useGetRecipesByLetterLazyQuery();
  const handleSearchChange = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    setResult(e.nativeEvent.text);
  };
  const getData = async () => {
    try {
      await getRecipesByLetter({
        variables: {
          page: pageInfo.current.page,
          pageSize: pageInfo.current.pageSize,
          input: {
            Letter: result,
          },
        },
        onCompleted: (response) => {
          setItems(response?.getRecipesByLetter);
        },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    getData();
  }, [result]);
  // useEffect(() => {
  //   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${result}`)
  //     .then((response) => response.json())
  //     .then((data) => setData(data.meals))
  //     .catch((err) => console.error(err));
  // }, [result]);

  if (error) {
    return (
      <View>
        <Text>ERROR:{error.message}</Text>
      </View>
    );
  }
  if (loading) {
    return (
      <View style={{ marginTop: 200, alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    );
  }
  return (
    <SafeAreaView>
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
            <TextInput
              style={styles.input}
              placeholder="Search recipe"
              onEndEditing={handleSearchChange}
            />
            <Pressable
              onPress={getData}
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
            </Pressable>
          </View>
          {/* {Search result} */}
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 23, height: 50 }}>Search result</Text>
          </View>
          {data ? (
            <View
              style={{
                width: 380,
                display: 'flex',
              }}>
              <FlatList
                numColumns={2}
                data={items}
                renderItem={({ item: recipe }) => (
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
                          uri: `${recipe.image}`,
                        }}>
                        <LinearGradient
                          colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.2)', 'transparent']}
                          style={{ width: '100%', height: '100%', position: 'absolute' }}
                          start={{ x: 0, y: 1 }}
                          end={{ x: 0, y: 0 }}
                        />

                        <View style={{ position: 'absolute', bottom: 8, left: 16 }}>
                          <Text
                            style={{
                              fontWeight: 'bold',
                              fontSize: 15,
                              color: 'white',
                              width: 100,
                            }}>
                            {recipe.title}
                          </Text>
                          {/* <Text style={{ color: '#DEDEDE' }}>By Christopper</Text> */}
                        </View>
                      </ImageBackground>
                    </Pressable>
                  </View>
                )}
              />
            </View>
          ) : (
            <View
              style={{
                width: 380,
                height: 710,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Text>not found</Text>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70,
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
