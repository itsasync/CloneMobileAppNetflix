import { StatusBar } from 'expo-status-bar';
import { Image, Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useLocalSearchParams } from 'expo-router';



export default function ModalScreen() {

  // recuperer ce qui a été envoyé par la page precedente
  const { id, title, image, description, season, episodes } = useLocalSearchParams();
 
  // convertir episodes: "Episode 1,Episode 2,Episode 3"  en liste
  const list = episodes.toString().split(",");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details de la série</Text>
      <Text style={styles.title}>{ title }</Text>

      <Image style={styles.affiche} source={{ uri: image.toString() }} />

      <Text style={styles.title}>Liste des épisodes: </Text>
      
      {/* on affiche tout les episodes de la série */}
      {list.map((ep: string, index: number) => (
        <Text key={index}>{ep}</Text>
      ))}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  affiche: {
    width: 200,
    height: 300
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
