import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PostItem = ({ title, body, id }) => {
    const { navigate } = useNavigation()

    const onPostPress = () => {
        navigate('PostDetails', { id })
    }

    return (
        <Pressable onPress={onPostPress} style={styles.card} >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
        </Pressable>
    );
};

export default PostItem;

const styles = StyleSheet.create({
    card: {
        width: '90%',
        paddingVertical: 16,
        paddingHorizontal: 20,
        alignSelf: 'center',
        borderRadius: 6,
        shadowOpacity: .1,
        shadowOffset: { width: 1, height: 1 },
        marginVertical: 8,
        backgroundColor: 'white'
    },
    title: {
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 5
    },
    body: {
        fontWeight: "300",
        fontSize: 12,
        opacity: .7

    }
});
