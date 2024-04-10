import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  NativeSyntheticEvent,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  TextInputEndEditingEventData,
} from 'react-native';

import { Recipe, useGetRecipesByIngredientLazyQuery } from '@/graphql/generated';
import Icon from '@/icons/icon';
export default function Add(): React.ReactNode {
  const [ingredients, setIngredients] = useState<string[]>([]);
  // const [data, setData] = useState('');

  // useEffect(() => {
  //   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${result}`)
  //     .then((response) => response.json())
  //     .then((data) => setData(data.meals))
  //     .catch((err) => console.error(err));
  // }, [result]);

  const [items, setItems] = useState<Recipe[]>([]);
  const pageInfo = useRef({ page: 1, pageSize: 16 });

  const [getRecipesByIngredient, { data, error, loading }] = useGetRecipesByIngredientLazyQuery();
  const handleSearchChange = (e: NativeSyntheticEvent<TextInputEndEditingEventData>): void => {
    const ingredientArray = getIngredientsArray(e.nativeEvent.text);
    setIngredients(ingredientArray);
  };
  function getIngredientsArray(Input: string) {
    const ingredientsArray: string[] = [];
    const ingredientNames = Input.split(',');
    ingredientNames.forEach((ingredientName) => {
      const trimmedName = ingredientName.trim();
      ingredientsArray.push(trimmedName);
    });
    return ingredientsArray;
  }

  const getData = async () => {
    try {
      await getRecipesByIngredient({
        variables: {
          page: pageInfo.current.page,
          pageSize: pageInfo.current.pageSize,
          input: {
            ingredients,
          },
        },
        onCompleted: (response) => {
          console.log('got values:', ingredients, response.getRecipesByIngredient.length);
          setItems(response?.getRecipesByIngredient);
        },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    getData();
  }, [ingredients]);

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
            height: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#129575' }}>
            Search With Ingredients
          </Text>
        </View>
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
            <TouchableOpacity
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
                  width: 30,
                  height: 30,
                  borderColor: 'black',
                  borderRadius: 8,
                  backgroundColor: '#129575',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>
                  <Icon />
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
          {/* {Search result} */}
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 23, height: 50, color: '#129575' }}>
              Search result
            </Text>
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
                keyExtractor={(item) => item.id}
                renderItem={({ item: recipe }) => (
                  <View style={{ width: 200, display: 'flex', paddingBottom: 20 }}>
                    <Link
                      href={`/recipe/${recipe?.id}`}
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
                    </Link>
                  </View>
                )}
              />
            </View>
          ) : (
            <View
              style={{
                width: 380,
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
    paddingTop: 130,
  },

  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    padding: 10,
    borderColor: '#129575',
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
