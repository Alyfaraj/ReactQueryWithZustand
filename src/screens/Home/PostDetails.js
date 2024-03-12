import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGetPostById } from "../../hooks/posts/useGetPostById";
import { PostItem } from "../../components";
import { useGetComments } from "../../hooks/posts/getPostComments";

const PostDetails = ({ route }) => {
    const { id } = route.params
    const { data, error, isLoading } = useGetPostById(id)
    const { data: commentsRes } = useGetComments(id)


    return (
        <View>
            {isLoading && <ActivityIndicator />}
            <PostItem {...data?.data} />
            <FlatList
                data={commentsRes?.data}
                renderItem={({ item }) => <Text style={styles.comment} >{item.body}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default PostDetails;

const styles = StyleSheet.create({
    comment: {
        marginVertical: 10,
        textAlign: 'left',
        marginHorizontal: 20
    }
});
