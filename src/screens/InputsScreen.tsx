import React from 'react';
import { View, StyleSheet, Text } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigation/RootStack";

type Props = NativeStackScreenProps<RootStackParams, 'Inputs'>

const InputsScreen = ({ navigation, route }: Props) => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InputsScreen;
