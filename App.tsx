import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import RootStack from "./src/navigation/RootStack";

export default function App() {
  return (
    <>
      <RootStack/>
      <StatusBar backgroundColor='auto'/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
