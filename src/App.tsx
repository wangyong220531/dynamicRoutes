import { BrowserRouter, Routes, Route, useNavigate, useParams, Navigate } from "react-router-dom"
import "./App.css"
import Profile from "./pages/profile"
import DetailA from "./pages/detailA"
import DetailB from "./pages/detailB"
import NotFound from "./pages/notFound"
import Home from "./pages/home"

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
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />}>
                    <Route path=":path" element={<Detail />}></Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
