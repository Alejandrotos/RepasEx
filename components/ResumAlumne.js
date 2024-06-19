import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Surface} from 'react-native-paper';

const ResumAlumne = props => {

  return(
  <TouchableOpacity>
    <Text>{props.nom}</Text>
    <View style={styles.estilBorde}>
      <Text>Nota</Text>
      <Text>{props.nota}</Text>
    </View>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  estilBorde: {
    margin: 5,
    marginTop: 50,
    padding: 3,
    borderWidth: 4,
  },
});

export default ResumAlumne;
