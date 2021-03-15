import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Touchable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PersonBlock from './PersonBlock'

const SearchBar = (props) => {
  const data = props.data;
  const [name, setName] = useState('');
  const [person, setPerson] = useState({});
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const search = () => {
    const searchedPerson = data.filter((persona) => name === persona.nombre);
    if (setPerson !== []) {
      setPerson(searchedPerson);
      console.log(person[0]);
      forceUpdate();
    }
  };
  const onChange = (textValue) => setName(textValue);
  if (person === {}) {
    return (
      <View>
        <View style={styles.view}>
          <TextInput placeholder="Buscar por Nombre" style={styles.input} onChangeText={onChange}/>
          <TouchableOpacity style={styles.btn} onPress={search}>
            <Icon name='search' size={20} style={styles.icon}/> 
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <View style={styles.view}>
          <TextInput placeholder="Buscar por Nombre" style={styles.input} onChangeText={onChange}/>
          <TouchableOpacity style={styles.btn} onPress={search}>
            <Icon name='search' size={20} style={styles.icon}/> 
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const width_proportion = '85%';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  },
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    width: width_proportion,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'lightgreen',
    padding: 9,
    margin: 5,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default SearchBar;
