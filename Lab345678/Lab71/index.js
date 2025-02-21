import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View, Text, StyleSheet, Image } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator()

const images = {
  Home: "https://i.pinimg.com/736x/57/7c/c8/577cc844392618013ce82797abd4169e.jpg",
  Profile: "https://i.pinimg.com/736x/d3/86/8d/d3868d8ff0697c52bc523cbbb3cf34d1.jpg",
  Settings: "https://i.pinimg.com/736x/4d/1a/7c/4d1a7cee918017ba39716675f3ec220d.jpg",
  Notifications: "https://i.pinimg.com/736x/61/9b/cd/619bcd72f83e26ba336a75d8e30b5d53.jpg",
}

const Screen = ({ name }) => (
  <View style={styles.screen}>
    <Text style={styles.screenTitle}>{name} Screen</Text>
    <Image source={{ uri: images[name] }} style={styles.image} />
  </View>
)

const HomeScreen = () => <Screen name="Home" />
const ProfileScreen = () => <Screen name="Profile" />
const SettingsScreen = () => <Screen name="Settings" />
const NotificationsScreen = () => <Screen name="Notifications" />

const Bai1_BottomMenu = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline"
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline"
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline"
            } else if (route.name === "Notifications") {
              iconName = focused ? "notifications" : "notifications-outline"
            }

            return <Icon name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: styles.tabBar,
          tabBarLabel: ({ focused, color }) => (
            <Text style={[styles.tabBarLabel, { color, display: focused ? "flex" : "none" }]}>{route.name}</Text>
          ),
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  tabBar: {
    height: 60,
    paddingBottom: 5,
    paddingTop: 5,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "600",
  },
})

export default Bai1_BottomMenu

