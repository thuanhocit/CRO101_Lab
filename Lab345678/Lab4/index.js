import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { FlatList } from 'react-native';

const data = [
    { id: "1", avatarSource: require("./images/h1.png"), name: "Xuan Thuan" },
    { id: "2", avatarSource: require("./images/h2.png"), name: "JavaScript" },
];

const ListItem = ({ avatarSource, name, onCallPress }) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", padding: 10, marginTop: 15 }}>
            <Image
            source={avatarSource}
            style={{ width: 50, height: 50, borderRadius: 25 }}>
            </Image>
            <Text style={{ flex: 1, marginLeft: 10, color: "red"}}>{name}</Text>
            <Button title='call' onPress={onCallPress}></Button>
        </View>
    );
};

const Lab4 = () => {
    const handleCallPress = () => {

    };

    return (
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item}) => (
            <ListItem
            avatarSource={item.avatarSource}
            name={item.name}
            onCallPress={handleCallPress}>
            </ListItem>
        )}
        />
    );
};

export default Lab4;