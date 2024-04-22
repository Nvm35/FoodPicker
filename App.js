import { StatusBar } from 'expo-status-bar';
import { StyleSheet, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import FoodScreen from './screens/FoodScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#755AB2' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#E193D3' },
        drawerContentStyle: { backgroundColor: '#755AB2' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#755AB2',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>

        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#755AB2' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#E193D3' }
          }}>
            <Stack.Screen
              name='Drawer'
              component={DrawerNavigator}
              options={{ headerShown: false }}

            />
            <Stack.Screen
              name='MealsCategories'
              component={CategoriesScreen}
              options={{
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
              component={FoodScreen}
            // options={{
            //   headerRight: () => {
            //     return <Button title='tap' />
            //   }
            // }} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>

    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
