import React from "react";
import { Text, View, TextInput, ScrollView } from "react-native";
import styles from "./styles";

// Định nghĩa hàm `colorText` và `styleText`
const colorText = (color) => ({ color });
const styleText = (styleObj) => styleObj;

const ViewComponent = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
            <TextInput 
                style={{
                    marginVertical: 10,
                    padding: 15,
                    borderWidth: 1,
                    borderColor: '#2196F3',
                    borderRadius: 8,
                    backgroundColor: '#fff',
                    fontSize: 16,
                    width: '90%',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }} 
                placeholder="Nhập họ tên" 
                placeholderTextColor="#666"
            />
            <TextInput 
                style={{
                    marginVertical: 10,
                    padding: 15,
                    borderWidth: 1,
                    borderColor: '#2196F3',
                    borderRadius: 8,
                    backgroundColor: '#fff',
                    fontSize: 16,
                    width: '90%',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }} 
                placeholder="Nhập số điện thoại" 
                placeholderTextColor="#666"
            />
            <TextInput 
                style={{
                    marginVertical: 10,
                    padding: 15,
                    borderWidth: 1,
                    borderColor: '#2196F3',
                    borderRadius: 8,
                    backgroundColor: '#fff',
                    fontSize: 16,
                    width: '90%',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }} 
                placeholder="Nhập mật khẩu" 
                placeholderTextColor="#666"
            />
            {/* Line 1 */}
            <Text style={styles.baseText}>
                Em vào đời bằng{' '}
                <Text style={[styles.boldText, colorText('red')]}>vàng đỏ</Text> anh vào đời bằng{' '}
                <Text style={[styles.boldText, colorText('yellow')]}>nước trà</Text>
            </Text>

            {/* Line 2 */}
            <Text style={styles.baseText}>
                Bằng cơn mưa thơm{' '}
                <Text style={[styles.boldText, styleText({ fontSize: 20 }), styles.italicText]}>
                    mùi đất{' '}
                </Text>
                và{' '}
                <Text style={[styleText({ fontSize: 10 }), styles.italicText]}>
                    bàng hoa dại mọc trước nhà
                </Text>
            </Text>

            {/* Line 3 */}
            <Text
                style={[
                    styles.baseText,
                    styles.italicText,
                    styles.boldText,
                    colorText('gray'),
                ]}
            >
                Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
            </Text>

            {/* Line 4 */}
            <Text style={[styles.baseText]}>
                Lý trí em là{' '}
                <Text
                    style={styleText({
                        textDecorationLine: 'underline',
                        letterSpacing: 20,
                        fontWeight: 'bold',
                    })}
                >
                    công cụ{' '}
                </Text>
                còn trái tim anh là{' '}
                <Text
                    style={styleText({
                        textDecorationLine: 'underline',
                        letterSpacing: 20,
                        fontWeight: 'bold',
                    })}
                >
                    động cơ{' '}
                </Text>
            </Text>

            {/* Line 5 */}
            <Text style={[styles.baseText, styleText({ textAlign: 'right' })]}>
                Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
            </Text>

            {/* Line 6 */}
            <Text
                style={[
                    styles.baseText,
                    styleText({
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'orange',
                    }),
                ]}
            >
                Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình
            </Text>

            {/* Line 7 */}
            <Text
                style={[
                    styles.baseText,
                    styleText({ fontWeight: 'bold', color: 'black' }),
                ]}
            >
                Em vào đời bằng{' '}
                <Text style={colorText('white')}>mây trắng</Text> em vào đời bằng{' '}
                <Text style={colorText('yellow')}>nắng xanh</Text>
            </Text>

            {/* Line 8 */}
            <Text
                style={[
                    styles.baseText,
                    styleText({ fontWeight: 'bold', color: 'black' }),
                ]}
            >
                Em vào đời bằng{' '}
                <Text style={colorText('white')}>vắng anh</Text>
            </Text>
        </View>
        </ScrollView>
    );
};

export default ViewComponent;
