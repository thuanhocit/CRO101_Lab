import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Thư viện icon
import styles from "./styles"; // Import styles từ file styles.js

const TravelCard = () => {
    return (
        <View style={styles.container}>
            {/* Ảnh nền */}
            <Image
                source={{ uri: "https://i.pinimg.com/736x/30/43/3a/30433acea2db7c9081168470d5026cc8.jpg" }}
                style={styles.image}
            />

            {/* Nội dung hiển thị trên ảnh */}
            <View style={styles.overlay}>
                <Text style={styles.title}>PHỐ CỔ HỘI AN</Text>
                <View style={styles.ratingContainer}>
                    <FontAwesome name="star" size={16} color="yellow" />
                    <Text style={styles.rating}>5.0</Text>
                </View>
                <TouchableOpacity style={styles.heartButton}>
                    <FontAwesome name="heart" size={20} color="red" />
                </TouchableOpacity>
            </View>

            {/* Phần thông tin chi tiết */}
            <View style={styles.detailsContainer}>
                <Text style={styles.location}>📍 Quảng Nam</Text>
                <Text style={styles.subtitle}>Thông tin chuyến đi</Text>
                <Text style={styles.description}>
                    Hội An là một thành phố thuộc tỉnh Quảng Nam, Việt Nam. Phố cổ Hội An từng là một thương cảng quốc tế sầm uất...
                </Text>

                {/* Giá và nút đặt ngay */}
                <View style={styles.footer}>
                    <Text style={styles.price}>$100/Ngày</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Đặt ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default TravelCard;