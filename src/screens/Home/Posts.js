import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGetPosts } from "../../hooks/posts/useGetPosts";
import { PostItem } from "../../components";

const Posts = () => {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } = useGetPosts()


    const convertData = () => {
        const res = data?.pages.flatMap(page => page.data)
        return res
    }

    return (
        <View>
            {(isFetching && !isFetchingNextPage) ?
                <ActivityIndicator size='large' />
                :
                <FlatList
                    data={convertData()}
                    renderItem={({ item }) => <PostItem {...item} />}
                    onEndReached={hasNextPage && fetchNextPage}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={() => <>
                        {isFetchingNextPage && <ActivityIndicator />}
                    </>}
                />}
        </View>
    );
};

export default Posts;

const styles = StyleSheet.create({});
