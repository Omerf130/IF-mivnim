import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IHouseResponse } from '../types/types'

// Define a service using a base URL and expected endpoints
export const houseApi = createApi({
  reducerPath: 'houseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8081/api/houseKeeper' }),
  tagTypes:["House"],
  endpoints: (builder) => ({
    getAllHouses: builder.query<IHouseResponse, void>({
      query: () => "/",
      providesTags:["House"]
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllHousesQuery } = houseApi