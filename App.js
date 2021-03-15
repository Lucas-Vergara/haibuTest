import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './components/Header';
import PersonList from './components/PersonList';
import SearchBar from  './components/SearchBar'
const url = 'https://my-json-server.typicode.com/HaibuSolutions/prueba-tecnica-sf/user';


const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (data != null) {
    return (
      <View style={styles.container}>
        <Header />
        <SearchBar data={data} />
        <PersonList data={data} />
      </View>
    );
  } else {return null}

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    padding: 15,
  },
});

export default App;
