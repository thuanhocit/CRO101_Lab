import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f7f9fc', // Màu nền nhẹ, hiện đại
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2d3436', // Màu chữ đậm hơn
        marginBottom: 15,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 3,
    },
    info: {
        fontSize: 18,
        color: '#636e72', // Màu xám hiện đại
        marginBottom: 12,
        textAlign: 'center',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginVertical: 15,
        borderWidth: 3,
        borderColor: '#6200ea',
        shadowColor: '#6200ea',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 6, // Hiệu ứng bóng giúp avatar nổi bật hơn
    }
});

export default styles;
