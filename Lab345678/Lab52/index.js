import React from 'react'
import { View, Text, StatusBar, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import styles from './styles'

const Lab5 = () => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)"/>
            <ImageBackground
                source={require('../assets/background.jpg')}
                style={styles.image}
                resizeMode='contain'>
                    <View style={styles.details}>
                        <Text style={styles.text}>
                            <Text style={styles.firstLine}>Discovery {'\n'}</Text>
                            <Text style={styles.secondLine}>world with us</Text>
                        </Text>
                        <Text style={styles.textStyle}>Discovery world with us</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
        </View>
    );
};

export default Lab5;