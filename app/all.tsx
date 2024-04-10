import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, ActivityIndicator } from 'react-native';

import { Recipe, useGetRecipesLazyQuery } from '@/graphql/generated';

const ModalScreen: React.FC = () => {
  const [items, setItems] = useState<Recipe[]>([]);
  const pageInfo = useRef({ page: 1, pageSize: 16 });

  const [gotFirstData, setGotFirstData] = useState(false);

  const [getRecipes, { error }] = useGetRecipesLazyQuery();
  const getData = () => {
    getRecipes({
      variables: {
        page: pageInfo.current.page,
        pageSize: pageInfo.current.pageSize,
      },
      onCompleted: (data) => {
        setItems((prevItems) => [...prevItems, ...(data?.getRecipes as Recipe[])]);
      },
      onError: (error) => {
        console.error('Error fetching more data:', error);
      },
    });
  };
  useEffect(() => {
    if (gotFirstData) {
      getData();
      setGotFirstData(true);
    }
  }, []);
  const getNextPageItems = () => {
    pageInfo.current.page += 1;
    getData();
  };

  const renderLoader = () => {
    return (
      <View style={{ marginVertical: 16, alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    );
  };
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
          width: 390,
          height: 710,
          display: 'flex',
          flexDirection: 'column',
        }}>
        <FlatList
          // style={{ margin: 5, gap: 10, width: '100%' }}
          numColumns={2}
          data={items}
          keyExtractor={(item) => item.id}
          ListFooterComponent={renderLoader}
          onEndReached={getNextPageItems}
          onEndReachedThreshold={0.5}
          renderItem={({ item: recipe }) => (
            <View style={{ width: 200, display: 'flex', paddingBottom: 20 }}>
              <Link
                href={`/recipe/${recipe?.id}`}
                style={{
                  position: 'relative',
                }}>
                <View style={{ borderRadius: 20 }}>
                  <ImageBackground
                    style={{
                      width: 180,
                      height: 200,
                      borderRadius: 20,
                    }}
                    source={{
                      uri: `${recipe?.image}`,
                    }}>
                    <LinearGradient
                      colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.2)', 'transparent']}
                      style={{ width: '100%', height: '100%', position: 'absolute' }}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 0, y: 0 }}
                    />

                    <View style={{ position: 'absolute', bottom: 8, left: 16 }}>
                      <Text
                        style={{ fontWeight: 'bold', fontSize: 15, color: 'white', width: 100 }}>
                        {recipe?.title}
                      </Text>
                      {/* <Text style={{ color: '#DEDEDE' }}>By Christopper</Text> */}
                    </View>
                  </ImageBackground>
                </View>
              </Link>
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
export default ModalScreen;
