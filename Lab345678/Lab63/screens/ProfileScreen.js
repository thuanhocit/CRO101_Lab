import { View, Text, StyleSheet, Image } from "react-native"

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://i.imgur.com/7lsPp45.jpeg" }} style={styles.profileImage} />
            <Text style={styles.name}>Thuanhocit</Text>
            <Text style={styles.email}>thuanhocit@example.com</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Joined: January 2023</Text>
                <Text style={styles.infoText}>Posts: 42</Text>
                <Text style={styles.infoText}>Followers: 1337</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
    },
    infoContainer: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: "80%",
        alignItems: "center",
    },
    infoText: {
        fontSize: 16,
        marginBottom: 10,
    },
})

