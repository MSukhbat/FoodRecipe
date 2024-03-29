import { Link, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';

import recipes from '../data/recipeData';

import Filter from '@/icons/other/filter-icon';
// import Idk from '@/icons/other/idk-icon';
// import Minute from '@/icons/other/minute-icon';

export default function TabOneScreen(): React.ReactNode {
  const router = useRouter();
  const [data, setData] = useState();
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((res) => res.json())
      .then(({ meals }) => {
        setData(meals);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: 380,
          height: 720,
          display: 'flex',
          flexDirection: 'column',
        }}>
        {/* {header} */}
        <View
          style={{
            width: 380,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View style={{ height: 60, display: 'flex', justifyContent: 'space-between' }}>
            <Text style={styles.title}>Hello Name</Text>
            <Text style={styles.title1}>what are you cooking today</Text>
          </View>
          <View
            style={{
              width: 80,
              height: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                borderBottomLeftRadius: 8,
                width: 50,
                height: 50,
              }}
              source={{
                uri: 'https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg',
              }}
            />
          </View>
        </View>
        {/* {Search with Filter} */}
        <Link href="/search">
          <View
            style={{
              width: 380,
              height: 90,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TextInput style={styles.input} placeholder="Search recipe" keyboardType="numeric" />
            <View
              style={{
                width: '25%',
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
        </Link>
        {/* {Scrolls} */}
        <View style={{ width: 380, height: 70 }}>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({ item: data }) => (
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push(`/category/${data.strCategory}`)}>
                <Text style={styles.text}>{data.strCategory}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* {Popular recipies} */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: 380,
            height: 60,
            justifyContent: 'space-between',
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 23 }}>Recipies</Text>
          <Link href="/all">
            <Text
              style={{
                width: 65,
                height: 60,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#129575',
              }}>
              See all
            </Text>
          </Link>
        </View>
        {/* {Recipes} */}
        <FlatList
          data={recipes}
          renderItem={({ item: recipe }) => (
            <View>
              <Link href={`/recipe/${recipe.id}`}>
                <View
                  style={{
                    width: 380,
                    height: 300,

                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <Image
                    style={{
                      width: 380,
                      height: 200,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                    source={{
                      uri: `${recipe.imageUrl}`,
                    }}
                  />
                  <View
                    style={{
                      display: 'flex',
                      backgroundColor: '#D9D9D9',
                      width: 380,
                      height: 80,
                      justifyContent: 'center',
                      alignContent: 'center',
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}>
                    <View>
                      <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#484848' }}>
                        {recipe.name}
                      </Text>
                    </View>
                  </View>
                </View>
              </Link>
            </View>
          )}
        />
        {/* <Link href={`/recipe/${}`}> */}
        {/* </Link> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#F5F5F5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title1: {},
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 40,
    borderRadius: 15,
    backgroundColor: 'white',
    margin: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#129575',
  },
});
