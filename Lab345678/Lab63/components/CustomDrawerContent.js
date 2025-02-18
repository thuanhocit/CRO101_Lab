import { View, Text, Image, StyleSheet } from "react-native"
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image source={{ uri: "https://i.imgur.com/7lsPp45.jpeg" }} style={styles.avatar} />
        <Text style={styles.username}>Thuanhocit</Text>
        <Text style={styles.email}>thuanhocit@example.com</Text>
      </View>
      <DrawerItemList {...props} />
      <View style={styles.drawerFooter}>
        <Text style={styles.footerText}>App Version 1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 20,
    backgroundColor: "rgb(29, 123, 255)",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 5,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  username: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    color: "white",
    fontSize: 14,
  },
  drawerFooter: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  footerText: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
  },
})

