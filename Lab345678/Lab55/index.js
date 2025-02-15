import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://i.pinimg.com/736x/30/43/3a/30433acea2db7c9081168470d5026cc8.jpg' }} // Đường dẫn đến hình ảnh ở đây
        style={styles.image}
      />
      <Text style={styles.title}>PHỐ CỔ HỘI AN</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>5.0</Text>
      </View>
      <Text style={styles.region}>Quảng Nam</Text>
      <Text style={styles.description}>
        Hội An là một thành phố trực thuộc tỉnh Quảng Nam, Việt Nam. 
        Phố cổ Hội An từng là một thương cảng quốc tế sầm uất, 
        gồm những kiến trúc cổ từ thế kỷ 16 trở hàng trăm năm trước, 
        được UNESCO công nhận là di sản văn hóa thế giới từ năm 1999.
      </Text>
      <Text style={styles.price}>$100/ngày</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Đặt ngay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;