import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import PersonBlock from './PersonBlock';
import {Collapse,CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';

const PersonList = (props) => {
  const [data, setData] = useState(props.data);

  return (
    <SafeAreaView>
      <Collapse>
        <CollapseHeader>
          <View style={styles.view}>
            <Text style={styles.text}>Lista Completa</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <FlatList
            data={data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => <PersonBlock person={item} />}
          />
        </CollapseBody>
      </Collapse>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  text: {
    color: 'blue',
    fontSize: 20,
  },
});

export default PersonList;
