import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';


const PersonBlock = (props) => {
  return (
    <TouchableOpacity style={styles.block}>
      <View>
        <Collapse>
          <CollapseHeader>
            <View>
            <Text style={styles.text}> {props.person.nombre} {props.person.apellido} </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text>Teléfono: {props.person.telefono} </Text>
            <Text>Rut: {props.person.rut} </Text>
            <Text>Fecha de Nacimiento {props.person.fechaNacimiento} </Text>
            <Text>Dirección: {props.person.direccion.calle} {props.person.direccion.numero}, {props.person.direccion.nombre} </Text>
          </CollapseBody>
        </Collapse>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  block: {
    padding: 15,
    backgroundColor: 'whitesmoke',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  text: {
    fontSize: 20,
  },
});

export default PersonBlock;
