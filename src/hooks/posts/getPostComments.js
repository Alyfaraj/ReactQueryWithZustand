import { useQuery } from "@tanstack/react-query"
import { getPost, getPostComments } from "../../apis/services/posts"

export const useGetComments = (id) => {
    const commentsQuery = useQuery({
        queryKey: ['comments', id],
        queryFn: () => getPostComments(id),
    })

    return commentsQuery
}