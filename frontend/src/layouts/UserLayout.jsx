import { Outlet } from "react-router-dom";
import { useKos } from "../contexts/KosContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function UserLayout() {
    const kos = useKos();

    return (
        <>
            <Navbar kos={kos} />

            <main className="page-wrapper">
                <Outlet />
            </main>

            <Footer />
        </>
    );
}
