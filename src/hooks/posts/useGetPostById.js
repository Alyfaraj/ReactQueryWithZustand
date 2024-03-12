import { useQuery } from "@tanstack/react-query"
import { getPost } from "../../apis/services/posts"

export const useGetPostById = (id) => {
    const postQuery = useQuery({
        queryKey: ['post-id', id],
        queryFn: () => getPost(id),

    })

    return postQuery
}