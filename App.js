//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ForegroundHandler from './src/helper/ForegroundHandler';
import { requestUserPermission, notificationListener } from './src/helper/notificationServices';


// create a component
const App = () => {

  useEffect(() => {
    requestUserPermission()
    notificationListener()
  }, [])

  return (
    <View style={styles.container}>
      <ForegroundHandler />
      <Text>App</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
