export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top navbar-main">
            <div className="container-fluid px-5">

                {/* BRAND */}
                <a
                    href="#beranda"
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
                </a>

                {/* TOGGLER (MOBILE) */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMain"
                    aria-controls="navbarMain"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
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
                            <a className="nav-link active" href="#beranda">
                                Beranda
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#lokasi">
                                Lokasi
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#tipe-kamar">
                                Tipe Kamar
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#galeri">
                                Galeri
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#faq">
                                FAQ
                            </a>
                        </li>
                    </ul>

                    {/* CTA */}
                    <a
                        href="#sewa"
                        className="btn btn-primary btn-pill ms-lg-4"
                    >
                        Sewa Sekarang
                    </a>
                </div>
            </div>
        </nav>
    );
}
