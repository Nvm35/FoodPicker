import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import FoodScreen from './screens/FoodScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#755AB2' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#E193D3' }

        }}>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen} options={{
            title: 'All Categories',
          }} />
          <Stack.Screen
            name='MealsScreen'
            component={MealsScreen}
          // options={({ route, navigation }) => {
          //   const catId = route.params.categoryId;
          //   return {
          //     title: catId,
          //   }
          // }}
          />
          <Stack.Screen
            name='FoodScreen'
            component={FoodScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
