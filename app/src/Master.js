import { Outlet } from "react-router-dom/dist";
import Header from "./Header";

export default function Master(){
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}