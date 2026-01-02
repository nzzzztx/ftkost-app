export default function RoomType() {
    return (
        <section id="tipe-kamar" className="room-section">
            <div className="container">

                {/* HEADER */}
                <div className="room-header text-center">
                    <h2>
                        <span className="text-primary">TIPE</span>{" "}
                        <span className="text-warning">KAMAR</span>
                    </h2>
                    <p>
                        Pilih tipe kamar yang paling pas buat kebutuhan dan gaya hidup kamu.
                        Semua kamar sudah disiapkan dengan kenyamanan maksimal.
                    </p>
                </div>

                {/* GRID */}
                <div className="room-grid">

                    <div className="room-card">
                        <div
                            id="roomA"
                            className="carousel slide room-carousel"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/images/room1.jpg" alt="Kamar Tipe A" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/room4.jpg" alt="Kamar Tipe A" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/room5.jpg" alt="Kamar Tipe A" />
                                </div>
                            </div>

                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#roomA"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" />
                            </button>

                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#roomA"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" />
                            </button>
                        </div>
                        <div className="room-body">
                            <h5>Kamar Tipe A</h5>

                            <div className="room-price">
                                Rp 2.500.000 <span>/ bulan</span>
                            </div>

                            <div className="room-tags">
                                <span>Pria & Wanita</span>
                                <span>9.8 m²</span>
                                <span>Lantai 1 & 2</span>
                            </div>

                            <ul className="room-facilities">
                                <li>Tempat tidur + sprei</li>
                                <li>Kamar mandi dalam</li>
                                <li>AC</li>
                                <li>Meja & Lemari</li>
                            </ul>

                            <div className="room-note success">
                                Termasuk internet / wifi, laundry, cleaning
                            </div>

                            <div className="room-note danger">
                                Tidak termasuk listrik
                            </div>

                            <a
                                href="https://wa.me/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-pill w-100"
                            >
                                Chat Pemilik Kos
                            </a>
                        </div>
                    </div>

                    <div className="room-card highlight">

                        <div
                            id="roomB"
                            className="carousel slide room-carousel"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/images/room2.jpg" alt="Kamar Tipe B" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/room6.jpg" alt="Kamar Tipe B" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/room7.jpg" alt="Kamar Tipe B" />
                                </div>
                            </div>

                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#roomB"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" />
                            </button>

                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#roomB"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" />
                            </button>
                        </div>

                        <div className="room-body">
                            <h5>Kamar Tipe B</h5>

                            <div className="room-price">
                                <small className="text-muted text-decoration-line-through">
                                    Rp 2.450.000
                                </small>
                                <div>
                                    <span className="badge-discount">-12%</span>
                                    Rp 2.150.000 <span>/ bulan</span>
                                </div>
                            </div>

                            <ul className="room-facilities">
                                <li>Full set bed</li>
                                <li>Kamar mandi dalam</li>
                                <li>AC</li>
                                <li>Lemari</li>
                            </ul>

                            <div className="room-note success">
                                Termasuk internet / wifi, laundry, cleaning
                            </div>

                            <div className="room-note danger">
                                Tidak termasuk listrik
                            </div>

                            <a
                                href="https://wa.me/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-pill w-100"
                            >
                                Chat Pemilik Kos
                            </a>
                        </div>
                    </div>

                    <div className="room-card">

                        <div
                            id="roomC"
                            className="carousel slide room-carousel"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/images/room3.jpg" alt="Kamar Tipe C" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/room8.jpg" alt="Kamar Tipe C" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/room9.jpg" alt="Kamar Tipe C" />
                                </div>
                            </div>

                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#roomC"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" />
                            </button>

                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#roomC"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" />
                            </button>
                        </div>

                        <div className="room-body">
                            <h5>Kamar Tipe C</h5>

                            <div className="room-price">
                                Rp 1.800.000 <span>/ bulan</span>
                            </div>

                            <ul className="room-facilities">
                                <li>Kamar mandi luar</li>
                                <li>AC</li>
                                <li>Meja & Kursi</li>
                            </ul>

                            <div className="room-note success">
                                Termasuk internet / wifi, laundry, cleaning
                            </div>

                            <div className="room-note danger">
                                Tidak termasuk listrik
                            </div>

                            <a
                                href="https://wa.me/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-pill w-100"
                            >
                                Chat Pemilik Kos
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
