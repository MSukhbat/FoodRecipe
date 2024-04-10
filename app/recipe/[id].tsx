import { LinearGradient } from 'expo-linear-gradient';
import { Link, useGlobalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import Menu from '../PopupMenu/popup';

import { useGetRecipeQuery } from '@/graphql/generated';
import Arrow from '@/icons/left-arrow';
import Icon from '@/icons/other/saved-icon';

const Page: React.FC = () => {
  const { id } = useGlobalSearchParams();
  const { data, loading, error } = useGetRecipeQuery({ variables: { getRecipeId: `${id}` } });
  const [tab, setTab] = useState<'ingredients' | 'process'>('ingredients');
  // useEffect(() => {
  //   fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  //     .then((res) => res.json())
  //     .then(({ meals }) => {
  //       const newObject = meals.map((meal) => {
  //         const ingredients = [];
  //         const measurements = [];
  //         for (let i = 1; i <= 20; i++) {
  //           const ingredient: string = meal[`strIngredient${i}`];
  //           const measurement: string = meal[`strMeasure${i}`];
  //           if (ingredient !== '') {
  //             ingredients.push(ingredient);
  //           }
  //           if (measurement !== '') {
  //             measurements.push(measurement);
  //           }
  //         }
  //         return {
  //           ...meal,
  //           ingredients,
  //           measurements,
  //         };
  //       });
  //       setObject(newObject[0]);
  //     });
  // }, []);

  // const data = recipes.filter((e) => e.id === id);
  // const object = data[0];

  const handleClick1 = (): void => {
    setTab('ingredients');
  };
  const handleClick2 = (): void => {
    setTab('process');
  };

  // const ingredients = object?.ingredients;
  // const measurements = object?.measuremets;
  // const real = [];
  // real.push({ ingredients: ingredients, measurements: measurements });
  if (loading) {
    return (
      <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>ERROR:{error.message}</Text>
      </View>
    );
  }
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
          }}
          source={{
            uri: `${data?.getRecipe?.image}`,
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
            {/* <View>
              <Clock />
            </View> */}
            <Text style={{ color: '#D9D9D9' }}>{data?.getRecipe?.areas}</Text>
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
              fontSize: 25,
              width: 400,
            }}>
            {data?.getRecipe?.title}
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: 380,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={handleClick1}
            style={{
              width: 185,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: '#129575',
            }}>
            <Text style={{ color: '#FFFFFF' }}> ingredient</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleClick2}
            style={{
              width: 185,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              backgroundColor: '#129575',
            }}>
            <Text style={{ color: '#FFFFFF' }}> Process</Text>
          </TouchableOpacity>
        </View>
        {tab === 'ingredients' && (
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={data?.getRecipe?.ingredients}
              renderItem={({ item: ingredient }) => (
                <View
                  style={{
                    width: 380,
                    height: 80,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    backgroundColor: '#D9D9D9',
                    marginVertical: 7,
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      width: 370,
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{ color: '#121212', fontSize: 18, fontWeight: 'bold' }}>
                      {ingredient.name}
                    </Text>
                    <Text style={{ color: '#A9A9A9' }}>{ingredient.measure}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        )}
        {tab === 'process' && (
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                width: 380,
                display: 'flex',
                alignItems: 'center',
                borderRadius: 10,
                backgroundColor: '#D9D9D9',
                marginVertical: 7,
              }}>
              <View
                style={{
                  display: 'flex',
                  width: 370,
                }}>
                {/* <Text
                      style={{ color: '#121212', fontSize: 18, fontWeight: 'bold', height: 40 }}>
                      {'Step' + ' ' + Instruction}
                    </Text> */}
                <ScrollView style={{}}>
                  <Text style={{ fontSize: 18 }}>{data?.getRecipe?.instructions}</Text>
                </ScrollView>
              </View>
            </View>
          </View>
        )}
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
