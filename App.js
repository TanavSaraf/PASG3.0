import { createAppContainer, createSwitchNavigator } from "react-navigation";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RecentPasscodes from './screens/recentPass'
import GeneratePasscode from './screens/generatePass'
export default function App() {
  return (
    <AppContainer/>
  );
}
var stackNav=createSwitchNavigator({
  GeneratePasscode:{screen:GeneratePasscode},
  RecentPasscode:{screen:RecentPasscodes}

})
var AppContainer=createAppContainer(stackNav)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
