import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { View, Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()

const HomeScreen = () => (
  <View style={styles.screen}>
    <Text>Home Screen</Text>
  </View>
)

const ProfileScreen = () => (
  <View style={styles.screen}>
    <Text>Profile Screen</Text>
  </View>
)

const SettingsScreen = () => (
  <View style={styles.screen}>
    <Text>Settings Screen</Text>
  </View>
)

const TopTabScreen = () => (
  <TopTab.Navigator
    screenOptions={{
      tabBarStyle: styles.topTabBar,
      tabBarIndicatorStyle: styles.tabBarIndicator,
      tabBarLabelStyle: styles.topTabLabel,
    }}
  >
    <TopTab.Screen
      name="Tab1"
      component={HomeScreen}
      options={{
        tabBarLabel: "Tab 1",
        tabBarIcon: ({ color }) => <Icon name="home-outline" size={20} color={color} />,
      }}
    />
    <TopTab.Screen
      name="Tab2"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Tab 2",
        tabBarIcon: ({ color }) => <Icon name="person-outline" size={20} color={color} />,
      }}
    />
    <TopTab.Screen
      name="Tab3"
      component={SettingsScreen}
      options={{
        tabBarLabel: "Tab 3",
        tabBarIcon: ({ color }) => <Icon name="settings-outline" size={20} color={color} />,
      }}
    />
  </TopTab.Navigator>
)

const App = () => {
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
            } else if (route.name === "TopTabs") {
              iconName = focused ? "apps" : "apps-outline"
            }

            return <Icon name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarLabelPosition: "beside-icon",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="TopTabs" component={TopTabScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  topTabBar: {
    backgroundColor: "#f0f0f0",
    height: 60,
  },
  topTabLabel: {
    fontSize: 14,
    fontWeight: "600",
    textTransform: "none",
  },
  tabBarIndicator: {
    backgroundColor: "#007AFF",
    height: 3,
  },
})

export default App

