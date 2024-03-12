import { useInfiniteQuery } from "@tanstack/react-query"
import { getPosts } from "../../apis/services/posts"

export const useGetPosts = () => {

    const postsQuery = useInfiniteQuery({
        queryKey: ['post-apis'],
        initialPageParam: 1,
        queryFn: ({ pageParam }) => getPosts(pageParam),
        getNextPageParam: (last, allPages) => {
            return allPages.length + 1
        }
    })

    return postsQuery
}