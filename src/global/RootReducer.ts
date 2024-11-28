import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { GeckoAPI } from "./GeckoAPI";

export const RED = configureStore({
    reducer: {
        [GeckoAPI.reducerPath]: GeckoAPI.reducer,
    },      // gDM = getDefaultMiddleware
    middleware: (gDM) => gDM().concat(GeckoAPI.middleware)
});

setupListeners(RED.dispatch);
export type RootState = ReturnType<typeof RED.getState>;
export type AppDispatch = typeof RED.dispatch;


