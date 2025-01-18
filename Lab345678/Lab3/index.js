import React, { useState } from "react";
import { Text, View, TextInput, ScrollView, Modal, Button, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

// Define helper functions
const colorText = (color) => ({ color });
const styleText = (styleObj) => styleObj;

const ViewComponent = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Input Fields */}
                {['Nhập họ tên', 'Nhập số điện thoại', 'Nhập mật khẩu'].map((placeholder, index) => (
                    <TextInput
                        key={index}
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
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }}
                        placeholder={placeholder}
                        placeholderTextColor="#666"
                    />
                ))}

                {/* Text Lines */}
                <Text style={styles.baseText}>
                    Em vào đời bằng{' '}
                    <Text style={[styles.boldText, colorText('red')]}>vàng đỏ</Text> anh vào đời bằng{' '}
                    <Text style={[styles.boldText, colorText('yellow')]}>nước trà</Text>
                </Text>
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
                <Text style={[styles.baseText, styles.italicText, styles.boldText, colorText('gray')]}>
                    Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
                </Text>
                <Text style={styles.baseText}>
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
                <Text style={[styles.baseText, styleText({ textAlign: 'right' })]}>
                    Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
                </Text>
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
                <Text
                    style={[
                        styles.baseText,
                        styleText({ fontWeight: 'bold', color: 'black' }),
                    ]}
                >
                    Em vào đời bằng{' '}
                    <Text style={colorText('white')}>vắng anh</Text>
                </Text>

                {/* Show Modal Button */}
                <TouchableOpacity
                    style={{
                        backgroundColor: '#2196F3',
                        padding: 10,
                        borderRadius: 8,
                        marginTop: 20,
                        width: '90%',
                        alignItems: 'center',
                    }}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={{ color: 'white', fontSize: 16 }}>Hiện hình ảnh</Text>
                </TouchableOpacity>

                {/* Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: 'white',
                                padding: 20,
                                borderRadius: 10,
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                source={require('./tesst.jpg')}
                                style={{ width: 200, height: 200, borderRadius: 10 }}
                            />
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#2196F3',
                                    padding: 10,
                                    borderRadius: 5,
                                    marginTop: 10,
                                }}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={{ color: 'white' }}>Đóng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
};

export default ViewComponent;
