import { LinearGradient } from 'expo-linear-gradient';
import { Link, useGlobalSearchParams } from 'expo-router';
import { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import Menu from '../PopupMenu/popup';
import recipes from '../data/recipeData';

import Arrow from '@/icons/left-arrow';
import Clock from '@/icons/other/clock-icon';
import Icon from '@/icons/other/saved-icon';

const Page: React.FC = () => {
  const { id } = useGlobalSearchParams();
  const [tab, setTab] = useState<'ingredients' | 'process'>('ingredients');
  const data = recipes.filter((e) => e.id === id);
  const object = data[0];
  const ingredients = object.ingredients;
  const instructions = object.instructions;
  const handleClick1 = (): void => {
    setTab('ingredients');
  };
  const handleClick2 = (): void => {
    setTab('process');
  };
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
            uri: `${object.imageUrl}`,
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
            <Text style={{ color: '#D9D9D9' }}>{object.cookTime + 'min'}</Text>
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
            {object.name}
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
              data={ingredients}
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
                    <Text style={{ color: '#A9A9A9' }}>
                      {ingredient.quantity}
                      {ingredient.unit}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        )}
        {tab === 'process' && (
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={instructions}
              renderItem={({ item: instruction }) => (
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
                    <Text
                      style={{ color: '#121212', fontSize: 18, fontWeight: 'bold', height: 40 }}>
                      {'Step' + ' ' + instruction.number}
                    </Text>
                    <Text style={{ color: '#A9A9A9', fontSize: 18 }}>
                      {instruction.instruction}
                    </Text>
                  </View>
                </View>
              )}
            />
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
