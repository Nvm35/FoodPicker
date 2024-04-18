import { useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsScreen() {
  const route = useRoute();
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  })

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealProps = {
      title: item.title,
      imageURL: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    }
    return <MealItem {...mealProps} />
  }


  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
  )
}

export default MealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})