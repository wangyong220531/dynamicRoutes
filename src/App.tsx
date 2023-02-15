import { BrowserRouter, Routes, Route, useNavigate, useParams } from "react-router-dom"
import "./App.css"
import Profile from "./pages/profile"
import DetailA from "./pages/detailA"
import DetailB from "./pages/detailB"

function Detail() {
    let { path } = useParams()
    return (
        <>
            {{ path }.path === ":123" && <DetailA />}
            {{ path }.path === ":456" && <DetailB />}
        </>
    )
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/profile" element={<Profile />}>
                    <Route path=":path" element={<Detail />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
