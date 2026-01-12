import { Outlet, useLocation } from "react-router-dom";
import { useKos } from "../contexts/KosContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function UserLayout() {
    const kos = useKos();
    const location = useLocation();

    const isKosPage = location.pathname.startsWith("/kos");

    return (
        <>
            {!isKosPage && <Navbar kos={kos} />}

            <main className="page-wrapper">
                <Outlet />
            </main>

            <Footer />
        </>
    );
}
