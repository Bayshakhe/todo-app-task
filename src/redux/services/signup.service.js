import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { serverUrl } from '../../config/config'

const signupService = createApi({
    reducerPath: "signupService",
    baseQuery: fetchBaseQuery({
        baseUrl: serverUrl,
    }),
    endpoints: (builder) => ({
        postUser: builder.mutation({
            query: (signupUser) => ({
                headers: {
                    "Content-type": "application/json"
                },
                method: "POST",
                url: "/auth/signup",
                body: signupUser,
            })
        })
    })
})

export const {usePostUserMutation} = signupService
export default signupService