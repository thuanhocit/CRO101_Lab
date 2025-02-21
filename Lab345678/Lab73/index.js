"use client"

import { useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { View, Text, StyleSheet, Image, ScrollView, Switch, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { Checkbox } from "react-native-paper"

const BottomTab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()

// Album data for Home screen
const albumImages = [
  {
    id: 1,
    title: "Nature",
    image: "https://i.pinimg.com/736x/81/a9/20/81a9205e0aa17f59c5e2ed37c6a3c69a.jpg",
    count: 12,
  },
  {
    id: 2,
    title: "Travel",
    image: "https://i.pinimg.com/736x/ef/fd/25/effd252f09c9f9cc335bda4f6200d3db.jpg",
    count: 8,
  },
  {
    id: 3,
    title: "Food",
    image: "https://i.pinimg.com/736x/db/00/9e/db009e71d45d658dd87fb8ce9765016b.jpg",
    count: 15,
  },
  {
    id: 4,
    title: "Architecture",
    image:  "https://i.pinimg.com/736x/fa/8e/27/fa8e27309f60deaffb3ccfacbbb88d52.jpg",
    count: 10,
  },
  {
    id: 5,
    title: "People",
    image: "https://i.pinimg.com/736x/17/80/08/178008bff8caf229ee594dc061c0ff4e.jpg",
    count: 6,
  },
  {
    id: 6,
    title: "Animals",
    image: "https://i.pinimg.com/736x/14/ba/ff/14baff7e65b68fc7c3b38d1139f161f4.jpg",
    count: 9,
  },
]

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>My Albums</Text>
      <View style={styles.albumGrid}>
        {albumImages.map((album) => (
          <TouchableOpacity
            key={album.id}
            style={styles.albumCard}
            onPress={() => console.log(`Album ${album.title} pressed`)}
          >
            <Image source={{ uri: album.image }} style={styles.albumImage} />
            <View style={styles.albumInfo}>
              <Text style={styles.albumTitle}>{album.title}</Text>
              <Text style={styles.albumCount}>{album.count} photos</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

const ProfileScreen = () => (
  <View style={styles.profileContainer}>
    <View style={styles.profileHeader}>
      <Image source={{ uri:  "https://i.pinimg.com/736x/14/ba/ff/14baff7e65b68fc7c3b38d1139f161f4.jpg", }} style={styles.avatar} />
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileAge}>Age: 28</Text>
      </View>
    </View>
    <View style={styles.interestsContainer}>
      <Text style={styles.interestsTitle}>Interests:</Text>
      <View style={styles.interestsList}>
        <Text style={styles.interestItem}>🎨 Art</Text>
        <Text style={styles.interestItem}>🏋️ Fitness</Text>
        <Text style={styles.interestItem}>📚 Reading</Text>
        <Text style={styles.interestItem}>✈️ Travel</Text>
      </View>
    </View>
  </View>
)

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isExamMode, setIsExamMode] = useState(false)
  const [isSilent, setIsSilent] = useState(false)

  return (
    <View style={styles.settingsContainer}>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Exam Mode</Text>
        <Switch
          value={isExamMode}
          onValueChange={setIsExamMode}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isExamMode ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Silent Mode</Text>
        <Checkbox status={isSilent ? "checked" : "unchecked"} onPress={() => setIsSilent(!isSilent)} />
      </View>
    </View>
  )
}

// Top Tab Screens
const Tab1Content = () => (
  <View style={styles.tabContent}>
    <Text style={styles.tabTitle}>Tab 1 Content</Text>
    <Image source={{ uri:  "https://i.pinimg.com/736x/fa/8e/27/fa8e27309f60deaffb3ccfacbbb88d52.jpg" }} style={styles.tabImage} />
  </View>
)

const Tab2Content = () => (
  <View style={styles.tabContent}>
    <Text style={styles.tabTitle}>Tab 2 Content</Text>
    <Image source={{ uri:  "https://i.pinimg.com/736x/fa/8e/27/fa8e27309f60deaffb3ccfacbbb88d52.jpg" }} style={styles.tabImage} />
  </View>
)

const Tab3Content = () => (
  <View style={styles.tabContent}>
    <Text style={styles.tabTitle}>Tab 3 Content</Text>
    <Image source={{ uri: "https://i.pinimg.com/736x/81/a9/20/81a9205e0aa17f59c5e2ed37c6a3c69a.jpg" }} style={styles.tabImage} />
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
      component={Tab1Content}
      options={{
        tabBarLabel: "Tab 1",
        tabBarIcon: ({ color }) => <Icon name="home-outline" size={20} color={color} />,
      }}
    />
    <TopTab.Screen
      name="Tab2"
      component={Tab2Content}
      options={{
        tabBarLabel: "Tab 2",
        tabBarIcon: ({ color }) => <Icon name="person-outline" size={20} color={color} />,
      }}
    />
    <TopTab.Screen
      name="Tab3"
      component={Tab3Content}
      options={{
        tabBarLabel: "Tab 3",
        tabBarIcon: ({ color }) => <Icon name="settings-outline" size={20} color={color} />,
      }}
    />
  </TopTab.Navigator>
)

const Bai3_CombinedTabs = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
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
        <BottomTab.Screen name="Home" component={HomeScreen} />
        <BottomTab.Screen name="Profile" component={ProfileScreen} />
        <BottomTab.Screen name="Settings" component={SettingsScreen} />
        <BottomTab.Screen name="TopTabs" component={TopTabScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
    color: "#333",
  },
  albumGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 8,
    justifyContent: "space-between",
  },
  albumCard: {
    width: "48%",
    marginBottom: 16,
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  albumImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  albumInfo: {
    padding: 12,
  },
  albumTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  albumCount: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  profileContainer: {
    flex: 1,
    padding: 20,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileInfo: {
    marginLeft: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileAge: {
    fontSize: 18,
    color: "gray",
  },
  interestsContainer: {
    marginTop: 20,
  },
  interestsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  interestsList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  interestItem: {
    fontSize: 16,
    backgroundColor: "#f0f0f0",
    padding: 10,
    margin: 5,
    borderRadius: 20,
  },
  settingsContainer: {
    flex: 1,
    padding: 20,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  settingLabel: {
    fontSize: 18,
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
  tabContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  tabTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  tabImage: {
    width: "100%",
    height: 350,
    borderRadius: 10,
  },
})

export default Bai3_CombinedTabs

