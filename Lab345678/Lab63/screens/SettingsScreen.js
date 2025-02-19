"use client"

import React from "react"
import { View, Text, StyleSheet, Switch } from "react-native"

export default function SettingsScreen() {
    const [isDarkMode, setIsDarkMode] = React.useState(false)
    const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(true)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.settingItem}>
                <Text style={styles.settingText}>Dark Mode</Text>
                <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
            </View>
            <View style={styles.settingItem}>
                <Text style={styles.settingText}>Enable Notifications</Text>
                <Switch value={isNotificationsEnabled} onValueChange={setIsNotificationsEnabled} />
            </View>
            <Text style={styles.version}>App Version: 1.0.0</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f0f0f0",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    settingItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    settingText: {
        fontSize: 18,
    },
    version: {
        marginTop: 20,
        textAlign: "center",
        color: "#666",
    },
})

