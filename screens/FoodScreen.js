import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites'



function FoodScreen({ route, navigation }) {
  // const favMealsCtx = useContext(FavoritesContext)
  const favMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const mealId = route.params.mealId;
  const mealFavorite = favMealIds.includes(mealId);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  function changeFavStat() {
    if (mealFavorite) {
      // favMealsCtx.removeFavorite(mealId)
      dispatch(removeFavorite({ id: mealId }))
    } else {
      // favMealsCtx.addFavorite(mealFavorite)
      dispatch(addFavorite({ id: mealId }))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealFavorite ? 'star' : 'star-outline'}
            color='white'
            onPress={changeFavStat} />
        )
      }
    })
  }, [navigation, headerPress])


  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
          duration={selectedMeal.duration}
          textStyle={styles.detailText}
        />
        <Subtitle >Ingredients</Subtitle>
        <List data={selectedMeal.ingredients} />

        <Subtitle > Steps</Subtitle>
        <List data={selectedMeal.steps} />
      </View>
    </ScrollView>
  )
}

export default FoodScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    margin: 8,
    color: '#23FF1C'
  },
  detailText: {
    color: '#2D6DECF9'
  },

})