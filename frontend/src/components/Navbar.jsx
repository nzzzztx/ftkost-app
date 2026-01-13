import { useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export default function Navbar({ kos = null }) {
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const currentSlug = kos?.slug || searchParams.get('kos') || "";

    const isRentalPage = location.pathname.startsWith("/sewa");

    const getTargetLink = (hash) => {
        return isRentalPage ? `/kos/${currentSlug}${hash}` : hash;
    };

    const kosName = kos?.nama || "XML Kos";

    const kosLogo = (() => {
        if (typeof kos?.logo_url === "string" && kos.logo_url.startsWith("http")) {
            return kos.logo_url;
        }

        if (typeof kos?.logo === "string" && kos.logo.startsWith("http")) {
            return kos.logo;
        }

        if (typeof kos?.logo === "string" && kos.logo.length > 0) {
            return `${import.meta.env.VITE_API_URL}/storage/${kos.logo}`;
        }

        return "/logo/logo.svg";
    })();



    useEffect(() => {
        console.log("NAVBAR KOS:", kos);
        console.log("NAVBAR LOGO_URL:", kos?.logo_url);
    }, [kos]);


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top navbar-main">
            <div className="container-fluid px-5">
                <Link
                    to={currentSlug ? `/kos/${currentSlug}` : "/"}
                    className="navbar-brand d-flex align-items-center gap-2"
                >
                    <img
                        src={kosLogo}
                        alt={kosName}
                        className="navbar-logo"
                        loading="lazy"
                    />
                    <span className="navbar-brand-text">
                        <span className="brand-main">{kosName}</span>
                    </span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMain"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarMain">
                    <ul className="navbar-nav align-items-center gap-lg-4">
                        <li className="nav-item">
                            <a className="nav-link" href={getTargetLink("#beranda")}>
                                Beranda
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={getTargetLink("#lokasi")}>
                                Lokasi
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={getTargetLink("#tipe-kamar")}>
                                Tipe Kamar
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={getTargetLink("#faq")}>
                                FAQ
                            </a>
                        </li>
                    </ul>

                    {!isRentalPage && (
                        <a href="#tipe-kamar" className="btn btn-primary btn-pill ms-lg-4">
                            Sewa Sekarang
                        </a>
                    )}
                </div>
            </div>
        </nav>
    );
}