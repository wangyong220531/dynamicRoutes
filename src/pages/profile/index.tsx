import { Outlet } from "react-router-dom"

export default function Profile() {
    return (
        <>
            <div>我是主页</div>
            <Outlet />
        </>
    )
}
