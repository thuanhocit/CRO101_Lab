import React from "react";
import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";
import { RefreshControl, ScrollView, StatusBar } from "react-native";
import { styles } from "./styles";

const Lab42 = () => {
    const STYLES = ["default", "dark-content", "light-content"];
    const [statusBarStyle, setStatusBarStyle] = React.useState(STYLES[0]);
    const [refreshing, setRefreshing] = React.useState(false);

    const changeStatusBarStyle = () => {
        const styleId = STYLES.indexOf(statusBarStyle) + 1;
        setStatusBarStyle(STYLES[styleId % STYLES.length]); // Đảm bảo vòng lặp đúng
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        console.log("Đang làm mới...");
        
        setTimeout(() => {
            changeStatusBarStyle(); // Đổi màu status bar khi refresh
            setRefreshing(false);
            console.log("Làm mới xong!");
        }, 1000); // Tăng thời gian để hiệu ứng rõ hơn
    }, []);

    return (
        <ScrollView
            style={styles.container}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing} // Fix lỗi chính tả
                    onRefresh={onRefresh} // Fix logic gọi đúng hàm làm mới
                />
            }
        >
            <StatusBar
                barStyle={statusBarStyle}
                translucent
                backgroundColor={"transparent"}
            />
            <Text style={styles.text}> Kéo xuống để đổi màu Status bar </Text>
        </ScrollView>
    );
};

export default Lab42;
