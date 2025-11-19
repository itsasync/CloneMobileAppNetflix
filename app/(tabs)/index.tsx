import { StyleSheet, Image } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur le clone de Netflix</Text>
      <Image style={styles.logo} source={require('../../assets/images/logonetflix.png')} />
     </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100
  },
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
