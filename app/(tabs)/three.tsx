import { StyleSheet, Text, View } from 'react-native';

export default function TabThreeScreen(): React.ReactNode {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
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
