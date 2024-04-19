import { View, Text, StyleSheet, Image } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';


function FoodScreen({ route }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)
  console.log(selectedMeal)


  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text></Text>
      <MealDetails
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration} />

      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredients => (<Text key={ingredients}>{ingredients}</Text>))}

      <Text>Steps</Text>
      {selectedMeal.steps.map(step => (<Text key={step}>{step}</Text>))}
    </View>
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
    height: 200,
  },
})