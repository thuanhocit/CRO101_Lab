import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const HoiAnScreen = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://i.pinimg.com/736x/30/43/3a/30433acea2db7c9081168470d5026cc8.jpg' }}
                style={styles.headerImage}
            >
                <View style={styles.overlay}>
                    {/* Nút quay lại */}
                    <TouchableOpacity style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>

                    {/* Điểm đánh giá & Trái tim */}
                    <View style={styles.ratingAndHeartContainer}>
                        <View style={styles.ratingContainer}>
                            <Ionicons name="star" size={16} color="yellow" />
                            <Text style={styles.ratingText}> 5.0</Text>
                        </View>
                        <TouchableOpacity 
                            style={styles.heartButton} 
                            onPress={() => setIsFavorite(!isFavorite)}
                        >
                            <Ionicons 
                                name={isFavorite ? "heart" : "heart-outline"} 
                                size={24} 
                                color="red" 
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

            {/* Nội dung */}
            <View style={styles.contentContainer}>
                <View style={styles.locationContainer}>
                    <Ionicons name="location-outline" size={20} color="#4A90E2" />
                    <Text style={styles.locationText}>Quảng Nam</Text>
                </View>

                <Text style={styles.title}>PHỐ CỔ HỘI AN</Text>

                <Text style={styles.subtitle}>Thông tin chuyến đi</Text>

                <Text style={styles.description}>
                Hội An là một thành phố trực thuộc tỉnh Quảng Nam, Việt Nam. 
        Phố cổ Hội An từng là một thương cảng quốc tế sầm uất, 
        gồm những kiến trúc cổ từ thế kỷ 16 trở hàng trăm năm trước, 
        được UNESCO công nhận là di sản văn hóa thế giới từ năm 1999.
                </Text>

                {/* Giá & Nút Đặt Ngay */}
                <View style={styles.footer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>$100</Text>
                        <Text style={styles.priceUnit}>/Ngày</Text>
                    </View>
                    <TouchableOpacity style={styles.bookButton}>
                        <Text style={styles.bookButtonText}>Đặt ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HoiAnScreen;
