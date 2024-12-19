import {useEffect} from "react";

export function BackgroundTheme({children}) {
    useEffect(() => {
        const rootId = document.getElementById("root");
        rootId.style.backgroundColor = "#f1f1f1";
        rootId.style.height = "100vh";
        rootId.style.widtjh = "100%";
        rootId.style.overflow = "hidden";
        return () => {
            rootId.style.backgroundColor = "#fff";
        }
    }, []);

    return children;
}