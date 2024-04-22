import { useNavigation } from "@react-navigation/native";
import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from '../MealDetails';

function MealItem({ id, title, imageURL, duration, complexity, affordability }) {
  const navigation = useNavigation();

  function selectMealHandler() {
    navigation.navigate('FoodScreen', { mealId: id })

  }

  return (


    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: 'pink' }}
        style={({ pressed }) => pressed ? styles.buttonPressed : null}
        onPress={selectMealHandler}
      >
        <View>
          <Image source={{ uri: imageURL }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails duration={duration} affordability={affordability} complexity={complexity} />
      </Pressable>
    </View>
  )
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? "hidden" : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: '#56E9C7',
    shadowOpacity: 0.8,
    shadowRadius: 16,
    shadowOffset: { width: 2, height: 2 },
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
})