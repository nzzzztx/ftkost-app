import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const isRentalPage = location.pathname.startsWith("/sewa");

    /**
     * Helper:
     * - Jika di halaman sewa → balik ke "/" + hash
     * - Jika di landing → langsung hash
     */
    const navLink = (hash) => {
        return isRentalPage ? `/${hash}` : hash;
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top navbar-main">
            <div className="container-fluid px-5">
                {/* LOGO */}
                <Link
                    to="/"
                    className="navbar-brand d-flex align-items-center gap-2"
                >
                    <img
                        src="/logo/logo.svg"
                        alt="XML Kos"
                        className="navbar-logo"
                    />
                    <span className="navbar-brand-text">
                        <span className="brand-main">XML</span>
                        <span className="brand-sub">Kos</span>
                    </span>
                </Link>

                {/* TOGGLER */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMain"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                {/* MENU */}
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarMain"
                >
                    <ul className="navbar-nav align-items-center gap-lg-4">
                        <li className="nav-item">
                            <a className="nav-link" href={navLink("#beranda")}>
                                Beranda
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href={navLink("#lokasi")}>
                                Lokasi
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href={navLink("#tipe-kamar")}>
                                Tipe Kamar
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href={navLink("#galeri")}>
                                Galeri
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href={navLink("#faq")}>
                                FAQ
                            </a>
                        </li>
                    </ul>

                    {/* CTA hanya muncul di landing */}
                    {!isRentalPage && (
                        <a
                            href="#tipe-kamar"
                            className="btn btn-primary btn-pill ms-lg-4"
                        >
                            Sewa Sekarang
                        </a>
                    )}
                </div>
            </div>
        </nav>
    );
}
