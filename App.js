/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useState} from 'react';

import Titol from './components/Titol';
import LlistatAlumnes from './components/LlistatAlumnes';
import DetallAlumne from './components/DetallAlumne';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from 'react-native';
import {Button} from 'react-native-paper';

{
  /* <FlatList
  data={info.Puntuacions}
  keyExtractor={(item, index) => item.nom + ' - ' + index.toString()}
  renderItem={({item, index}) => (
    <LlistatAlumnes
      datos={item.unAlumne}
      index={index}
      alumneSeleccionat={onPress}
    />
  )}></FlatList>; */
}

const App = () => {
  const nombre = 'Alejandro Tos';
  const [info, setInfo] = useState(require('./utils/dades23-24.json'));
  const [globalIndex, setGlobalIndex] = useState(0);

  //Funcion para coger el index que pasa el hijo (LlistatAlumnes) y pasarselo al Padre (este archivo => App.js)
  //y guardarlo en el estado globalIndex
  const onPress = index => {
    console.log(index);
    setGlobalIndex(index);
  };
  return (
    <View style={estils.contenedor}>
      <View style={estils.cabezal}>
        <Titol nombre={nombre}></Titol>
      </View>
      <View style={estils.listado}>
        <ScrollView horizontal={true}>
          {info.Puntuacions.map((unAlumne, index) => {
            return (
              <LlistatAlumnes
                key={index}
                datos={unAlumne}
                index={index}
                alumneSeleccionat={onPress}
              />
            );
          })}
        </ScrollView>
      </View>
      <View style={estils.detalle}>
        {/* Se le pasa el index que esta en el estado del alumno seleccionado */}
        <DetallAlumne datos={info.Puntuacions[globalIndex]} />
      </View>
    </View>
  );
};

const estils = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  cabezal: {
    flex: 0.2,
    backgroundColor: '#0000b9',
  },
  listado: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#5d00ed',
  },
  detalle: {
    flex: 0.6,
    backgroundColor: 'white',
  },
});

export default App;
