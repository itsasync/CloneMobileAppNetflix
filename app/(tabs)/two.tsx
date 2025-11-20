import { StyleSheet, Image, ScrollView } from 'react-native';

import { Text, View } from '@/components/Themed';

import { Link } from 'expo-router';
import { useEffect, useState } from 'react';

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

  // Créer un state pour stocker les séries (variable)
  const [ series, setSeries ] = useState<Serie[]>([])

  // Au chargement de la page on va appeler notre backend pour recuperer les series
  // les [] permettent de donner la liste des elements qui declenche un appel de useeffect
  useEffect(() => {
    // appeler le backend
    const fetchData = async () => {
      // declenche le /series
      const reponse = await fetch("http://localhost:3000/series", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          mode: "cors"
      })
      // je transforme reponse au format json
      const data = await reponse.json()
      // je sauvegarde les données dans mon useState
      setSeries(data)
      // afficher en console 
      console.log(data)
    }

    fetchData()
  }, [])

  return (
    <ScrollView>
      <Text style={styles.title}>Series du moment</Text>
      {series.map((s) => (
        <SerieCard key={s.id} serie={s} />
      ))}
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
