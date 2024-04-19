import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';


function FoodScreen({ route }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)
  console.log(selectedMeal)


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