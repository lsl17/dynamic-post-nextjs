import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { dataType } from "./types";
export const PortalContext = createContext<{
    data: dataType[],
    setData: Dispatch<SetStateAction<dataType[]>>
}>({
    data: [],
    setData: () => { }
})
export const usePortalContext = () => useContext(PortalContext)