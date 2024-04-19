import { View, Text, StyleSheet } from 'react-native'

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>Ingredients</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#23FF1C',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomColor: '#23FF1C',
    borderBottomWidth: 2,
  },
  subtitleContainer: {
    borderBottomColor: '#23FF1C',
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 32,
    marginVertical: 8

  }
})