import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({ title, color, onPress, }) {
  return (
    <View style={styles.gridImem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
        onPress={onPress}
      >

        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridImem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: '#56E9C7',
    shadowOpacity: 0.55,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === 'android' ? "hidden" : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  }
})