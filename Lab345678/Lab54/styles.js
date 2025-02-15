import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        width: "100%",
        height: 300,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    overlay: {
        position: "absolute",
        top: 200,
        left: 20,
        right: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    rating: {
        color: "#fff",
        marginLeft: 5,
        fontWeight: "bold",
    },
    heartButton: {
        position: "absolute",
        right: 10,
        top: 0,
        backgroundColor: "#fff",
        padding: 8,
        borderRadius: 20,
    },
    detailsContainer: {
        backgroundColor: "#fff",
        padding: 20,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    location: {
        fontSize: 16,
        color: "#007AFF",
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
    },
    description: {
        fontSize: 14,
        color: "#555",
        marginTop: 5,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    button: {
        backgroundColor: "#007AFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
});

export default styles;
