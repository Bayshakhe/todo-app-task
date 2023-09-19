import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { serverUrl } from "../../config/config";

export const boardService = createApi({
    reducerPath: "boardService",
    baseQuery: fetchBaseQuery({baseUrl: serverUrl}),
    endpoints: (builder)=>({
        getBoardList: builder.query({
            query: () => ({
                method: "GET",
                url: "boards",
            })
        }),
        createBoard: builder.mutation({
            mutation: (postBody)=> ({
                url: "",
                method: "POST",
                body: postBody,
            })
        })
    })
})

export const {useGetBoardListQuery, useCreateBoardMutation} = boardService;
