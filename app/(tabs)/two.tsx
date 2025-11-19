import { StyleSheet, Image, ScrollView } from 'react-native';

import { Text, View } from '@/components/Themed';

import { Link } from 'expo-router';

export type Serie = {
  id: number,
  title: string,
  description: string,
  directory: string,
  nbEpisodes: number,
  season: number, 
  image: string
}

type SerieProps = {
  serie: Serie
}

const SerieCard = ({ serie }: SerieProps) => {
  return (
    <View>
      <Text>{serie.title}</Text>
      <Text>{serie.description}</Text>
      <Text>Saison {serie.season} - {serie.nbEpisodes} épisodes</Text>
      <Image style={styles.affiche} source={{ uri: serie.image }} />
      <Link 
          href={{
            pathname: "/modal",
            params: {
              id: serie.id,
              title: serie.title,
              image: serie.image,
              description: serie.description,
              season: serie.season,
              episodes: "Episode 1,Episode 2,Episode 3" 
            }
          }}  
          style={styles.button}>
            Voir plus
      </Link>
    </View>
  )
}

export default function TabTwoScreen() {
  return (
    <ScrollView >
      <Text style={styles.title}>Series du moment</Text>
      <SerieCard serie={{
        id: 1,
        title: "The Witcher",
        description: "serie antologique",
        directory: "James cameron",
        nbEpisodes: 10,
         season: 1,
        image: "https://fr.web.img4.acsta.net/img/2e/33/2e3376d955135d9990e2167caa06af82.jpg"
      }} />
      <SerieCard serie={{
        id: 2,
        title: "Strangers things",
        description: "serie antologique",
        directory: "James cameron",
         nbEpisodes: 3,

        season: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJT3x8Yywazei2NHnNquI3c21YJrJW9Y_6TZTiK9IE00jvvtLZW7h_Uaa8QyiX3SeOXmnFFz9jhng8WK4p1j-5j6IKqKfP1rGdmFdb6w&s"
      }} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    width: 200,
    margin: 10,
    borderRadius: 20,
    textAlign: 'center'
  },
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
