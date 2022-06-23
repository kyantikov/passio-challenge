import React, {useReducer} from 'react';
import { View, StyleSheet, Pressable, Text } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigation/RootStack";

import NumberInput from "../components/NumberInput";

type Props = NativeStackScreenProps<RootStackParams, 'Inputs'>

enum Action {
  SwitchUnits = 'SWITCH_UNITS',
  InputHeight = 'INPUT_HEIGHT',
  InputWeight = 'INPUT_WEIGHT'
}

type ActionType =
  | { type: Action.SwitchUnits }
  | { type: Action.InputHeight, payload: number | number[] }
  | { type: Action.InputWeight, payload: number }

type State = {
  isImperial: boolean
  height: number | number[]
  weight: number
}

const initialState: State = {
  isImperial: true,
  height: [0, 0],
  weight: 0
}

const inputReducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case Action.SwitchUnits:
      return { ...state, isImperial: !state.isImperial };
    case Action.InputHeight:
      return { ...state };
    case Action.InputWeight:
      return { ...state, weight: action.payload };
  }
};

const InputsScreen = ({ navigation, route }: Props): React.ReactNode => {
  const [state, dispatch] = useReducer(inputReducer, initialState);

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.6 }}/>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <View style={styles.inputsContainer}>
            <View style={styles.inputRowContainer}>
              <NumberInput label={'ft.'}/>
              <View style={{ flex: 0.2 }}/>
              <NumberInput label={'in.'}/>
            </View>
            <View style={{ flex: 0.05 }}/>
            <View style={styles.inputRowContainer}>
              <NumberInput label={'lbs'}/>
            </View>
            <View style={{ flex: 0.05 }}/>
            <Pressable style={({ pressed }) => ([{ opacity: pressed ? 0.35 : 1 }, styles.saveButton])}>
              <Text style={styles.saveButtonText}>SAVE</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%',
    width: '70%',
    borderColor: '#e0e0e0',
    borderWidth: 0.5,
    padding: '2%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 1}
  },
  inputsContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputRowContainer: {
    flexDirection: 'row',
    height: '18%'
  },
  singleInputContainer: {
    height: '18%',
    width: '100%'
  },
  saveButton: {
    height: '17%',
    width: '40%',
    backgroundColor: '#4640AD',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    alignSelf: 'center'
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: '600'
  }
});

export default InputsScreen;
