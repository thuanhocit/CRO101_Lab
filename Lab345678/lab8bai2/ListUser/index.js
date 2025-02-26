// screens/UserListScreen/index.js
import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles';

const UserListScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://192.168.1.8:5000/users');
            console.log("Dữ liệu nhận được:", response.data);
            setUsers(response.data);
        } catch (error) {
            console.error("Lỗi khi lấy danh sách user:", error.message);
            if (error.response) {
                console.error("Chi tiết lỗi:", error.response.data);
            } else if (error.request) {
                console.error("Không có phản hồi từ server.");
            }
        }
    };
    

    const onDeleteUser = (id) => {
        Alert.alert('Xác nhận', 'Bạn có chắc muốn xoá người dùng này?', [
            { text: 'Huỷ', style: 'cancel' },
            {
                text: 'Xoá',
                onPress: () => {
                    setUsers(users.filter(user => user.id !== id));
                },
            },
        ]);
    };

    useFocusEffect(
        useCallback(() => {
            fetchUsers();
        }, [])
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.email}>{item.email}</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Sửa thông tin" color="blue" onPress={() => navigation.navigate('EditUser', { user: item })} />
                            <Button title="Xoá" color="red" onPress={() => onDeleteUser(item.id)} />
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default UserListScreen;