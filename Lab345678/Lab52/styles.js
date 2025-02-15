import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    details: {
        marginLeft: 40,
        alignSelf: 'flex-start',  // Ensures left alignment
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'left',
        paddingBottom: 20,
    },
    firstLine: {
        fontSize: 40,
        color: 'white',
    },
    secondLine: {
        fontSize: 40,
        color: 'white',
    },
    button: {
        width: 100,
        height: 50,
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        color: 'black',
    },
    textStyle: {
        color: 'white',
        fontSize: 16,
        padding: 10,
        marginBottom: 10,
    },
});

export default styles;
