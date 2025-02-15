import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles"; // Import file styles.js

const Lab51 = () => {
    let [fontsLoaded] = useFonts({
        Shafarik: require("../assets/fonts/Shafarik-Regular.ttf"),
        JetBrainsMono: require("../assets/fonts/JetBrainsMono-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textShafarik}>
                React Native là các đoạn code đã được viết sẵn (framework) do công ty công nghệ Facebook phát triển.
            </Text>
            <Text style={styles.textJetBrainsMono}>
                Các lập trình viên React Native là người sử dụng những framework này để phát triển nên các hệ thống.
            </Text>
        </View>
    );
};

export default Lab51;
