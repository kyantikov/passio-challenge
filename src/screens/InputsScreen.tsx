import React, { useReducer } from 'react';
import { View, StyleSheet, Pressable, Text } from "react-native";

import SelectDropdown from 'react-native-select-dropdown';

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
  | { type: Action.SwitchUnits, payload: boolean }
  | { type: Action.InputHeight, payload: number[] | number }
  | { type: Action.InputWeight, payload: number }

type State = {
  isImperial: boolean
  height: number[] | number
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
      return { ...state, isImperial: action.payload };
    case Action.InputHeight:
      return { ...state, height: action.payload };
    case Action.InputWeight:
      return { ...state, weight: action.payload };
  }
};

const InputsScreen = ({ navigation, route }: Props): React.ReactNode => {
  const [state, dispatch] = useReducer(inputReducer, initialState);

  console.log(state);

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.6 }}/>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <View style={styles.inputsContainer}>
            {state.isImperial
              ? <View style={styles.inputRowContainer}>
                  <NumberInput
                    label={'ft.'}
                    onChangeText={(height) => {
                      const payload = [height ? parseInt(height) : 0, state.height[1]]
                      dispatch({type: Action.InputHeight, payload})
                    }}
                  />
                  <View style={{flex: 0.2}}/>
                  <NumberInput
                    label={'in.'}
                    onChangeText={(height) => {
                      const payload = [state.height[0], height ? parseInt(height) : 0]
                      dispatch({type: Action.InputHeight, payload})
                    }}
                  />
                </View>
              : <View>

              </View>
            }
            <View style={{ flex: 0.05 }}/>
            <View style={styles.inputRowContainer}>
              <NumberInput
                label={'lbs'}
                onChangeText={(weight) => {
                  dispatch({ type: Action.InputWeight, payload: parseInt(weight) })
                }}
              />
              <SelectDropdown
                buttonStyle={{ width: '40%', height: '96%', borderRadius: 5}}
                defaultButtonText={'Imperial'}
                data={['Imperial', 'Metric']}
                selectedRowTextStyle={{ color: '#FFFFFF'}}
                dropdownStyle={{ borderRadius: 5 }}
                selectedRowStyle={{ backgroundColor: '#1498C9'}}
                onSelect={(item) => {
                  if (item === 'Metric') {
                    dispatch({ type: Action.SwitchUnits, payload: false });
                  } else {
                    dispatch({ type: Action.SwitchUnits, payload: true });
                  }
                }}
              />
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
    alignSelf: 'center',
    zIndex: -1
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: '600'
  }
});

export default InputsScreen;
