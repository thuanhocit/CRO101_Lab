import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { View, Text, StyleSheet, Image } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

const BottomTab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()

const images = {
    Home:  "https://i.pinimg.com/736x/57/7c/c8/577cc844392618013ce82797abd4169e.jpg",
    Profile: "https://i.pinimg.com/736x/d3/86/8d/d3868d8ff0697c52bc523cbbb3cf34d1.jpg",
    Settings: "https://i.pinimg.com/736x/4d/1a/7c/4d1a7cee918017ba39716675f3ec220d.jpg",
    "Top Tab 1": "https://i.pinimg.com/736x/5c/3e/35/5c3e359a39946ac6788226ba71508434.jpg",
    "Top Tab 2": "https://i.pinimg.com/736x/c1/a8/3a/c1a83acd52a45364b196586fd10b5259.jpg",
    "Top Tab 3": "https://i.pinimg.com/736x/e9/1c/ad/e91cad08077766cb9e0fbb4e4ef5659d.jpg",
}

const Screen = ({ name }) => (
    <View style={styles.screen}>
        <Text style={styles.screenTitle}>{name}</Text>
        <Image source={{ uri: images[name] }} style={styles.image} />
    </View>
)

const HomeScreen = () => <Screen name="Home" />
const ProfileScreen = () => <Screen name="Profile" />
const SettingsScreen = () => <Screen name="Settings" />

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
            component={() => <Screen name="Top Tab 1" />}
            options={{
                tabBarLabel: "Tab 1",
                tabBarIcon: ({ color }) => <Icon name="home-outline" size={20} color={color} />,
            }}
        />
        <TopTab.Screen
            name="Tab2"
            component={() => <Screen name="Top Tab 2" />}
            options={{
                tabBarLabel: "Tab 2",
                tabBarIcon: ({ color }) => <Icon name="person-outline" size={20} color={color} />,
            }}
        />
        <TopTab.Screen
            name="Tab3"
            component={() => <Screen name="Top Tab 3" />}
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

export default Bai3_CombinedTabs

