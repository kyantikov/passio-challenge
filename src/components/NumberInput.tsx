import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

type Props = {
  label: string
}

const NumberInput = ({ label }: Props): JSX.Element => {
  return (
    <>
      <TextInput
        style={styles.input}
        keyboardType='number-pad'
        returnKeyType='done'
      />
      <Text style={{ alignSelf: 'flex-end', marginLeft: '2%'}}>{label}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    borderColor: '#1498C9',
    backgroundColor: '#FFFFFF',
    flex: 2.5,
    height: '100%%',
    borderRadius: 5,
    fontSize: 24,
    textAlign: 'center'
  },
});

export default NumberInput;
