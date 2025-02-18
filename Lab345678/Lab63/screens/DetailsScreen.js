import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"

export default function DetailsScreen() {
  const navigation = useNavigation()
  const route = useRoute()
  const { name, id } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.info}>Name: {name}</Text>
      <Text style={styles.info}>ID: {id}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.reset({ index: 0, routes: [{ name: "DrawerHome" }] })}
        >
          <Ionicons name="refresh" size={24} color="white" />
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.pop()}>
          <Ionicons name="arrow-up" size={24} color="white" />
          <Text style={styles.buttonText}>Pop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
          <Ionicons name="home" size={24} color="white" />
          <Text style={styles.buttonText}>Pop to Top</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    color: "#555",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e88e5",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    margin: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
})

