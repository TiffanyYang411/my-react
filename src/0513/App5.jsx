import {useEffect} from "react"

export default function App() {
    useEffect(() => {
        if (!localStorage.visit) {
            localStorage.visit = 0;
        }
        localStorage.visit = parseInt(localStorage.visit) + 1;
        document.getElementById("count").textContent = localStorage.visit;
    },[])

    return (
        <>
        <h2>拜訪次數：<span id="count"></span></h2>
        </>
    )
}