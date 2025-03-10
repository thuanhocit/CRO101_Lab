import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import moment from 'moment';
import * as ImagePicker from 'expo-image-picker';

const CreateUserScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [avatar, setAvatar] = useState(null);

    // Hàm chọn ảnh từ thư viện
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setAvatar(result.assets[0].uri);
        }
    };

    // Hàm tạo tài khoản
    const handleCreateUser = async () => {
        const formattedDate = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');

        try {
            const response = await axios.post(
                'http://172.16.54.0:5000/user/',
                { name, date: formattedDate, avatar },
                { headers: { 'Content-Type': 'application/json' } }
            );

            Alert.alert('🎉 Thành công', 'Tạo tài khoản thành công');
            navigation.navigate('UserCreated', { name, date: formattedDate, avatar });
        } catch (error) {
            console.log('Lỗi API:', error.response?.data || error.message);
            Alert.alert('❌ Lỗi', error.response?.data?.message || 'Không thể tạo tài khoản');
        }
    };

    return (
        <View style={styles.container}>
            {/* Tiêu đề */}
            <Text style={styles.title}>🎨 Tạo Tài Khoản Mới</Text>

            {/* Chọn ảnh */}
            <TouchableOpacity onPress={pickImage} style={styles.avatarContainer}>
                {avatar ? (
                    <Image source={{ uri: avatar }} style={styles.avatar} />
                ) : (
                    <View style={styles.placeholder}>
                        <Text style={styles.placeholderText}>📷 Chọn ảnh</Text>
                    </View>
                )}
            </TouchableOpacity>

            {/* Input Tên */}
            <TextInput
                placeholder="Nhập tên của bạn"
                value={name}
                onChangeText={setName}
                style={styles.input}
                placeholderTextColor="#888"
            />

            {/* Input Ngày */}
            <TextInput
                placeholder="Ngày tạo (YYYY-MM-DD)"
                value={date}
                onChangeText={setDate}
                style={styles.input}
                placeholderTextColor="#888"
            />

            {/* Nút Tạo tài khoản */}
            <TouchableOpacity style={styles.button} onPress={handleCreateUser}>
                <Text style={styles.buttonText}>🚀 Tạo tài khoản</Text>
            </TouchableOpacity>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#fff0f5', // Màu nền hồng nhẹ nhàng
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ff4757',
        marginBottom: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 4,
    },
    avatarContainer: {
        marginBottom: 20,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 65,
        borderWidth: 3,
        borderColor: '#ff6b6b',
        shadowColor: '#ff4757',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 6,
    },
    placeholder: {
        width: 130,
        height: 130,
        borderRadius: 65,
        backgroundColor: '#ffcccc',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 4,
    },
    placeholderText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    input: {
        width: '100%',
        height: 50,
        borderRadius: 25, // Bo góc tròn hơn
        borderWidth: 1,
        borderColor: '#ff4757',
        paddingHorizontal: 20,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    button: {
        width: '100%',
        height: 55,
        borderRadius: 30, // Bo góc tròn đẹp hơn
        backgroundColor: '#ff4757',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#ff4757',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 6,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1.2, // Khoảng cách chữ giúp đẹp hơn
    },
});

export default CreateUserScreen;
