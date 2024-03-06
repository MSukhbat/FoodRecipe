import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import Minute from '@/icons/other/minute-icon';
import Filter from '@/icons/other/filter-icon';
import Detail from '@/app/recipe/[id]';

export default function TabOneScreen(): React.ReactNode {
  const [detail, setDetail] = useState(false);
  const detailHandler = (): void => {
    setDetail(true);
  };
  if (detail) {
    return <Detail />;
  }
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
        </Link>

        {/* {Scrolls} */}
        <View style={{ width: 380, height: 70 }}>
          <Pressable style={styles.button}>
            <Text style={styles.text}>Options</Text>
          </Pressable>
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
          <Text style={{ fontWeight: 'bold', fontSize: 23 }}>Popular now</Text>
          <Link href="/modal">
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
        {/* <Link href={`/recipe/${}`}> */}
        <Pressable onPress={detailHandler}>
          <View
            style={{
              width: 210,
              height: 320,
              borderColor: 'black',
              borderRadius: 8,
              backgroundColor: '#ECECEC',
            }}>
            <Image
              height={120}
              style={{
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
              source={{
                uri: 'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*',
              }}
            />
            <View
              style={{
                width: 200,
                height: 200,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 180,
                  height: 180,
                }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Food name</Text>
                <View
                  style={{
                    width: 130,
                    height: 30,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Minute />
                  <Text style={{ color: '#575757' }}>XX-XX minutes</Text>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
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
    width: '75%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#129575',
  },
});
