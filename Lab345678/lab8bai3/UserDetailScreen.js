import React, { useEffect, useState } from 'react';
import { 
    View, 
    Text, 
    ActivityIndicator, 
    Alert, 
    TouchableOpacity, 
    Image, 
    StyleSheet 
} from 'react-native';
import axios from 'axios';

const UserDetailScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserDetail = async () => {
            try {
                const response = await axios.get(`http://192.168.1.8:5000/user/${id}`);
                setUser(response.data);
            } catch (error) {
                Alert.alert('Lỗi', 'Không thể lấy thông tin tài khoản');
            } finally {
                setLoading(false);
            }
        };
        fetchUserDetail();
    }, [id]);

    // Xác nhận xoá
    const confirmDelete = () => {
        Alert.alert(
            "Xác nhận xoá",
            "Bạn có chắc chắn muốn xoá tài khoản này?",
            [
                { text: "Hủy", style: "cancel" },
                { text: "Xoá", onPress: deleteUser, style: "destructive" }
            ]
        );
    };

    // Xoá người dùng
    const deleteUser = async () => {
        try {
            await axios.delete(`http://192.168.1.8:5000/user/${id}`);
            Alert.alert('Thành công', 'Xoá người dùng thành công!');
            navigation.goBack();
        } catch (error) {
            Alert.alert('Lỗi', 'Không thể xoá người dùng');
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#ff4757" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {user.avatar && (
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
            )}
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.date}>Ngày tạo: {user.date}</Text>

            <TouchableOpacity style={styles.deleteButton} onPress={confirmDelete}>
                <Text style={styles.deleteButtonText}>Xoá tài khoản</Text>
            </TouchableOpacity>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f7f9fc',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f9fc',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
        borderWidth: 3,
        borderColor: '#ff4757',
        shadowColor: '#ff4757',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 6,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2d3436',
        marginBottom: 8,
    },
    date: {
        fontSize: 16,
        color: '#636e72',
        marginBottom: 20,
    },
    deleteButton: {
        backgroundColor: '#ff4757',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 10,
        shadowColor: '#ff4757',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default UserDetailScreen;
