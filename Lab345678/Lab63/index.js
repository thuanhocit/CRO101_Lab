import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from "@react-navigation/drawer"
import HomeScreen from "./screens/HomeScreen"
import DetailsScreen from "./screens/DetailsScreen"
import CustomDrawerContent from "./components/CustomDrawerContent"
import { Ionicons } from "@expo/vector-icons"

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "#f5f5f5",
                    width: 240,
                },
                drawerLabelStyle: {
                    color: "#333",
                    fontSize: 16,
                },
                drawerActiveBackgroundColor: "#e0e0e0",
                drawerActiveTintColor: "#1e88e5",
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />,
                }}
            />
            <Drawer.Screen
                name="Help"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Ionicons name="help-circle-outline" size={size} color={color} />,
                }}
            />
        </Drawer.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="DrawerHome" component={DrawerNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

