import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ImageBackground,StyleSheet, Text, View } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import image from './assets/fondo3.gif';


export default function App() {

  const [dragonBall, setDragonball] = useState([])

  const fechtData = async () => {

    const res = await fetch('https://dragon-ballz-super-api.site/api');
    const data = await res.json();

    // console.log(data.characters);

    setDragonball(data.characters);

  }

  const reset = () => setDragonball([]);


  

  const renderItem = ({ item }) => {

    return (

      
      
      <View style={styles.cardContainer} >

        <Card style={styles.card}  >
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginLeft: 10, marginTop: 5, }} >
            <Avatar.Image size={50} source={require('./assets/dragon.png')} />
            <View style={{ marginLeft: 50, zIndex: 1, }} >
              <Text style={styles.nombre}>{item.name}</Text>
            </View>
          </View>
          <Card.Content >
            <Text variant="titleLarge" style={styles.datos} >Race: {item.race}</Text>
          </Card.Content>

          <View style={styles.containerImg} >
            <Card.Cover source={{ uri: item.img }} style={styles.img} />

          </View>

        </Card>

      </View>
      


    )


  }




  return (
    
    <View style={styles.container}>
        <ImageBackground  source={image} resizeMode="cover" >


        <View style={styles.containerButoon} >

          <TouchableOpacity style={styles.boton} onPress={fechtData} >
            <Text style={styles.texto} >Obtener personajes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boton} onPress={reset} >
            <Text style={styles.texto} >Limpiar</Text>
          </TouchableOpacity>

        </View>

        <FlatList data={dragonBall} renderItem={renderItem} />

        <StatusBar style="auto" />
      </ImageBackground>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  cardContainer: {
    perspective: 1200,
    transform: [{ rotateY: '5deg' }],
    marginLeft: 85,
    marginTop:5,
    
    
  },
  boton: {
    backgroundColor: '#33FF7D',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginTop: 100,
    marginRight: 10,
    marginBottom: 20,
    width: 150,
    height: 30,

  },
  containerButoon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  texto: {
    textAlign: 'center',
    fontSize: 20,
  },
  card: {
    width: 280,
    height: 350,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'black',
    opacity: 0.9,


  },
  nombre: {

    fontSize: 20,
    color: '#058A29',
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 5,
    zIndex: 2,
    textShadowColor: '#313732',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  datos: {
    fontSize: 20,
    color: 'white',
  },
  descripcion: {
    fontSize: 12,
  },
  img: {
    width: 150,
    height: 250,
    resizeMode: 'cover',
    marginTop: -7,
  },

  containerImg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

});


