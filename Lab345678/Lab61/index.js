import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Màn hình chính</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập tên"
                value={name}
                onChangeText={setName}
            />
            <Button title="Đi tới màn hình chi tiết" onPress={() => navigation.navigate('Details', { name, id: 1 })} />
        </View>
    );
};

const DetailsScreen = ({ route, navigation }) => {
    const { name, id } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Màn hình chi tiết</Text>
            <Text>Tên: {name}</Text>
            <Text>ID: {id}</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
            <Button title="Reset" onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Home' }] })} />
            <Button title="Pop" onPress={() => navigation.pop()} />
            <Button title="Pop To Top" onPress={() => navigation.popToTop()} />
        </View>
    );
};

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
);

const CustomDrawerContent = (props) => (
    <View style={styles.drawerContainer}>
        <Text style={styles.drawerTitle}>Menu</Text>
        {props.children}
    </View>
);

const DrawerNavigator = () => (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
        <Drawer.Screen
            name="Home"
            component={StackNavigator}
            options={{
                drawerIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />,
            }}
        />
        <Drawer.Screen
            name="Article"
            component={HomeScreen}
            options={{
                drawerIcon: ({ color, size }) => <MaterialIcons name="article" size={size} color={color} />,
            }}
        />
        <Drawer.Screen
            name="Chat"
            component={HomeScreen}
            options={{
                drawerIcon: ({ color, size }) => <MaterialIcons name="chat" size={size} color={color} />,
            }}
        />
        <Drawer.Screen
            name="Settings"
            component={HomeScreen}
            options={{
                drawerIcon: ({ color, size }) => <MaterialIcons name="settings" size={size} color={color} />,
            }}
        />
    </Drawer.Navigator>
);

export default function App() {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
    },
    drawerContainer: {
        flex: 1,
        padding: 20,
    },
    drawerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
