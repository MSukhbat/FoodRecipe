import { StyleSheet, Text, View } from 'react-native';

export default function TabThreeScreen(): React.ReactNode {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 380,
          height: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#129575' }}>Notifications</Text>
      </View>
      <View
        style={{
          marginTop: 5,
          width: 380,
          height: 720,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            display: 'flex',
            backgroundColor: '#D9D9D9',
            width: 380,
            height: 150,
            justifyContent: 'space-evenly',
            alignContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#484848' }}>
            Save Recipe Alert!
          </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#A9A9A9' }}>
            Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            backgroundColor: '#D9D9D9',
            width: 380,
            height: 150,
            justifyContent: 'space-evenly',
            alignContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#484848' }}>
            New Recipe Alert!
          </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#A9A9A9' }}>
            Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            backgroundColor: '#D9D9D9',
            width: 380,
            height: 150,
            justifyContent: 'space-evenly',
            alignContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#484848' }}>
            New Recipe Alert!
          </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#A9A9A9' }}>
            Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            backgroundColor: '#D9D9D9',
            width: 380,
            height: 150,
            justifyContent: 'space-evenly',
            alignContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#484848' }}>
            New Recipe Alert!
          </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#A9A9A9' }}>
            Lorem Ipsum tempor incididunt ut labore et dolore,in voluptate velit esse cillum
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
