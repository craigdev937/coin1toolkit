import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./RootReducer";

export const useAD = useDispatch.withTypes<AppDispatch>();
export const useAS = useSelector.withTypes<RootState>();


