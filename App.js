import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen} />
          <Stack.Screen name='MealsScreen' component={MealsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
