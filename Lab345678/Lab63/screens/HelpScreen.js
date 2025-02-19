import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"

export default function HelpScreen() {
    const faqs = [
        {
            question: "How do I create an account?",
            answer: "To create an account, go to the sign-up page and fill in your details.",
        },
        {
            question: "How can I reset my password?",
            answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page.",
        },
        { question: "Is my data secure?", answer: "Yes, we use industry-standard encryption to protect your data." },
        { question: "How can I contact support?", answer: "You can contact our support team at support@example.com" },
    ]

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Help & FAQs</Text>
            {faqs.map((faq, index) => (
                <View key={index} style={styles.faqItem}>
                    <Text style={styles.question}>{faq.question}</Text>
                    <Text style={styles.answer}>{faq.answer}</Text>
                </View>
            ))}
            <TouchableOpacity style={styles.contactButton}>
                <Text style={styles.contactButtonText}>Contact Support</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f0f0f0",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    faqItem: {
        marginBottom: 20,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
    },
    question: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    answer: {
        fontSize: 16,
        color: "#666",
    },
    contactButton: {
        backgroundColor: "#1e88e5",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 20,
    },
    contactButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
})

