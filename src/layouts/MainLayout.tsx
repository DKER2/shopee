import { Outlet } from "react-router-dom"
import Header from "./Header"

const MainLayout = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto pt-32">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout