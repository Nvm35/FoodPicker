import { FlatList, StyleSheet, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

function MealsScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  })

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title
    navigation.setOptions({ title: categoryTitle })
  }, [catId, navigation]
  )


  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealProps = {
      id: item.id,
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