import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ICoin, IPage, IDetail, IGraph } from "../models/Interfaces";
const URL = "https://api.coingecko.com/api/v3";
const PAGE = "/coins/markets?vs_currency=usd&per_page";
const API = process.env.x_cg_demo_api_key;

export const GeckoAPI = createApi({
    reducerPath: "GeckoAPI",
    tagTypes: ["Coin", "Coins", "Graph"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        coins: builder.query<ICoin[], void>({
            query: () => ({
                url: `/coins/markets?vs_currency=usd&per_page=10`,
                method: "GET",
                headers: {
                    accept: "application/json", 
                    "x-cg-demo-api-key": `${API}`
                }
            }),
            providesTags: ["Coins"]
        }),
        one: builder.query<IDetail, string>({
            query: (coinID) => ({
                url: `/coins/${coinID}`,
                method: "GET",
                headers: {
                    accept: "application/json", 
                    "x-cg-demo-api-key": `${API}`
                }
            }),
            providesTags: ["Coin"]
        }),
        graph: builder.query<IGraph, string>({
            query: (graphID) => ({
                url: `/coins/${graphID
                }/market_chart?vs_currency=usd&days=10&interval=daily`,
                method: "GET",
                headers: {
                    accept: "application/json", 
                    "x-cg-demo-api-key": `${API}`
                }
            }),
            providesTags: ["Graph"]
        }),
        page: builder.mutation<ICoin[], IPage>({
            query: ({ page, perPage }: IPage) => ({
                url: `${PAGE}=${perPage}&page=${page}`,
                method: "GET",
                headers: {
                    accept: "application/json", 
                    "x-cg-demo-api-key": `${API}`
                }
            }),
            invalidatesTags: ["Coins"]            
        })
    })
});


